let quantidadePerguntasRestantes = 0;

function AbrirQuizz(id){
	ExibirTela("loading");

	const pObterQuizz = ReqObterQuizzPeloId(id)
	pObterQuizz.then(obterQuizzSucesso);
}

function obterQuizzSucesso(resultado){
	quizzEmExibicao = resultado.data;
	
	quantidadePerguntasRestantes = quizzEmExibicao.questions.length;

	RenderizarPaginaQuizz();

	ExibirTela("pagina-quizz");
}

function RenderizarPaginaQuizz() {
	document.querySelector('.perguntas').innerHTML = '';
	document.querySelector('.resultado').innerHTML = '';
	document.querySelector('.banner').innerHTML = `
<div class="banner">
	<img src="${quizzEmExibicao.image}">
	<div class="titulo-do-banner">${quizzEmExibicao.title}</div>
</div>`;

	const perguntas = EmbaralharArray(quizzEmExibicao.questions);

	perguntas.forEach(pergunta => {
		RenderizarPergunta(pergunta)
	});
}

function RenderizarPergunta(pergunta){
	const divPerguntas = document.querySelector('.perguntas');
	
	const respostas = EmbaralharArray(pergunta.answers)

	let respostasHtml = '';

	for (let index = 0; index < respostas.length; index++) {
		const resposta = respostas[index];
		
		respostasHtml += `<div onclick="SelecionarResposta(this)" class="resposta `;

		if (resposta.isCorrectAnswer) respostasHtml += 'correta';

		respostasHtml += `">
	<img src="${resposta.image}">
	<p class="texto-resposta">${resposta.text}</p>
</div>`
	}

	divPerguntas.innerHTML += `
<div class="pergunta form-conteudo-pagina-quizz">
	<div class="texto-cabecalho" style="background-color:${pergunta.color}">
		${pergunta.title}
	</div>
	<div class="lista-respostas grid-pagina-quizz">
		${respostasHtml}
	</div>
</div>
`;
}

function SelecionarResposta2(element){
	if (element.parentElement.classList.contains("respondido")) return;

	element.parentElement.classList.add("respondido");
	element.classList.add("selecionada");

	//if (quantidadePerguntasRespondidas !== 0)
	setTimeout(function(){
		var scrollDiv = element.parentElement.parentElement.nextElementSibling.offsetTop;
		window.scrollTo({ top: scrollDiv - 30, behavior: 'smooth'});
	}, 1000)
}

function SelecionarResposta(element){
	if (element.parentElement.classList.contains("respondido")) return;

	quantidadePerguntasRestantes--;

	element.parentElement.classList.add("respondido");
	element.classList.add("selecionada");

	let scrollDiv = null;

	if (quantidadePerguntasRestantes !== 0){
		if (element.parentElement.parentElement.nextElementSibling == null) return;
		scrollDiv = element.parentElement.parentElement.nextElementSibling.offsetTop;
	} else {
		RenderizarResultado()
		scrollDiv = document.querySelector('.resultado').offsetTop;
	} 

	setTimeout(function(){
		window.scrollTo({ top: scrollDiv - 30, behavior: 'smooth'});
	}, 1000)
}

function RenderizarResultado(){
	const divResultado = document.querySelector('.resultado');

	const respostasCorretas = document.querySelectorAll('.resposta.correta.selecionada').length;
	const porcentagemAcertos = Math.round(respostasCorretas * 100 / quizzEmExibicao.questions.length);

	let nivel = retornaNivelResultado(porcentagemAcertos);

	divResultado.innerHTML = `<div class="form-conteudo-pagina-quizz">
	<div class="texto-cabecalho">
		${porcentagemAcertos}% de acerto: ${nivel.title}
	</div>
	<div class="grid-pagina-quizz">
		<img src="${nivel.image}">
		<div class="descricao-nivel">
			${nivel.text}
		</div>
	</div>
</div>

<button onclick="AbrirQuizz(${quizzEmExibicao.id})" class="btn btn-principal">
	Reiniciar Quizz
</button>

<button onclick="iniciarSite()" class="btn btnSemPrioridade">
	Voltar para home
</button>`;
}

function retornaNivelResultado(porcentagemAcertos){
	const niveisOrdenados = quizzEmExibicao.levels.sort(function(a,b){return a.minValue - b.minValue;});

	let nivelAuxiliar = niveisOrdenados[0];

	for (let index = 0; index < niveisOrdenados.length; index++) {
		const element = niveisOrdenados[index];
		
		if (element.minValue <= porcentagemAcertos)
			nivelAuxiliar = element
		else
			return nivelAuxiliar;
	}

	return nivelAuxiliar;
}