window.addEventListener('scroll', onScroll)

onScroll()
function onScroll(){
    showNavOnScropll()
    showBackToTopbutton()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}
function activateMenuAtCurrentSection(secao) {
    const localizacaoDaTela=scrollY
    const alturaDaTela=innerHeight
    const linhaCentral=localizacaoDaTela + (alturaDaTela/2)

    const alturaDaSecao=secao.offsetHeight
    const localizacaoDaSecao=secao.offsetTop

    const linhaCentralEstaAbaixoDaAlturaDaSecao=linhaCentral>localizacaoDaSecao
    const linhaCentralEstaAcimaDoFimDaSecao=localizacaoDaSecao+alturaDaSecao>linhaCentral

    const linhaCentralEstaDentroDaSecao=linhaCentralEstaAbaixoDaAlturaDaSecao&&linhaCentralEstaAcimaDoFimDaSecao

    const idDaCesao=secao.getAttribute('id')
    const elementoAserModificado=document.querySelector(`.menu a[href*=${idDaCesao}]`)

    elementoAserModificado.classList.remove('active')
    if(linhaCentralEstaDentroDaSecao){
        elementoAserModificado.classList.add('active')
    }
  }
function showNavOnScropll(){
    if(scrollY==0){
        navigation.classList.remove('scroll')
    }else{
        navigation.classList.add('scroll')
    }
}
function showBackToTopbutton(){
    if(scrollY>600){
        backToTop.classList.add('show')
    }else{
        backToTop.classList.remove('show')
    }
}
function openMenu(){
    document.body.classList.add('menu-expended')
}
function closeMenu(){
    document.body.classList.remove('menu-expended')
}
ScrollReveal({
    origin:'top',
    distance:'30px',
    duration: 1000,
}).reveal(`
    #home, 
    #home img, 
    #home .stats, 
    #services, 
    #services header, 
    #services .card,
    #about,
    #about header,
    #about .content`);