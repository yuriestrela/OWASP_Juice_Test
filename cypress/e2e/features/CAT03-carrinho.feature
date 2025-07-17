# language: pt

Funcionalidade: Carrinho de compras

  Como um usuário do sistema
  Eu quero adicionar, remover e atualizar produtos no carrinho
  Para realizar a compra dos produtos desejados

#     Dado que o usuário está na página de cadastro
#     Quando o usuário preenche todos os campos obrigatórios com "e-mail, senha e confirmação de senha válidos e pergunta de segurança válidos porém com um e-mail já cadastrado"

  Cenário: CT001 - Adicionar produto ao carrinho com sucesso
    Dado que o usuário está na página de cadastro
    Quando o usuário preenche todos os campos obrigatórios com "e-mail, senha e confirmação de senha válidos e pergunta de segurança validos"
    Então o sistema deve realizar o cadastro e ir para a página de login
    # Dado que o usuário está na página de login
    Quando o usuário preenche os campos obrigatórios com "e-mail e senha válidos"
    Então o sistema deve realizar o login e ir para a página inicial
    # Alterar para fazer login via API depois

    Dado que o usuário está na página de um produto
    E o usuário clica no botão "Add to Basket" o produto "<Produto>"
    Quando o usuário navega para a página do carrinho
    Então o sistema deve realizar o envio do produto "<Produto>" para o carrinho
    Exemplos:
      | Produto              | Valor |
      | Apple Juice (1000ml) | 1.99  |


#   Cenário: CT002 - Verificar carrinho vazio
#     Dado que o usuário está na página de um produto
#     Quando o usuário navega para a página do carrinho
#     Então o sistema deve exibir a mensagem "Seu carrinho está vazio."

#   Cenário: CT003 - Remover produto do carrinho
#     Dado que o usuário está na página do carrinho com produtos adicionados
#     Quando o usuário clica no botão "Remover" de um produto
#     Então o sistema deve exibir a mensagem "Produto removido do carrinho." e o produto não deve mais estar presente no carrinho

#   Cenário: CT004 - Atualizar quantidade de produtos no carrinho
#     Dado que o usuário está na página do carrinho com produtos adicionados
#     Quando o usuário altera a quantidade de um produto e clica em "Atualizar"
#     Então o sistema deve atualizar a quantidade do produto e exibir a mensagem "Carrinho atualizado com sucesso."

#   Cenário: CT005 - Calcular subtotal corretamente
#     Dado que o usuário está na página do carrinho com produtos adicionados
#     Então o sistema deve exibir o subtotal corretamente com base nas quantidades e preços dos produtos

#   Cenário: CT006 - Carrinho deve manter itens após recarregar a página
#     Dado que o usuário está na página do carrinho com produtos adicionados
#     Quando o usuário recarrega a página
#     Então o carrinho deve manter os produtos anteriormente adicionados

#   Cenário: CT007 - Finalizar compra com produtos no carrinho
#     Dado que o usuário está na página do carrinho com produtos adicionados
#     Quando o usuário clica no botão "Finalizar compra"
#     Então o sistema deve redirecionar para a página de checkout

#   Cenário: CT008 - Tentar finalizar compra com carrinho vazio
#     Dado que o usuário está na página do carrinho vazio
#     Quando o usuário clica no botão "Finalizar compra"
#     Então o sistema deve exibir a mensagem "Seu carrinho está vazio. Adicione produtos para continuar." e não deve redirecionar para a página de checkout