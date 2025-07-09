# language: pt

Funcionalidade: Login de usuário e Logout
  Como um usuário do sistema
  Eu quero realizar o login e logout
  Para acessar as funcionalidades do sistema


Cenário: CT001 - Login com sucesso
  Dado que o usuário está na página de login
  Quando o usuário preenche os campos obrigatórios com "e-mail e senha válidos"
  Então o sistema deve realizar o login e ir para a página inicial

Cenário: CT002 - Login com e-mail inválido
  Dado que o usuário está na página de login
  Quando o usuário preenche os campos com "Email e senha porém com um e-mail inválido"
  Então o sistema deve exibir a mensagem "Email address is not valid." e não realizar o login

Cenário: CT003 - Login com senha inválida
  Dado que o usuário está na página de login
  Quando o usuário preenche os campos com "Email e senha porém com uma senha inválida"
  Então o sistema deve exibir a mensagem "Password is not valid." e não realizar o login

Cenário: CT004 - Login com e-mail em branco
  Dado que o usuário está na página de login
  Quando o usuário preenche os campos com "Email e senha porém com um e-mail em branco"
  Então o sistema deve exibir a mensagem "Please provide an email address." e não realizar o login

Cenário: CT005 - Login com senha em branco
  Dado que o usuário está na página de login
  Quando o usuário preenche os campos com "Email e senha porém com uma senha em branco"
  Então o sistema deve exibir a mensagem "Please provide a password." e não realizar o login

Cenário: CT006 - Login com e-mail e senha em branco
  Dado que o usuário está na página de login
  Quando o usuário preenche os campos com "Email e senha em branco"
  Então o sistema deve exibir as mensagens "Please provide an email address." e "Please provide a password." e não realizar o login

Cenário: CT007 - Login com e-mail não cadastrado
  Dado que o usuário está na página de login
  Quando o usuário preenche os campos com "Email e senha porém com um e-mail não cadastrado"
  Então o sistema deve exibir a mensagem "Email not found." e não realizar o login

Cenário: CT008 - Login com senha incorreta
  Dado que o usuário está na página de login
  Quando o usuário preenche os campos com "Email e senha porém com uma senha incorreta"
  Então o sistema deve exibir a mensagem "Password is incorrect." e não realizar o login

Cenário: CT009 - Login com e-mail e senha incorretos
  Dado que o usuário está na página de login
  Quando o usuário preenche os campos com "Email e senha porém com um e-mail e senha incorretos"
  Então o sistema deve exibir as mensagens "Email not found." e "Password is incorrect." e não realizar o login

Cenário: CT010 - Login com link "Esqueci minha senha"
  Dado que o usuário está na página de login
  Quando o usuário clica no link "Esqueci minha senha"
  Então o sistema deve redirecionar o usuário para a página de recuperação de senha

Cenário: CT011 - Login com link "Not yet a customer?"
  Dado que o usuário está na página de login
  Quando o usuário clica no link "Not yet a customer?"
  Então o sistema deve redirecionar o usuário para a página de cadastro

Cenário: CT012 - Login com botão "Entrar"
  Dado que o usuário está na página de login
  Quando o usuário clica no botão "Entrar"
  Então o sistema deve realizar o login e ir para a página inicial

Cenário: CT013 - Botão de mostrar/ocultar senha
  Dado que o usuário está na página de login
  Quando o usuário clica no botão "Show password"
  Então o sistema deve exibir a senha digitada no campo de senha
  Quando o usuário clica novamente no botão "Hide password"
  Então o sistema deve ocultar a senha digitada no campo de senha

Cenário: CT014 - Marcar e desmarcar o checkbox "Remember me"
  Dado que o usuário está na página de login
  Então o checkbox "Remember me" deve estar desmarcado por padrão
  Quando o usuário marca o checkbox "Remember me"
  Então ele deve ficar marcado
  E ao clicar novamente, ele deve ficar desmarcado


Cenário: CT015 - Login com o Google
    Dado que o usuário está na página de login
    Quando o usuário clica no botão "Entrar com o Google"
    E o sistema o redirecionar o usuário para a página de autenticação do Google
    Então o usuário deve ser capaz de realizar o login com sua conta do Google

Cenário: CT016 - Logout com sucesso
  Dado que o usuário está logado na página inicial
  Quando o usuário realiza o logout clicando no botão "Logout"
  Então o sistema deve realizar o logout e redirecionar o usuário para a página de login

Cenário: CT017 - Login com botão "Voltar"
  Dado que o usuário realiza o logout clicando no botão "Logout"
  Quando o usuário clica no botão "Voltar"
  Então o sistema não deve realizar o login e deve redirecionar o usuário para a página de login

