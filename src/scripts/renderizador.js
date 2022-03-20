function ExibirTela(nomeDaTela) {
	document.querySelector(".pagina-lista-quizzes").style.display = "none";
	document.querySelector(".pagina-quizz").style.display = "none";
	document.querySelector(".pagina-criar-quizz").style.display = "none";
	document.querySelector(".loading").style.display = "none";

	document.querySelector("." + nomeDaTela).style.display = "flex";
}

function RenderizarQuizz(divListaQuizzes, quizz) {
	let htmlQuizz = `<div id="${quizz.id}" class="quizz">
    <div class="imagem-do-quizz">
        <img
            src="${quizz.image}"
        />
    </div>
    <div class="titulo-do-quizz">${quizz.title}</div>
</div>`;

	divListaQuizzes.innerHTML += htmlQuizz;
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

function RenderizarEtapa2(quantidade){
	const divEtapa1 = document.querySelector('.etapa1'); 
	const divEtapa2 = document.querySelector('.etapa2');
	const divConteudo  = document.querySelector('.etapa-pergunta-conteudo');

	divEtapa1.style.display = "none";
	divEtapa2.style.display = "flex";
	divConteudo.innerHTML = '';

	renderizarPerguntasParaCriacao(divConteudo, quantidade);
	adicionarEventoParaItensColapsaveis();
}

function renderizarPerguntasParaCriacao(divConteudo, quantidade){
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
					value="texto da pergunta asdc"
					placeholder="Texto da pergunta"/>
			<div class="mensagem-validacao"></div>
		</div>
		<div class="form-input">
			<input  id="CorDeFundoDaPergunta"
					name="CorDeFundoDaPergunta"
					type="text"
					value="#000000"
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
					value="jk"
					placeholder="Resposta correta"/>
			<div class="mensagem-validacao"></div>
		</div>
		<div class="form-input">
			<input  id="URLDaImagem"
					name="URLDaImagem"
					type="text"
					value="https://jksdhfkjhsdjk.com/sfhdjsfd.jpg"
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
					value="lkj"
					placeholder="Resposta incorreta 1"/>
			<div class="mensagem-validacao"></div>
		</div>
		<div class="form-input">
			<input  id="URLDaImagem1"
					name="URLDaImagem1"
					type="text"
					value="https://jksdhfkjhsdjk.com/sfhdjsfd.jpg"
					placeholder="URL da imagem 1"/>
			<div class="mensagem-validacao"></div>
		</div>

		<div class="espacador"></div>

		<div class="form-input">
			<input  id="RespostaIncorreta2"
					name="RespostaIncorreta2"
					type="text"
					value="jk"
					placeholder="Resposta incorreta 2"/>
			<div class="mensagem-validacao"></div>
		</div>
		<div class="form-input">
			<input  id="URLDaImagem2"
					name="URLDaImagem2"
					type="text"
					value="https://jksdhfkjhsdjk.com/sfhdjsfd.jpg"
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

function RenderizarEtapa3(quantidade){
	const divEtapa2 = document.querySelector('.etapa2'); 
	const divEtapa3 = document.querySelector('.etapa3');
	const divConteudo  = document.querySelector('.etapa-niveis-conteudo');

	divEtapa2.style.display = "none";
	divEtapa3.style.display = "flex";
	divConteudo.innerHTML = '';
	
	renderizarNiveisParaCriacao(divConteudo, quantidade);
	adicionarEventoParaItensColapsaveis();
}

function renderizarNiveisParaCriacao(divConteudo, quantidade){
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
					value="1234567890asd"
					placeholder="Título do nível"/>
					<div class="mensagem-validacao"></div>
		</div>

		<div class="form-input">
			<input  id="PorcentagemDeAcertoMinima"
					name="PorcentagemDeAcertoMinima"
					type="text"
					value="0"
					placeholder="% de acerto mínima"/>
					<div class="mensagem-validacao"></div>
		</div>

		<div class="form-input">
			<input  id="UrlDaImagemDoNivel"
					name="UrlDaImagemDoNivel"
					type="text"
					value="https://jahskjdhjka.com"
					placeholder="URL da imagem do nível"/>
					<div class="mensagem-validacao"></div>
		</div>

		<div class="form-input">
			<input  id="DescricaoDoNivel"
					name="DescricaoDoNivel"
					type="text"
					value="klsdjf klsjdfkl jsdklf jklsdj fkljsd kljs dfklsujd fkljsd "
					placeholder="Descrição do nível"/>
					<div class="mensagem-validacao"></div>
		</div>
		
	</div>
</form>`;
	}
}

function RenderizarEtapa4(quizz){
	const divEtapa3 = document.querySelector('.etapa3'); 
	const divEtapa4 = document.querySelector('.etapa4');
	const divConteudo  = document.querySelector('.etapa-quizz-pronto-conteudo');

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