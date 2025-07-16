# language: pt
Funcionalidade: Login de usuário e Logout

  Como um usuário do sistema
  Eu quero realizar o login e logout
  Para acessar as funcionalidades do sistema

  Cenário: CT000 - Certificação de que o usuário válido está cadastrado (Site não salva o cadastro por mais de 1 dia)
    Dado que o usuário está na página de cadastro
    Quando o usuário preenche todos os campos obrigatórios com "e-mail, senha e confirmação de senha válidos e pergunta de segurança válidos porém com um e-mail já cadastrado"
    Então o sistema deve realizar o cadastro e ir para a página de login  

  Cenário: CT001 - Login com sucesso
    Dado que o usuário está na página de login
    Quando o usuário preenche os campos obrigatórios com "e-mail e senha válidos"
    Então o sistema deve realizar o login e ir para a página inicial

  Cenário: CT002 - Login com e-mail inválido
    Dado que o usuário está na página de login
    Quando o usuário preenche os campos obrigatórios com "Email e senha porém com um e-mail inválido"
    Então o sistema deve exibir a mensagem "Invalid email or password." e não realizar o login

  Cenário: CT003 - Login com senha inválida
    Dado que o usuário está na página de login
    Quando o usuário preenche os campos obrigatórios com "Email e senha porém com uma senha inválida"
    Então o sistema deve exibir a mensagem "Invalid email or password." e não realizar o login

  Cenário: CT004 - Login com e-mail em branco
    Dado que o usuário está na página de login
    E o usuário clica no campo "Email" e não preenche nada
    Quando o usuário preenche os campos obrigatórios com "Senha porém com um e-mail em branco"
    Então o sistema deve exibir a mensagem "Please provide an email address.", o botão de login deve estar desabilitado e não deve realizar o login

  Cenário: CT005 - Login com senha em branco
    Dado que o usuário está na página de login
    E o usuário clica no campo "Password" e não preenche nada
    Quando o usuário preenche os campos obrigatórios com "Email porém com uma senha em branco"
    Então o sistema deve exibir a mensagem "Please provide a password.", o botão de login deve estar desabilitado e não deve realizar o login

  Cenário: CT006 - Login com e-mail e senha em branco
    Dado que o usuário está na página de login
    E o usuário clica no campo "Email" e não preenche nada
    E o usuário clica no campo "Password" e não preenche nada
    Quando o usuário preenche os campos obrigatórios com "Email e senha em branco"
    Então o sistema deve exibir as mensagens "Please provide an email address." e "Please provide a password.", o botão de login deve estar desabilitado e não deve realizar o login

  Cenário: CT007 - Login com e-mail não cadastrado
    Dado que o usuário está na página de login
    Quando o usuário preenche os campos obrigatórios com "Email e senha porém com um e-mail não cadastrado"
    Então o sistema deve exibir a mensagem "Email not found." e não realizar o login

  Cenário: CT008 - Login com senha incorreta
    Dado que o usuário está na página de login
    Quando o usuário preenche os campos obrigatórios com "Email e senha porém com uma senha incorreta"
    Então o sistema deve exibir a mensagem "Password is incorrect." e não realizar o login

  Cenário: CT009 - Login com botão "Entrar"
    Dado que o usuário está na página de login
    Quando o usuário preenche os campos obrigatórios com "e-mail e senha válidos"
    Então o usuário clica no botão "Entrar" e o sistema deve realizar o login e ir para a página inicial

  Cenário: CT010 - Link "Forgot your password?"
    Dado que o usuário está na página de login
    E o usuário clica no link "Forgot your password?"
    E o sistema deve redirecionar o usuário para a página de recuperação de senha

  Cenário: CT011 - Login com link "Not yet a customer?"
    Dado que o usuário está na página de login
    Quando o usuário clica no link "Not yet a customer?"
    Então o sistema deve redirecionar o usuário para a página de cadastro

  Cenário: CT012 - Botão de mostrar/ocultar senha
    Dado que o usuário está na página de login
    E o usuário preenche os campos obrigatórios com "e-mail e senha válidos"
    Quando o usuário clica no botão "Show password"
    Então o sistema deve "exibir" a senha digitada no campo de senha
    Quando o usuário clica no botão "Show password"
    Então o sistema deve "ocultar" a senha digitada no campo de senha

  Cenário: CT013 - Marcar e desmarcar o checkbox "Remember me"
    Dado que o usuário está na página de login
    Quando o usuário clica no checkbox "Remember me"
    Então ele deve ficar "marcado"
    Quando o usuário clica no checkbox "Remember me"
    Então ele deve ficar "desmarcado"

  Cenário: CT014 - Logout com sucesso
    Dado que o usuário está na página de login
    E o usuário preenche os campos obrigatórios com "e-mail e senha válidos"
    E o sistema deve realizar o login e ir para a página inicial
    Quando o usuário realiza o logout clicando no botão "Logout"
    Então o sistema deve realizar o logout e redirecionar o usuário para a página de login

  Cenário: CT015 - Login com botão "Voltar"
    Dado que o usuário está na página de login
    E o usuário preenche os campos obrigatórios com "e-mail e senha válidos"
    E o sistema deve realizar o login e ir para a página inicial
    E o usuário realiza o logout clicando no botão "Logout"
    Quando o usuário clica no botão "Voltar" no navegador
    Então o sistema não deve permitir o acesso à página inicial e deve redirecionar o usuário para a página de login
