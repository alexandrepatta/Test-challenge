describe('Formulário de Cadastro', () => {
  const elementos = {
    nome: () => cy.get('[data-test=nome]'),
    email: () => cy.get('[data-test=email]'),
    confirmacaoEmail: () => cy.get('[data-test=confirmacao-email]'),
    senha: () => cy.get('[data-test=senha]'),
    botaoEnviar: () => cy.get('[data-test=botao-enviar]'),
    mensagemSucesso: () => cy.contains('Cadastro realizado com sucesso'),
    mensagemErro: (msg) => cy.contains(msg)
  };

  beforeEach(() => {
    cy.visit('/cadastro'); // Ajuste a URL conforme necessário
  });

  const preencherFormulario = (nome, email, confirmacaoEmail, senha) => {
    if (nome) elementos.nome().type(nome);
    if (email) elementos.email().type(email);
    if (confirmacaoEmail) elementos.confirmacaoEmail().type(confirmacaoEmail);
    if (senha) elementos.senha().type(senha);
  };

  it('Deve enviar o formulário com sucesso quando preenchido corretamente', () => {
    preencherFormulario('Alexandre', 'teste@email.com', 'teste@email.com', 'Teste123');
    elementos.botaoEnviar().click();
    elementos.mensagemSucesso().should('be.visible');
  });

  it('Deve exibir erro ao tentar enviar sem preencher campos obrigatórios', () => {
    elementos.botaoEnviar().click();
    ['Nome é obrigatório', 'E-mail é obrigatório', 'Senha é obrigatória'].forEach((mensagem) => {
      elementos.mensagemErro(mensagem).should('be.visible');
    });
  });

  it('Deve exibir erro ao inserir uma senha fraca', () => {
    preencherFormulario('Alexandre', 'teste@email.com', 'teste@email.com', '12345');
    elementos.botaoEnviar().click();
    elementos.mensagemErro('A senha deve ter no mínimo 8 caracteres, uma letra maiúscula e um número').should('be.visible');
  });

  it('Deve exibir erro quando e-mails não coincidem', () => {
    preencherFormulario('Alexandre', 'teste@email.com', 'diferente@email.com', 'Teste123');
    elementos.botaoEnviar().click();
    elementos.mensagemErro('Os e-mails digitados não coincidem').should('be.visible');
  });
});
