function EhStringValida(valor, tamanhoMinimo, tamanhoMaximo){
    if (arguments.length == 1)
        return valor != null;
    else if (arguments.length == 2)
        return valor != null && valor.length >= tamanhoMinimo;
    else if (arguments.length == 3)
        return valor != null && valor.length >= tamanhoMinimo && valor.length <= tamanhoMaximo;
    else
        return false
}

function EhNumeroValido(valor, valorMinimo, valorMaximo){
    if (arguments.length == 1)
        return !isNaN(valor);
    else if (arguments.length == 2)
        return !isNaN(valor) && valor >= valorMinimo;
    else if (arguments.length == 3)
        return !isNaN(valor) && valor >= valorMinimo && valor <= valorMaximo;
    else
        return false;
}

function EhUrl(valor) {
    let url;
    
    try {
        url = new URL(valor);
    } catch (_) {
        return false;  
    }

    return url.protocol === "http:" || url.protocol === "https:";
}

function ExibeErro(campoInput, descricaoDoErro){
	campoInput.parentElement.classList.add('erro-de-validacao');
	campoInput.parentElement.querySelector('.mensagem-validacao').innerHTML = descricaoDoErro;
}