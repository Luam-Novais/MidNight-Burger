export function createElements(tag, classe){
    const element = document.createElement(tag)
    element.classList.add(classe)
    
    return element
}


export function createMenuCard(item){

        const card = createElements('div', 'card')
        const imgFood = createElements('img', 'img-food')
        const nameFood = createElements('p', 'nome-food')
        const ingredientes = createElements('p', 'ingredientes')
        const preco = createElements('p', 'preco')

        card.setAttribute('id', item.id)


        imgFood.setAttribute('src', item.img)
        imgFood.setAttribute('alt', `img-${item.nome}`)
        nameFood.innerText = item.nome
        ingredientes.innerText = item.ingredientes
        preco.innerText = item.preco.toFixed(2).replace('.', ',')
    
        const containerQuantity = createElements('div', 'container-quantity')
        const btnsQuantity = createElements('div', 'btns-container')
        const btnDecrease = createElements('button', 'btn-quantity-decrease')
        const quantity = createElements('p', 'quantity')
        const btnIncrease = createElements('button', 'btn-quantity-increase')
        quantity.innerText = '0'
        btnDecrease.innerText = '-'
        btnIncrease.innerText = '+'
    
        const btnAddCarrinho = createElements('button', 'add-carrinho')
        const imgCart = createElements('img','shopping-cart')
        imgCart.setAttribute('src', './img/shopping-cart.svg')
    
        btnAddCarrinho.innerText = `adicionar`
        btnAddCarrinho.append(imgCart)
    
        btnsQuantity.append(btnDecrease, quantity, btnIncrease)
        containerQuantity.append(btnsQuantity, btnAddCarrinho)
        card.append(imgFood, nameFood, ingredientes, preco, containerQuantity )
        
        return card
    
}