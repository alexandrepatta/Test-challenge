📌 Relatório de Testes Automatizados

✅ Cypress

Este relatório apresenta os resultados dos testes automatizados de UI para o formulário de cadastro, utilizando Cypress. Os testes verificam cenários essenciais de validação, funcionalidade e usabilidade.

📝 Cobertura dos Testes

Os seguintes cenários foram cobertos:

Cadastro bem-sucedido: Verifica se o formulário pode ser enviado com sucesso quando preenchido corretamente.

Campos obrigatórios: Valida se mensagens de erro são exibidas quando os campos não são preenchidos.

Validação de senha: Testa se uma senha fraca é rejeitada corretamente.

E-mails divergentes: Verifica se o sistema impede o cadastro com e-mails que não coincidem.

📊 Resultados

Total de testes executados: 4

Passaram: 0

Falharam: 1

Ignorados: 3

❌ Erros Identificados

Erro principal: cy.visit('/cadastro') resultou em 404 - Not Found, impedindo a execução dos testes.

Impacto: Todos os testes foram ignorados devido ao erro no beforeEach, impossibilitando a validação do fluxo esperado.


----------------------------------------------------------------------------------------------------------------------------------------


✅ Postman

Este relatório apresenta os resultados dos testes automatizados de API, utilizando a coleção Postman. Os testes foram realizados com base em diferentes status codes e validação da estrutura JSON das respostas.

📝 Cobertura dos Testes

Os seguintes cenários foram cobertos:

Get Test: Valida se o endpoint GET responde com status 200 e estrutura JSON válida.
Post Test: Verifica se o endpoint POST cria um novo usuário corretamente com status 201 e estrutura JSON válida.
Status 200 Test: Testa se o endpoint GET retorna status 200 e a estrutura JSON está correta.
Status 400 Test: Valida se o endpoint POST retorna status 400 e contém a mensagem de erro.
Status 500 Test: Verifica se o endpoint POST retorna status 500 em caso de erro do servidor.
📊 Resultados

Total de testes executados: 5
Passaram: 4
Falharam: 1
❌ Erros Identificados

Erro 1: No Status 400 Test, o código de status retornado foi 201, ao invés de 400. O teste esperava um erro de validação no corpo da requisição, mas foi aceito como uma criação válida.
Impacto: O teste não validou corretamente o comportamento esperado para uma requisição com erro de validação.

Erro 2: No Status 400 Test, a resposta não continha a mensagem de erro esperada ("error"). A falta dessa informação impossibilitou a validação completa do fluxo de erro.
Impacto: O teste não validou se o erro foi gerado corretamente e se a mensagem de erro foi retornada, como esperado para status 400.


----------------------------------------------------------------------------------------------------------------------------------------


✅ K6 Performance Test

Este relatório apresenta os resultados do teste de carga realizado com K6 para o endpoint https://jsonplaceholder.typicode.com/posts. O objetivo do teste foi avaliar o comportamento do sistema com 100 usuários simultâneos, durante 30 segundos, verificando o status de resposta e o tempo de resposta.

📝 Cobertura dos Testes

Os seguintes cenários foram cobertos:

Status 200: Verifica se o endpoint retorna o status 200 (OK).
Tempo de resposta abaixo de 500ms: Verifica se o tempo de resposta para cada requisição é inferior a 500ms.

📊 Resultados

Total de requisições executadas: 2919
Usuários simultâneos: 100
Duração total do teste: 30 segundos
Taxa de erro: 0.00% (nenhum erro detectado)

🔍 Métricas

Status 200: 100% das requisições retornaram com o status 200.
Tempo de resposta:
Média: 32.26ms
Mínimo: 18.98ms
Máximo: 355.64ms
P90 (percentil 90): 38.7ms
P95 (percentil 95): 46.98ms
Taxa de erro: 0.00% de falhas nas requisições.
📉 Outras métricas de desempenho:

Tempo de resposta de requisições (média): 32.26ms
Taxa de requisições por segundo: 94.11 requisições por segundo
Tempo de iteração (média): 1.03s

❌ Erros Identificados

Não houve erros no teste, todas as requisições retornaram com sucesso, e o tempo de resposta ficou dentro dos limites definidos.