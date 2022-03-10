const urlApi =
	"https://mock-api.bootcamp.respondeai.com.br/api/v3/buzzquizz/quizzes";
let listaDeQuizzesGlobal = [],
	listaDeQuizzesDoUsuario = [];

iniciarSite();

function iniciarSite() {
	exibirTela("loading");
	buscarTodosQuizzes();
}

function buscarTodosQuizzes() {
	const pGetQuizzes = axios.get(urlApi);
	pGetQuizzes.then(buscarTodosQuizzesSucesso);
}

function buscarTodosQuizzesSucesso(resposta) {
	const divListaQuizzes = document.querySelector(
		".todos-quizzes .lista-quizzes"
	);

	listaDeQuizzesGlobal = resposta.data;

	listaDeQuizzesGlobal.forEach((element) => {
		renderizarQuizz(divListaQuizzes, element);
	});

	exibirTela("pagina-lista-quizzes");
}

function renderizarQuizz(divListaQuizzes, quizz) {
	let htmlQuizz = `<div id="${quizz.id}" class="quizz">
    <div class="imagem-do-quizz">
        <img
            src="${quizz.iamge}"
        />
    </div>
    <div class="titulo-do-quizz">${quizz.title}</div>
</div>`;

	divListaQuizzes.innerHTML += htmlQuizz;
}

function CriarQuizz() {
	exibirTela("pagina-criar-quizz");
}

function exibirTela(nomeDaTela) {
	document.querySelector(".pagina-lista-quizzes").style.display = "none";
	document.querySelector(".pagina-quizz").style.display = "none";
	document.querySelector(".pagina-criar-quizz").style.display = "none";
	document.querySelector(".loading").style.display = "none";

	document.querySelector("." + nomeDaTela).style.display = "flex";
}
