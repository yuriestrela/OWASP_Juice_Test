# language: pt
Funcionalidade: Cadastro de usuário
    Dado que o usuário está na página de cadastro
    E o usuário clica no campo "Email" e não preenche nada
    Quando o usuário preenche todos os campos obrigatórios com "senha e pergunta de segurança válidos porém com um e-mail em branco"
    Então o sistema deve exibir a mensagem "Please provide an email address.", o botão de registrar deve estar desabilitado e não realizar o cadastro

  Cenário: CT001 - Cadastro com sucesso
    Dado que o usuário está na página de cadastro
    Quando o usuário preenche todos os campos obrigatórios com "e-mail, senha e confirmação de senha válidos e pergunta de segurança validos"
    Então o sistema deve realizar o cadastro e ir para a página de login

  Cenário: CT002 - Cadastro com campo de e-mail inválido
    Dado que o usuário está na página de cadastro
    Quando o usuário preenche todos os campos obrigatórios com "usuário, senha e pergunta de segurança válidos porém com um e-mail sem @dominio"
    Então o sistema deve exibir a mensagem "Email address is not valid.", o botão de registrar deve estar desabilitado e não realizar o cadastro

  Cenário: CT003 - Cadastro com campo de senha inválido
    Dado que o usuário está na página de cadastro
    Quando o usuário preenche todos os campos obrigatórios com "e-mail, pergunta de segurança válidos porém com uma senha inválida"
    Então o sistema deve exibir a mensagem "Password must be 5-40 characters long.", o botão de registrar deve estar desabilitado e não realizar o cadastro

  Cenário: CT004 - Cadastro com campo de se senha diferente de confirmação
    Dado que o usuário está na página de cadastro
    Quando o usuário preenche todos os campos obrigatórios com "e-mail, senha e pergunta de segurança válidos porém com uma confirmação de senha diferente"
    Então o sistema deve exibir a mensagem " Passwords do not match", o botão de registrar deve estar desabilitado e não realizar o cadastro

  Cenário: CT005 - Cadastro com campo de e-mail em branco

  Cenário: CT006 - Cadastro com campo de senha em branco
    Dado que o usuário está na página de cadastro
    E o usuário clica no campo "Password" e não preenche nada
    Quando o usuário preenche todos os campos obrigatórios com "e-mail, repetição de senha e pergunta de segurança válidos porém com uma senha em branco"
    Então o sistema deve exibir a mensagem "Please provide a password.", o botão de registrar deve estar desabilitado e não realizar o cadastro
    E o sistema deve exibir a mensagem "Passwords do not match", o botão de registrar deve estar desabilitado e não realizar o cadastro

  Cenário: CT007 - Cadastro com a confirmação de senha em branco
    Dado que o usuário está na página de cadastro
    E o usuário clica no campo "Repeat Password" e não preenche nada
    Quando o usuário preenche todos os campos obrigatórios com "e-mail, senha e pergunta de segurança válidos porém com uma confirmação de senha em branco"
    Então o sistema deve exibir a mensagem "Please repeat your password.", o botão de registrar deve estar desabilitado e não realizar o cadastro

  Cenário: CT008 - Cadastro com campo de pergunta de segurança em branco
    Dado que o usuário está na página de cadastro
    E o usuário clica no campo "Security Question" e não preenche nada
    Quando o usuário preenche todos os campos obrigatórios com "e-mail, senha e confirmação de senha e resposta de segurança válidos porém sem uma pergunta de segurança"
    Então o sistema deve exibir a mensagem "Please provide a security question.", o botão de registrar deve estar desabilitado e não realizar o cadastro
  # Cenário: CT00 - Cadastro com e-mail já cadastrado
  #   Dado que o usuário está na página de cadastro
  #   Quando o usuário preenche todos os campos obrigatórios com "usuário e senha válidos porém com um e-mail já cadastrado"
  #   Então o sistema deve exibir a mensagem "O e-mail informado já está cadastrado" e não realizar o cadastro
