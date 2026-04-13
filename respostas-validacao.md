# Atividade MVC - Respostas

---

## 1. Verificar se a descrição da tarefa não está vazia ao criar uma nova tarefa.

**Camada:** Controller  
**Justificativa:** O controller é responsável por validar os dados recebidos na requisição antes de enviá-los para o model. Como a descrição vem do request body, essa validação deve acontecer no controller.

---

## 2. Verificar se o ID da tarefa existe antes de tentar atualizar ou remover uma tarefa.

**Camada:** Model  
**Justificativa:** O model é responsável pelo acesso e manipulação dos dados. Ele é a única camada que conhece a estrutura dos dados e pode verificar se o ID existe.

---

## 3. Verificar se os parâmetros de consulta (query) são válidos ao listar as tarefas (ex: concluido true ou false).

**Camada:** Controller  
**Justificativa:** Query parameters fazem parte da requisição HTTP. O controller deve validar e normalizar esses dados antes de repassá-los ao model.

---

## 4. Converter o parâmetro id vindo da URL (string → number) antes de buscar os dados.

**Camada:** Controller  
**Justificativa:** O controller é responsável por preparar e normalizar os dados da requisição antes de enviá-los ao model, garantindo que os tipos estejam corretos.

---

## 5. Impedir a remoção de uma tarefa que já esteja marcada como "concluída".

**Camada:** Model  
**Justificativa:** Isso é uma regra de negócio. O model é responsável por garantir regras e restrições relacionadas aos dados.

---

## 6. Verificar se o usuário já atingiu o limite máximo de 10 tarefas pendentes antes de permitir a criação.

**Camada:** Model  
**Justificativa:** Também é uma regra de negócio, pois envolve controle e restrição baseada no estado dos dados.
