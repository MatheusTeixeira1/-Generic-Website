    const localizacaoDaTela=scollY
    const alturaDaTela=innerHeight
    const linhaCentral=localizacaoDaTela + (alturaDaTela/2)

    const alturaDaSecao=secao.offsetHeight
    const localizacaoDaSecao=secao.offsetTop

    const linhaCentralEstaAbaixoDaAlturaDaSecao=linhaCentral>localizacaoDaSecao
    const linhaCentralEstaAcimaDoFimDaSecao=localizacaoDaSecao+alturaDaSecao>linhaCentral

    const linhaCentralEstaDentroDaSecao=linhaCentralEstaAbaixoDaAlturaDaSecao&&linhaCentralEstaAcimaDoFimDaSecao

    const idDaCesao=secao.getAttibuye('id')
    const elementoAserModificado=document.querySelector(`.menu a[href*=${idDaCesao}]`)

    elementoAserModificado.classList.remove('active')
    if(linhaCentralEstaDentroDaSecao){
        elementoAserModificado.classList.add('active')
    }