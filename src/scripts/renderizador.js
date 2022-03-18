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
            src="${quizz.iamge}"
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

	renderizarPerguntasParaCriacao(divConteudo, quantidade);
	adicionarEventoParaItensColapsaveis();
}

function renderizarPerguntasParaCriacao(divConteudo, quantidade){
	for (let index = 1; index <= quantidade; index++) {
		divConteudo.innerHTML += `<form id="pergunta${index}" class="form-etapa">
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
			</div>
			<div class="form-input">
				<input  id="CorDeFundoDaPergunta"
						name="CorDeFundoDaPergunta"
						type="text"
						placeholder="Cor de fundo da pergunta"/>
			</div>
			
			<div class="subtitulo-esquerda">
				<h2>Resposta correta</h2>
			</div>
	
			<div class="form-input">
				<input  id="RespostaCorreta"
						name="RespostaCorreta"
						type="text"
						placeholder="Resposta correta"/>
			</div>
			<div class="form-input">
				<input  id="URLDaImagem"
						name="URLDaImagem"
						type="text"
						placeholder="URL da imagem"/>
			</div>
	
			<div class="subtitulo-esquerda">
				<h2>Respostas incorretas</h2>
			</div>
	
			<div class="form-input">
				<input  id="RespostaIncorreta1"
						name="RespostaIncorreta1"
						type="text"
						placeholder="Resposta incorreta 1"/>
			</div>
			<div class="form-input">
				<input  id="URLDaImagem1"
						name="URLDaImagem1"
						type="text"
						placeholder="URL da imagem 1"/>
			</div>
	
			<div class="espacador"></div>
	
			<div class="form-input">
				<input  id="RespostaIncorreta2"
						name="RespostaIncorreta2"
						type="text"
						placeholder="Resposta incorreta 2"/>
			</div>
			<div class="form-input">
				<input  id="URLDaImagem2"
						name="URLDaImagem2"
						type="text"
						placeholder="URL da imagem 2"/>
			</div>
	
			<div class="espacador"></div>
	
			<div class="form-input">
				<input  id="RespostaIncorreta3"
						name="RespostaIncorreta3"
						type="text"
						placeholder="Resposta incorreta 3"/>
			</div>
			<div class="form-input">
				<input  id="URLDaImagem3"
						name="URLDaImagem3"
						type="text"
						placeholder="URL da imagem 3"/>
			</div>
		</div>
	</form>`;
	}
}