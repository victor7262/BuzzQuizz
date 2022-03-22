function AbrirCriarQuizz() {
	document.querySelector(".etapa1").style.display = "flex";
	document.querySelector(".etapa2").style.display = "none";
	document.querySelector(".etapa3").style.display = "none";
	document.querySelector(".etapa4").style.display = "none";

	const form = document.querySelector("#formEtapa1");

	form.querySelector("#TituloQuizz").value = "";
	form.querySelector("#ImagemQuizz").value = "";
	form.querySelector("#QuantidadeDePerguntas").value = "";
	form.querySelector("#QuantidadeDeNiveis").value = "";

	ExibirTela("pagina-criar-quizz");
}

function ProsseguirParaCriarPerguntas() {
	if (etapa1EhValida()) {
		const form = document.querySelector("#formEtapa1");

		quizzEmCriacao = new Object();
		quizzEmCriacao.title = form.querySelector("#TituloQuizz").value;
		quizzEmCriacao.image = form.querySelector("#ImagemQuizz").value;

		quantidadeDePerguntas = form.querySelector("#QuantidadeDePerguntas").value;
		quantidadeDeNiveis = form.querySelector("#QuantidadeDeNiveis").value;

		RenderizarEtapa2(quantidadeDePerguntas);
	}
}

function etapa1EhValida() {
	const form = document.querySelector("#formEtapa1");

	const titulo = form.querySelector("#TituloQuizz");
	const imagem = form.querySelector("#ImagemQuizz");
	const qtdPergunta = form.querySelector("#QuantidadeDePerguntas");
	const qtdNiveis = form.querySelector("#QuantidadeDeNiveis");

	//tira todas as validacoes anteriores
	titulo.parentElement.classList.remove("erro-de-validacao");
	imagem.parentElement.classList.remove("erro-de-validacao");
	qtdPergunta.parentElement.classList.remove("erro-de-validacao");
	qtdNiveis.parentElement.classList.remove("erro-de-validacao");

	//valida cada caso
	let ehValido = true;

	if (!EhStringValida(titulo.value, 20, 65)) {
		ExibeErro(titulo, "Título deve ter entre 20 e 65 caracteres");
		ehValido = false;
	}

	if (!EhImagemValida(imagem.value)) {
		ExibeErro(imagem, "Esse campo deve estar no formato URL");
		ehValido = false;
	}

	if (!EhNumeroValido(qtdPergunta.value, 3)) {
		ExibeErro(qtdPergunta, "Deve ter no mínimo 3 perguntas");
		ehValido = false;
	}

	if (!EhNumeroValido(qtdNiveis.value, 2)) {
		ExibeErro(qtdNiveis, "Deve ter no mínimo 2 níveis");
		ehValido = false;
	}

	return ehValido;
}

function ProsseguirParaCriarNiveis() {
	if (etapa2EhValida()) {
		const divConteudo = document.querySelectorAll(".etapa2 .form-etapa");

		quizzEmCriacao.questions = [];

		divConteudo.forEach((formPergunta) => {
			const textoDaPergunta = formPergunta.querySelector("#TextoDaPergunta"),
				corDeFundo = formPergunta.querySelector("#CorDeFundoDaPergunta"),
				respostaCorreta = formPergunta.querySelector("#RespostaCorreta"),
				imagemCorreta = formPergunta.querySelector("#URLDaImagem"),
				resposta1 = formPergunta.querySelector("#RespostaIncorreta1"),
				imagem1 = formPergunta.querySelector("#URLDaImagem1"),
				resposta2 = formPergunta.querySelector("#RespostaIncorreta2"),
				imagem2 = formPergunta.querySelector("#URLDaImagem2"),
				resposta3 = formPergunta.querySelector("#RespostaIncorreta3"),
				imagem3 = formPergunta.querySelector("#URLDaImagem3");

			let question = new Object();

			question.title = textoDaPergunta.value;
			question.color = corDeFundo.value;
			question.answers = [];

			let answer = new Object();
			answer.text = respostaCorreta.value;
			answer.image = imagemCorreta.value;
			answer.isCorrectAnswer = true;

			question.answers.push(answer);

			if (EhStringValida(resposta1.value, 1)) {
				answer = new Object();
				answer.text = resposta1.value;
				answer.image = imagem1.value;
				answer.isCorrectAnswer = false;

				question.answers.push(answer);
			}

			if (EhStringValida(resposta2.value, 1)) {
				answer = new Object();
				answer.text = resposta2.value;
				answer.image = imagem2.value;
				answer.isCorrectAnswer = false;

				question.answers.push(answer);
			}

			if (EhStringValida(resposta3.value, 1)) {
				answer = new Object();
				answer.text = resposta3.value;
				answer.image = imagem3.value;
				answer.isCorrectAnswer = false;

				question.answers.push(answer);
			}

			quizzEmCriacao.questions.push(question);
		});

		RenderizarEtapa3(quantidadeDeNiveis);
	}
}

