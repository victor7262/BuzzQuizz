const   nomeListaId = "ListaIdQuizz",
        nomeListaQuizz = "ListaQuizz";

let listaDeQuizzesGlobal = [],
	listaDeQuizzesDoUsuario = [],
	quizzEmCriacao = null,
	quizzEmExibicao = null,
	quantidadeDePerguntas = 0,
	quantidadeDeNiveis = 0;

iniciarSite();

function iniciarSite() {
	ExibirTela("loading");

	listaDeQuizzesGlobal = [];
	listaDeQuizzesDoUsuario = [];
	quizzEmCriacao = null;
	quizzEmExibicao = null;
	quantidadeDePerguntas = 0;
	quantidadeDeNiveis = 0;
	
	document.querySelector(".quizzes-do-usuario-conteudo").style.display = "none";
	document.querySelector(".sem-quizz-do-usuario").style.display = "flex";
	
	const pObterQuizzes = ReqObterTodosQuizzes();
	pObterQuizzes.then(obterTodosQuizzesSucesso);

}

function ExibirTela(nomeDaTela) {
	document.querySelector(".pagina-lista-quizzes").style.display = "none";
	document.querySelector(".pagina-quizz").style.display = "none";
	document.querySelector(".pagina-criar-quizz").style.display = "none";
	document.querySelector(".loading").style.display = "none";

	document.querySelector("." + nomeDaTela).style.display = "flex";
}

function adicionarEventoParaItensColapsaveis(){
	const coll = document.getElementsByClassName("colapsavel");
			
	for (let i = 0; i < coll.length; i++) {
		coll[i].addEventListener("click", function() {
		
			this.querySelectorAll("ion-icon").forEach(e => {
				e.classList.toggle("nao-visivel");
			});

			const content = this.nextElementSibling;
			if (content.style.maxHeight){
				content.style.maxHeight = null;
			} else {
				content.style.maxHeight = content.scrollHeight + "px";
			} 
		});
	}
}

function GuardarIdQuizzLocal(quizz) {
    let quizzLocal = new Object();

    quizzLocal.id = quizz.id;
    quizzLocal.key = quizz.key;

    let arr = ObterArrIdQuizzLocal();
    arr.push(quizzLocal);

    localStorage.setItem(nomeListaId, JSON.stringify(arr));
}

function ObterArrIdQuizzLocal(){
    let arrArmazenado = localStorage.getItem(nomeListaId);

    return arrArmazenado != null ? JSON.parse(arrArmazenado) : [];
}

function GuardarQuizzLocal(quizz) {
    GuardarIdQuizzLocal(quizz);

    let arr = ObterArrQuizzLocal();
    arr.push(quizz);

    localStorage.setItem(nomeListaQuizz, JSON.stringify(arr));
}

function ObterArrQuizzLocal(){
    let arrArmazenado = localStorage.getItem(nomeListaQuizz);

    return arrArmazenado != null ? JSON.parse(arrArmazenado) : [];
}

function EmbaralharArray(arr){
	return arr.sort( () => .5 - Math.random() );
}