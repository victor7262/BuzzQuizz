let listaDeQuizzesGlobal = [],
	listaDeQuizzesDoUsuario = [],
	quizzEmCriacao = null,
	quantidadeDePerguntas = 0,
	quantidadeDeNiveis = 0;

iniciarSite();

function iniciarSite() {
	ExibirTela("loading");
	obterTodosQuizzes();
}

function obterTodosQuizzes() {
	const pObterQuizzes = ReqObterTodosQuizzes();
	pObterQuizzes.then(obterTodosQuizzesSucesso);
}

function obterTodosQuizzesSucesso(resposta) {
	const divListaQuizzes = document.querySelector(
		".todos-quizzes .lista-quizzes"
	);

	listaDeQuizzesGlobal = resposta.data;

	listaDeQuizzesGlobal.forEach((element) => {
		renderizarQuizz(divListaQuizzes, element);
	});

	ExibirTela("pagina-lista-quizzes");
}

function AbrirCriarQuizz() {
	ExibirTela("pagina-criar-quizz");
}

function ProsseguirParaCriarPerguntas(){
	const form = document.querySelector('#formEtapa1');

	const titulo = form.querySelector('#TituloQuizz');
	const imagem = form.querySelector('#ImagemQuizz');
	const qtdPergunta = form.querySelector('#QuantidadeDePerguntas');
	const qtdNiveis = form.querySelector('#QuantidadeDeNiveis');
	
}