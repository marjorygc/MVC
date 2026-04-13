import {
  listarTarefas,
  criarTarefa,
  obterTarefa,
  atualizarTarefa,
  concluirTarefa,
  removerTarefa,
  obterResumoController,
  listarTarefasPendentes
} from '../controllers/tarefa.controller.js'

export default async function tarefaRoutes(server, options) {

  server.get('/tarefas', async (request, reply) => {
    console.log("Routes: GET /tarefas chamada")
    await listarTarefas(request, reply)
  })

  server.post('/tarefas', async (request, reply) => {
    console.log("Routes: POST /tarefas chamada")
    await criarTarefa(request, reply)
  })

  server.get('/tarefas/:id', async (request, reply) => {
    console.log("Routes: GET /tarefas/:id chamada")
    await obterTarefa(request, reply)
  })

  server.patch('/tarefas/:id/concluir', async (request, reply) => {
    console.log("Routes: PATCH /tarefas/:id/concluir chamada")
    await concluirTarefa(request, reply)
  })

  server.delete('/tarefas/:id', async (request, reply) => {
    console.log("Routes: DELETE /tarefas/:id chamada")
    await removerTarefa(request, reply)
  })

  server.get('/tarefas/pendentes', async (request, reply) => {
  console.log("Routes: GET /tarefas/pendentes chamada")

  await listarTarefasPendentes(request, reply)
})

  server.get('/tarefas/resumo', async (request, reply) => {
    console.log("Routes: GET /tarefas/resumo chamada")
    await obterResumoController(request, reply)
  })

  server.patch('/tarefas/:id', async (request, reply) => {
    console.log("Routes: PATCH /tarefas/:id chamada")
    await atualizarTarefa(request, reply)
  })
}