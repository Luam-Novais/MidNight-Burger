import MENU from "./dados.js"
import {createMenuCard } from "./createElements.js"
import { cardapio } from "./cardapio.js"


export default function loadingCardapio(){
    const cardContainer = document.querySelector('.cards-container')
    const categorias = document.querySelectorAll('.categorias a')

    MENU.lanches.forEach(item =>{
        cardContainer.appendChild(createMenuCard(item))
    })
    cardapio.methods.changeQuantity()
    cardapio.methods.addCarrinho()

    categorias.forEach(categoria =>{
        categoria.addEventListener('click', (event)=>{
            const activeCategory = event.target.getAttribute('id').split('menu-')[1]
            cardContainer.innerText = ''
            MENU[activeCategory].forEach(item =>{
                cardContainer.appendChild(createMenuCard(item))
            })
            cardapio.methods.changeQuantity()
        })

    })
}