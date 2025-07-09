# language: pt
Funcionalidade: Cadastro de usuário
  Como um usuário do sistema
  Eu quero realizar o cadastro
  

  Cenário: CT001 - Cadastro com sucesso
    Dado que o usuário está na página de cadastro
    Quando o usuário preenche todos os campos obrigatórios com "e-mail, senha e confirmação de senha válidos e pergunta de segurança validos"
    Então o sistema deve realizar o cadastro e ir para a página de login

  Cenário: CT002 - Cadastro com campo de e-mail inválido
    Dado que o usuário está na página de cadastro
    Quando o usuário preenche todos os campos obrigatórios com "e-mail, senha e pergunta de segurança válidos porém com um e-mail sem @dominio"
    Então o sistema deve exibir a mensagem "Email address is not valid.", o botão de registrar deve estar desabilitado e não realizar o cadastro

  Cenário: CT003 - Cadastro com campo de senha inválido (menos de 5 caracteres)
    Dado que o usuário está na página de cadastro
    Quando o usuário preenche todos os campos obrigatórios com "e-mail, pergunta de segurança válidos porém com uma senha com menos de 5 caracteres"
    Então o sistema deve exibir a mensagem "Password must be 5-40 characters long.", o botão de registrar deve estar desabilitado e não realizar o cadastro

  Cenário: CT004 - Cadastro com campo de senha inválido (mais de 40 caracteres)
    Dado que o usuário está na página de cadastro
    Quando o usuário preenche todos os campos obrigatórios com "e-mail, pergunta de segurança válidos porém com uma senha com mais de 40 caracteres"
    Então o sistema deve exibir a mensagem "Password must be 5-40 characters long.", o botão de registrar deve estar desabilitado e não realizar o cadastro

  Cenário: CT005 - Cadastro com campo de senha diferente de confirmação
    Dado que o usuário está na página de cadastro
    Quando o usuário preenche todos os campos obrigatórios com "e-mail, senha e pergunta de segurança válidos porém com uma confirmação de senha diferente"
    Então o sistema deve exibir a mensagem "Passwords do not match", o botão de registrar deve estar desabilitado e não realizar o cadastro

  Cenário: CT006 - Cadastro com campo de e-mail em branco
    Dado que o usuário está na página de cadastro
    E o usuário clica no campo "Email" e não preenche nada
    Quando o usuário preenche todos os campos obrigatórios com "senha, repetição de senha e pergunta de segurança válidos porém com um e-mail em branco"
    Então o sistema deve exibir a mensagem "Please provide an email address.", o botão de registrar deve estar desabilitado e não realizar o cadastro

  Cenário: CT007 - Cadastro com campo de senha em branco
    Dado que o usuário está na página de cadastro
    E o usuário clica no campo "Password" e não preenche nada
    Quando o usuário preenche todos os campos obrigatórios com "e-mail, repetição de senha e pergunta de segurança válidos porém com uma senha em branco"
    Então o sistema deve exibir a mensagem "Please provide a password.", o botão de registrar deve estar desabilitado e não realizar o cadastro
    E o sistema deve exibir a mensagem "Passwords do not match", o botão de registrar deve estar desabilitado e não realizar o cadastro

  Cenário: CT008 - Cadastro com a confirmação de senha em branco
    Dado que o usuário está na página de cadastro
    E o usuário clica no campo "Repeat Password" e não preenche nada
    Quando o usuário preenche todos os campos obrigatórios com "e-mail, senha e pergunta de segurança válidos porém com uma confirmação de senha em branco"
    Então o sistema deve exibir a mensagem "Please repeat your password.", o botão de registrar deve estar desabilitado e não realizar o cadastro

  Cenário: CT009 - Cadastro com campo de pergunta de segurança em branco
    Dado que o usuário está na página de cadastro
    E o usuário clica no campo "Security Question" e não preenche nada
    Quando o usuário preenche todos os campos obrigatórios com "e-mail, senha e confirmação de senha e resposta de segurança válidos porém sem uma pergunta de segurança"
    Então o sistema deve exibir a mensagem "Please provide a security question.", o botão de registrar deve estar desabilitado e não realizar o cadastro

  Cenário: CT010 - Cadastro com campo de resposta de segurança em branco
    Dado que o usuário está na página de cadastro
    E o usuário clica no campo "Answer" e não preenche nada
    Quando o usuário preenche todos os campos obrigatórios com "e-mail, senha e confirmação de senha válidos porém com uma resposta de segurança em branco"
    Então o sistema deve exibir a mensagem "Please provide an answer to your security question.", o botão de registrar deve estar desabilitado e não realizar o cadastro

  Cenário: CT011 - Cadastro com e-mail já cadastrado
    Dado que o usuário está na página de cadastro
    E o usuário preenche todos os campos obrigatórios com "e-mail, senha e confirmação de senha válidos e pergunta de segurança válidos porém com um e-mail já cadastrado"
    E o usuário tenta realizar o cadastro
    Então o sistema deve exibir a mensagem "Email must be unique" e não realizar o cadastro

  Cenário: CT012 - Cadastro com todos os campos em branco
    Dado que o usuário está na página de cadastro
    E o usuário clica no campo "Email" e não preenche nada
    E o usuário clica no campo "Password" e não preenche nada
    E o usuário clica no campo "Repeat Password" e não preenche nada
    E o usuário clica no campo "Security Question" e não preenche nada
    Quando o usuário clica no campo "Answer" e não preenche nada
    Então o sistema deve exibir as mensagens de erro "Please provide an email address.", "Please provide a password.", "Please repeat your password.", " Please select a security question." e "Please provide an answer to your security question.", o botão de registrar deve estar desabilitado e não realizar o cadastro

  Cenário: CT013 - Digitando senha no botão de senha aconselhável
    Dado que o usuário está na página de cadastro
    E o usuário clica no botão "Password Strength"
    E o botão ir para a direita e exibir o menu de senha aconselhável
    Quando o usuário preenche o campo de senha com "<senha>"
    Então a mensagem "<requisito>" deve ficar com o ícone de check "verde" ao lado
    E a barra de progresso deve estar em "<progresso>"

    Exemplos:
      | senha    | requisito                               | progresso |
      | a        | contains at least one lower character   |        20 |
      | aB       | contains at least one upper character   |        40 |
      | aB1      | contains at least one digit             |        60 |
      | aB1@     | contains at least one special character |        80 |
      | aB1@1234 | contains at least 8 characters          |       100 |

  Cenário: CT014 - Deletando senha no botão de senha aconselhável
    Dado que o usuário está na página de cadastro
    E o usuário clica no botão "Password Strength"
    E o botão ir para a direita e exibir o menu de senha aconselhável
    Quando o usuário preenche o campo de senha com "<senha>"
    Então a mensagem "<requisito>" deve ficar com o ícone de check "vermelho" ao lado
    E a barra de progresso deve estar em "<progresso>"

    Exemplos:
      | senha | requisito                                | progresso |
      | aB1@  | contains at least 8 characters           |        80 |
      | aB1   | contains at least one special characters |        60 |
      | aB    | contains at least one digit              |        40 |
      | a     | contains at least one upper character    |        20 |
      |       | contains at least one lower character    |         0 |

  Cenário: CT015 - Acessar a página de login a partir da página de cadastro
    Dado que o usuário está na página de cadastro
    Quando o usuário clica no link "Already a customer?"
    Então o sistema deve redirecionar para a página de login