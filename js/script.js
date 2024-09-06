import scrollSuave from './modules/scrollSuave.js'
import {initLinksNav} from './modules/linksNav.js'
import loadingCardapio from './modules/generateCards.js'
import galery from './modules/galery.js'
import { MEU_CARRINHO, Carrinho } from './modules/carrinho.js'

function init(){
    scrollSuave()
    initLinksNav()
    loadingCardapio()
    galery()
    Carrinho.methods.shoppingBag()
}

document.addEventListener('DOMContentLoaded',() =>{
   init()
} )