import {
  listar,
  criar,
  buscarPorId,
  atualizar,
  alternarConcluido,
  remover,
  obterResumo,
  listarPendentes
} from '../models/tarefa.model.js'

// GET /tarefas
export async function listarTarefas(request, reply) {
  console.log("Controller: listarTarefas chamado")

  const { busca, concluido } = request.query

  const resultado = await listar({ busca, concluido })

  return reply.send(resultado)
}

// POST /tarefas
export async function criarTarefa(request, reply) {
  console.log("Controller: criarTarefa chamado")

  const { descricao } = request.body

  if (!descricao || descricao.trim() === '') {
    return reply.status(400).send({
      status: 'error',
      message: 'A descrição da tarefa é obrigatória'
    })
  }

  const nova = await criar(descricao)

  return reply.status(201).send(nova)
}

// GET /tarefas/:id
export async function obterTarefa(request, reply) {
  console.log("Controller: obterTarefa chamado")

  const id = Number(request.params.id)

  const tarefa = await buscarPorId(id)

  if (!tarefa) {
    return reply.status(404).send({
      status: 'error',
      message: 'Tarefa não encontrada'
    })
  }

  return reply.send(tarefa)
}

// PATCH /tarefas/:id
export async function atualizarTarefa(request, reply) {
  console.log("Controller: atualizarTarefa chamado")

  const id = Number(request.params.id)

  const tarefa = await atualizar(id, request.body)

  if (!tarefa) {
    return reply.status(404).send({
      status: 'error',
      message: 'Tarefa não encontrada'
    })
  }

  return reply.send(tarefa)
}

// PATCH /tarefas/:id/concluir
export async function concluirTarefa(request, reply) {
  console.log("Controller: concluirTarefa chamado")

  const id = Number(request.params.id)

  const tarefa = await alternarConcluido(id)

  if (!tarefa) {
    return reply.status(404).send({
      status: 'error',
      message: 'Tarefa não encontrada'
    })
  }

  return reply.send(tarefa)
}

// DELETE /tarefas/:id
export async function removerTarefa(request, reply) {
  console.log("Controller: removerTarefa chamado")

  const id = Number(request.params.id)

  const ok = await remover(id)

  if (!ok) {
    return reply.status(404).send({
      status: 'error',
      message: 'Tarefa não encontrada'
    })
  }

  return reply.status(204).send()
}

// GET /tarefas/resumo
export async function obterResumoController(request, reply) {
  console.log("Controller: obterResumo chamado")

  const resumo = await obterResumo()

  return reply.send(resumo)
}


export async function listarTarefasPendentes(request, reply) {
  console.log("Controller: listarTarefasPendentes chamado")

  const resultado = await listarPendentes()

  return reply.send(resultado)
}