function etapa2EhValida() {
	const divConteudo = document.querySelectorAll(".etapa2 .form-etapa");

	let ehValido = true;

	divConteudo.forEach((formPergunta) => {
		const textoDaPergunta = formPergunta.querySelector("#TextoDaPergunta"),
			corDeFundo = formPergunta.querySelector("#CorDeFundoDaPergunta"),
			respostaCorreta = formPergunta.querySelector("#RespostaCorreta"),
			imagemCorreta = formPergunta.querySelector("#URLDaImagem"),
			resposta1 = formPergunta.querySelector("#RespostaIncorreta1"),
			imagem1 = formPergunta.querySelector("#URLDaImagem1"),
			resposta2 = formPergunta.querySelector("#RespostaIncorreta2"),
			imagem2 = formPergunta.querySelector("#URLDaImagem2"),
			resposta3 = formPergunta.querySelector("#RespostaIncorreta3"),
			imagem3 = formPergunta.querySelector("#URLDaImagem3");

		formPergunta.classList.remove("erro-de-validacao");

		textoDaPergunta.parentElement.classList.remove("erro-de-validacao");
		corDeFundo.parentElement.classList.remove("erro-de-validacao");
		respostaCorreta.parentElement.classList.remove("erro-de-validacao");
		imagemCorreta.parentElement.classList.remove("erro-de-validacao");
		resposta1.parentElement.classList.remove("erro-de-validacao");
		imagem1.parentElement.classList.remove("erro-de-validacao");
		resposta2.parentElement.classList.remove("erro-de-validacao");
		imagem2.parentElement.classList.remove("erro-de-validacao");
		resposta3.parentElement.classList.remove("erro-de-validacao");
		imagem3.parentElement.classList.remove("erro-de-validacao");

		let formEhValido = true;

		if (!EhStringValida(textoDaPergunta.value, 20)) {
			ExibeErro(textoDaPergunta, "Texto deve ter pelo menos 20 caracteres");
			ehValido = false;
			formEhValido = false;
		}

		if (!EhHex(corDeFundo.value)) {
			ExibeErro(corDeFundo, "A cor deve ser em hexadecimal, inciando em #");
			ehValido = false;
			formEhValido = false;
		}

		if (!validaParRespostaEImagem(respostaCorreta, imagemCorreta, true))
			formEhValido = false;
		if (!validaParRespostaEImagem(resposta1, imagem1, true))
			formEhValido = false;
		if (!validaParRespostaEImagem(resposta2, imagem2, false))
			formEhValido = false;
		if (!validaParRespostaEImagem(resposta3, imagem3, false))
			formEhValido = false;

		if (!formEhValido) formPergunta.classList.add("erro-de-validacao");
	});

	return ehValido;
}

