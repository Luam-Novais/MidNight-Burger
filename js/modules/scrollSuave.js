export default function scrollSuave(){
   const containersAnimate = document.querySelectorAll('[data-scroll = "scroll"]')
   const windowHeight = window.innerHeight * 0.6
    if(containersAnimate.length){
    function animateScroll(){
        containersAnimate.forEach(container =>{
           const containerTop = container.getBoundingClientRect().top - windowHeight
           if(containerTop < 0){
                container.classList.add('active-scroll')
           }
        })
       }
       window.addEventListener('scroll', animateScroll)
  }
}