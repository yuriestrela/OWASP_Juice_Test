# language: pt
Funcionalidade: Cadastro de usuário

  Cenário: CT001 - Cadastro com sucesso
    Dado que o usuário está na página de cadastro
    Quando o usuário preenche todos os campos obrigatórios com "e-mail, senha e confirmação de senha válidos e pergunta de segurança validos"
  #   Então o sistema deve exibir a mensagem "Cadastro realizado!" e realizar login automaticamente

  # Cenário: CT002 - Cadastro com campo de e-mail inválido
  #   Dado que o usuário está na página de cadastro
  #   Quando o usuário preenche todos os campos obrigatórios com "usuário e senha válidos porém com um e-mail sem @dominio"
  #   Então o sistema deve exibir a mensagem "O campo e-mail deve ser preenchido corretamente" e não realizar o cadastro

  # Cenário: CT003 - Cadastro com campo de senha inválido
  #   Dado que o usuário está na página de cadastro
  #   Quando o usuário preenche todos os campos obrigatórios com "usuário e e-mail válidos porém com uma senha inválida"
  #   Então o sistema deve exibir a mensagem "O campo senha deve ter pelo menos 6 dígitos" e não realizar o cadastro

  # Cenário: CT004 - Cadastro com campo de usuário em branco
  #   Dado que o usuário está na página de cadastro
  #   Quando o usuário preenche todos os campos obrigatórios com "e-mail e senha válidos porém com um usuário em branco"
  #   Então o sistema deve exibir a mensagem "O campo nome deve ser preenchido" e não realizar o cadastro

  # Cenário: CT005 - Cadastro com campo de e-mail em branco
  #   Dado que o usuário está na página de cadastro
  #   Quando o usuário preenche todos os campos obrigatórios com "usuário e senha válidos porém com um e-mail em branco"
  #   Então o sistema deve exibir a mensagem "O campo e-mail deve ser preenchido" e não realizar o cadastro

  # Cenário: CT006 - Cadastro com campo de senha em branco
  #   Dado que o usuário está na página de cadastro
  #   Quando o usuário preenche todos os campos obrigatórios com "usuário e e-mail válidos porém com uma senha em branco"
  #   Então o sistema deve exibir a mensagem "O campo senha deve ter pelo menos 6 dígitos" e não realizar o cadastro

  # Cenário: CT007 - Cadastro com todos os campos em branco
  #   Dado que o usuário está na página de cadastro
  #   Quando o usuário preenche todos os campos obrigatórios com "usuário, e-mail e senha em branco"
  #   Então o sistema deve exibir as mensagens de erro "O campo nome deve ser preenchido", "O campo e-mail deve ser preenchido" e "O campo senha deve ser preenchido"
  #   E não deve realizar o cadastro

  # Cenário: CT008 - Cadastro com e-mail já cadastrado
  #   Dado que o usuário está na página de cadastro
  #   Quando o usuário preenche todos os campos obrigatórios com "usuário e senha válidos porém com um e-mail já cadastrado"
  #   Então o sistema deve exibir a mensagem "O e-mail informado já está cadastrado" e não realizar o cadastro