function validaParRespostaEImagem(resposta, imagem, camposObrigatorios) {
	let ehValido = true;

	if (camposObrigatorios) {
		if (!EhStringValida(resposta.value, 1)) {
			ExibeErro(resposta, "Resposta não pode ser vazia");
			ehValido = false;
		}

		if (!EhImagemValida(imagem.value)) {
			ExibeErro(imagem, "Esse campo deve estar no formato URL");
			ehValido = false;
		}
	} else {
		if (EhStringValida(resposta.value, 1) && EhStringValida(imagem.value, 1))
			return validaParRespostaEImagem(resposta, imagem, true);
		else if (
			EhStringValida(resposta.value, 1) &&
			!EhStringValida(imagem.value, 1)
		) {
			ExibeErro(
				imagem,
				"Caso informe a resposta, é necessário informar a imagem"
			);
			ehValido = false;
		} else if (
			!EhStringValida(resposta.value, 1) &&
			EhStringValida(imagem.value, 1)
		) {
			ExibeErro(
				resposta,
				"Caso informe a imagem, é necessário informar a resposota"
			);
			ehValido = false;

			if (!EhImagemValida(imagem.value)) {
				ExibeErro(imagem, "Esse campo deve estar no formato URL");
				ehValido = false;
			}
		}
	}

	return ehValido;
}

function FinalizarCriacaoQuizz() {
	if (etapa3EhValida()) {
		const divConteudo = document.querySelectorAll(".etapa3 .form-etapa");

		quizzEmCriacao.levels = [];

		divConteudo.forEach((formNivel) => {
			formNivel.classList.remove("erro-de-validacao");

			const tituloDoNivel = formNivel.querySelector("#TituloDoNivel"),
				porcentagemDeAcertoMinima = formNivel.querySelector(
					"#PorcentagemDeAcertoMinima"
				),
				imagemDoNivel = formNivel.querySelector("#UrlDaImagemDoNivel"),
				descricaoDoNivel = formNivel.querySelector("#DescricaoDoNivel");

			let level = new Object();

			level.title = tituloDoNivel.value;
			level.image = imagemDoNivel.value;
			level.text = descricaoDoNivel.value;
			level.minValue = porcentagemDeAcertoMinima.value;

			quizzEmCriacao.levels.push(level);
		});

		const pCriarQuizz = ReqCriarQuizz(quizzEmCriacao);
		pCriarQuizz.then(criarQuizzSucesso);
		pCriarQuizz.catch(criarQuizzErro);
	}
}

function etapa3EhValida() {
	const divConteudo = document.querySelectorAll(".etapa3 .form-etapa");

	let ehValido = true;
	let existeNivelComPorcentagemZero = false;
	let primeiroForm = null;
	let primeiroCampoDePorcentagem = null;

	divConteudo.forEach((formNivel) => {
		const tituloDoNivel = formNivel.querySelector("#TituloDoNivel"),
			porcentagemDeAcertoMinima = formNivel.querySelector(
				"#PorcentagemDeAcertoMinima"
			),
			imagemDoNivel = formNivel.querySelector("#UrlDaImagemDoNivel"),
			descricaoDoNivel = formNivel.querySelector("#DescricaoDoNivel");

		formNivel.classList.remove("erro-de-validacao");

		tituloDoNivel.parentElement.classList.remove("erro-de-validacao");
		porcentagemDeAcertoMinima.parentElement.classList.remove(
			"erro-de-validacao"
		);
		imagemDoNivel.parentElement.classList.remove("erro-de-validacao");
		descricaoDoNivel.parentElement.classList.remove("erro-de-validacao");

		if (primeiroForm == null) primeiroForm = formNivel;
		if (primeiroCampoDePorcentagem == null)
			primeiroCampoDePorcentagem = porcentagemDeAcertoMinima;

		let formEhValido = true;

		if (!EhStringValida(tituloDoNivel.value, 10)) {
			ExibeErro(tituloDoNivel, "Título deve ter pelo menos 10 caracteres");
			ehValido = false;
			formEhValido = false;
		}

		if (!EhNumeroValido(porcentagemDeAcertoMinima.value, 0, 100)) {
			ExibeErro(porcentagemDeAcertoMinima, "Valor deve ser entre 0 e 100");
			ehValido = false;
		} else if (porcentagemDeAcertoMinima.value == 0)
			existeNivelComPorcentagemZero = true;

		if (!EhImagemValida(imagemDoNivel.value)) {
			ExibeErro(imagemDoNivel, "Esse campo deve estar no formato URL");
			ehValido = false;
		}

		if (!EhStringValida(descricaoDoNivel.value, 30)) {
			ExibeErro(
				descricaoDoNivel,
				"Descrição deve ter pelo menos 30 caracteres"
			);
			ehValido = false;
			formEhValido = false;
		}

		if (!formEhValido) formNivel.classList.add("erro-de-validacao");
	});

	if (!existeNivelComPorcentagemZero) {
		ExibeErro(
			primeiroCampoDePorcentagem,
			"É necessário pelo menos um dos níveis com valor igual a zero"
		);
		primeiroForm.classList.add("erro-de-validacao");
		ehValido = false;
	}

	return ehValido;
}

