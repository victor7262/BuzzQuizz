let listaDeQuizzesGlobal = [],
	listaDeQuizzesDoUsuario = [],
	quizzEmCriacao = null,
	quantidadeDePerguntas = 0,
	quantidadeDeNiveis = 0;

iniciarSite();

function iniciarSite() {
	// ExibirTela("loading");
	// obterTodosQuizzes();

	AbrirCriarQuizz();
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
		RenderizarQuizz(divListaQuizzes, element);
	});

	ExibirTela("pagina-lista-quizzes");
}

function AbrirCriarQuizz() {
	ExibirTela("pagina-criar-quizz");
}

function ProsseguirParaCriarPerguntas(){
	if (etapa1EValida()){
		const form = document.querySelector('#formEtapa1');

		quizzEmCriacao = new Object();
		quizzEmCriacao.title = form.querySelector('#TituloQuizz').value;
		quizzEmCriacao.image = form.querySelector('#ImagemQuizz').value;
		
		quantidadeDePerguntas = form.querySelector('#QuantidadeDePerguntas').value;
		quantidadeDeNiveis = form.querySelector('#QuantidadeDeNiveis').value;
		
		RenderizarEtapa2(quantidadeDePerguntas);
	}
}

function etapa1EValida() {
	const form = document.querySelector('#formEtapa1');

	const titulo = form.querySelector('#TituloQuizz');
	const imagem = form.querySelector('#ImagemQuizz');
	const qtdPergunta = form.querySelector('#QuantidadeDePerguntas');
	const qtdNiveis = form.querySelector('#QuantidadeDeNiveis');

	//tira todas as validacoes anteriores
	titulo.parentElement.classList.remove('erro-de-validacao');
	imagem.parentElement.classList.remove('erro-de-validacao');
	qtdPergunta.parentElement.classList.remove('erro-de-validacao');
	qtdNiveis.parentElement.classList.remove('erro-de-validacao');

	//valida cada caso
	let ehValido = true;

	if (!EhStringValida(titulo.value, 20, 65)){
		ExibeErro(titulo, "Título deve ter entre 20 e 65 caracteres");
		ehValido = false;
	}

	if (!EhUrl(imagem.value)){
		ExibeErro(imagem, "Esse campo deve estar no formato URL");
		ehValido = false;
	}

	if (!EhNumeroValido(qtdPergunta.value, 3)){
		ExibeErro(qtdPergunta, "Deve ter no mínimo 3 perguntas");
		ehValido = false;
	}

	if (!EhNumeroValido(qtdNiveis.value, 2)){
		ExibeErro(qtdNiveis, "Deve ter no mínimo 2 níveis");
		ehValido = false;
	}

	return ehValido;
}

