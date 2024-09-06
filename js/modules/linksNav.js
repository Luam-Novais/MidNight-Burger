export function initLinksNav(){
    const linksHeader = document.querySelectorAll('[data-links = "links-nav"] a');
    const currentUrl = window.location.href
    linksHeader.forEach((link) =>{
        if(link.href === currentUrl){
            link.classList.add('ativo')
        }
    })

}

const linksCardapio = document.querySelectorAll('[data-subtittle="categorias-subtittle"] a') 

linksCardapio.forEach((link) =>{
    link.addEventListener('click', (event) =>{
        event.preventDefault()
        linksCardapio.forEach(link => link.classList.remove('ativo'))
        event.currentTarget.classList.add('ativo')
    })
})