function criarQuizzSucesso(resultado) {
	GuardarQuizzLocal(resultado.data);
	RenderizarEtapa4(resultado.data);
}

function criarQuizzErro(resultado) {
	console.log(resultado);
	alert("Ops");
}

function RenderizarEtapa2(quantidade) {
	const divEtapa1 = document.querySelector(".etapa1");
	const divEtapa2 = document.querySelector(".etapa2");
	const divConteudo = document.querySelector(".etapa-pergunta-conteudo");

	divEtapa1.style.display = "none";
	divEtapa2.style.display = "flex";
	divConteudo.innerHTML = "";

	renderizarPerguntasParaCriacao(divConteudo, quantidade);
	adicionarEventoParaItensColapsaveis();
}

function renderizarPerguntasParaCriacao(divConteudo, quantidade) {
	for (let index = 1; index <= quantidade; index++) {
		divConteudo.innerHTML += `
<form id="pergunta${index}" class="form-etapa">
	<div class="subtitulo-esquerda colapsavel">
		<h2>Pergunta ${index}</h2>
		<div class="icones-para-colapsar">
			<ion-icon name="caret-down-outline"></ion-icon>
			<ion-icon class="nao-visivel" name="caret-up-outline"></ion-icon>
		</div>
	</div>
	<div class="conteudo-colapsavel">
		<div class="form-input">
			<input  id="TextoDaPergunta"
					name="TextoDaPergunta"
					type="text"
					placeholder="Texto da pergunta"/>
			<div class="mensagem-validacao"></div>
		</div>
		<div class="form-input">
			<input  id="CorDeFundoDaPergunta"
					name="CorDeFundoDaPergunta"
					type="text"
					value="#"
					placeholder="Cor de fundo da pergunta"/>
			<div class="mensagem-validacao"></div>
		</div>
		
		<div class="subtitulo-esquerda">
			<h2>Resposta correta</h2>
		</div>

		<div class="form-input">
			<input  id="RespostaCorreta"
					name="RespostaCorreta"
					type="text"
					placeholder="Resposta correta"/>
			<div class="mensagem-validacao"></div>
		</div>
		<div class="form-input">
			<input  id="URLDaImagem"
					name="URLDaImagem"
					type="text"
					placeholder="URL da imagem"/>
			<div class="mensagem-validacao"></div>
		</div>

		<div class="subtitulo-esquerda">
			<h2>Respostas incorretas</h2>
		</div>

		<div class="form-input">
			<input  id="RespostaIncorreta1"
					name="RespostaIncorreta1"
					type="text"
					placeholder="Resposta incorreta 1"/>
			<div class="mensagem-validacao"></div>
		</div>
		<div class="form-input">
			<input  id="URLDaImagem1"
					name="URLDaImagem1"
					type="text"
					placeholder="URL da imagem 1"/>
			<div class="mensagem-validacao"></div>
		</div>

		<div class="espacador"></div>

		<div class="form-input">
			<input  id="RespostaIncorreta2"
					name="RespostaIncorreta2"
					type="text"
					placeholder="Resposta incorreta 2"/>
			<div class="mensagem-validacao"></div>
		</div>
		<div class="form-input">
			<input  id="URLDaImagem2"
					name="URLDaImagem2"
					type="text"
					placeholder="URL da imagem 2"/>
			<div class="mensagem-validacao"></div>
		</div>

		<div class="espacador"></div>

		<div class="form-input">
			<input  id="RespostaIncorreta3"
					name="RespostaIncorreta3"
					type="text"
					placeholder="Resposta incorreta 3"/>
			<div class="mensagem-validacao"></div>
		</div>
		<div class="form-input">
			<input  id="URLDaImagem3"
					name="URLDaImagem3"
					type="text"
					placeholder="URL da imagem 3"/>
			<div class="mensagem-validacao"></div>
		</div>
	</div>
</form>`;
	}
}

