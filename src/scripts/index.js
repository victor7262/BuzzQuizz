let listaDeQuizzesGlobal = [],
	listaDeQuizzesDoUsuario = [];

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