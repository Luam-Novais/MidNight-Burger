export const MEU_CARRINHO = []

export const Carrinho = {}
Carrinho.methods = {
    shoppingBag: ()=>{
        let carrinhoLocalStorage = JSON.parse(localStorage.getItem('carrinho'))
        if(carrinhoLocalStorage){
            let reduceQuantidade = carrinhoLocalStorage.reduce((quantidadeTotal, el) => {
                quantidadeTotal += el.quantidade
                return quantidadeTotal
            },0)
            if(reduceQuantidade > 0){
                document.querySelector('.btn-to-carrinho').classList.remove('hidden')
            }
            document.querySelector('.btn-to-carrinho span').innerText = reduceQuantidade
        }
    }
}