function RenderizarEtapa3(quantidade) {
	const divEtapa2 = document.querySelector(".etapa2");
	const divEtapa3 = document.querySelector(".etapa3");
	const divConteudo = document.querySelector(".etapa-niveis-conteudo");

	divEtapa2.style.display = "none";
	divEtapa3.style.display = "flex";
	divConteudo.innerHTML = "";

	renderizarNiveisParaCriacao(divConteudo, quantidade);
	adicionarEventoParaItensColapsaveis();
}

function renderizarNiveisParaCriacao(divConteudo, quantidade) {
	for (let index = 1; index <= quantidade; index++) {
		divConteudo.innerHTML += `
<form id="Nivel${index}" class="form-etapa">
	<div class="subtitulo-esquerda colapsavel">
		<h2>Nível ${index}</h2>
		<div class="icones-para-colapsar">
			<ion-icon name="caret-down-outline"></ion-icon>
			<ion-icon class="nao-visivel" name="caret-up-outline"></ion-icon>
		</div>
	</div>
	<div class="conteudo-colapsavel">
		<div class="form-input">
			<input  id="TituloDoNivel"
					name="TituloDoNivel"
					type="text"
					placeholder="Título do nível"/>
					<div class="mensagem-validacao"></div>
		</div>

		<div class="form-input">
			<input  id="PorcentagemDeAcertoMinima"
					name="PorcentagemDeAcertoMinima"
					type="text"
					placeholder="% de acerto mínima"/>
					<div class="mensagem-validacao"></div>
		</div>

		<div class="form-input">
			<input  id="UrlDaImagemDoNivel"
					name="UrlDaImagemDoNivel"
					type="text"
					placeholder="URL da imagem do nível"/>
					<div class="mensagem-validacao"></div>
		</div>

		<div class="form-input">
			<input  id="DescricaoDoNivel"
					name="DescricaoDoNivel"
					type="text"
					placeholder="Descrição do nível"/>
					<div class="mensagem-validacao"></div>
		</div>
		
	</div>
</form>`;
	}
}

function RenderizarEtapa4(quizz) {
	const divEtapa3 = document.querySelector(".etapa3");
	const divEtapa4 = document.querySelector(".etapa4");
	const divConteudo = document.querySelector(".etapa-quizz-pronto-conteudo");

	divEtapa3.style.display = "none";
	divEtapa4.style.display = "flex";

	divConteudo.innerHTML = `<div class="form-etapa">
	<div class="imagem-do-quizz grad">
		<img
			src="${quizz.image}"
		/>
	</div>
	<div class="titulo-do-quizz">${quizz.title}</div>
</div>`;
}
