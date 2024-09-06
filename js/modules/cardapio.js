import MENU from "./dados.js"
import { MEU_CARRINHO, Carrinho } from "./carrinho.js"
export const cardapio = {} 

cardapio.methods = {
    addCarrinho(){

        const cardContainer = document.querySelector('.cards-container')

            cardContainer.addEventListener('click', (event)=>{
                if(event.target.classList.contains('add-carrinho')){

                    const clickedCard = event.target.closest('.card')
                    let quantity = clickedCard.querySelector('.quantity')
                    let currentQuantity = +quantity.innerText
                    if(currentQuantity > 0){
                        
                        let activeCategory = document.querySelector('.categorias a.ativo').getAttribute('id').split('menu-')[1]
                        const item = MENU[activeCategory].find(el =>{return el.id === clickedCard.id})
                        if(item){
                            let carrinho = JSON.parse(localStorage.getItem('carrinho')) || []
                            if(MEU_CARRINHO.find(elem =>{return elem.id === item.id})){
                                
                                let objIndex = MEU_CARRINHO.findIndex(el => { return el.id === item.id})
                                MEU_CARRINHO[objIndex].quantidade += currentQuantity
                            }
                            else{
                                item.quantidade = currentQuantity
                                carrinho.push(item)
                            }
                            localStorage.setItem('carrinho', JSON.stringify(carrinho))
                            Carrinho.methods.shoppingBag()
                            
                        }
                    }
                    quantity.innerText = 0
                }
        })
    },

    changeQuantity(){

        const cardContainer = document.querySelector('.cards-container')
        const cards = cardContainer.querySelectorAll('.card')
        cards.forEach(card =>{

            const increaseBtn = card.querySelector('.btn-quantity-increase')
            let quantity = card.querySelector('.quantity')
                increaseBtn.addEventListener('click', ()=>{

                    let quantityNumber = +quantity.innerText
                    quantity.innerText = quantityNumber + 1
            })

            const decreaseBtn = card.querySelector('.btn-quantity-decrease')
            decreaseBtn.addEventListener('click', ()=>{

                let quantityNumber = +quantity.innerText
                if(quantityNumber > 0){
                    quantity.innerText = quantityNumber -1
                }
            })
        }) 

    }
}


// linha 10 --- usando event delegation para nao precisar adicionar um addEventListener a todos os btns, so vai adicionar evento se o elemento clicado tiver a classe add-carrinho, ou seja o btn

//linha 13 ---closest serve para pegar o elemento com a classe q foi passada mais proximo do elemento que foi clicado

 // linha 18 --- verificando a categoria ativa

// linha 20 --- find serve para achar um um elemento dentro do  array que satisfaz a condiçao necessaria, no caso ele esta retornando o elemento que tem o mesmo id do elemento que foi clicado (ele sempre retorna um obj)

// linha 23 --- verificando no carrinho qual elemento satisfaz a condiçao

// linha 26 --- findIndex serve para retornar o indice, aqui eu estiu verificando  se o item ja existe no carrinho, se for verdadeiro, so acrescenta a quantidade