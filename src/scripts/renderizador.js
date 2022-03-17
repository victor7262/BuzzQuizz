function ExibirTela(nomeDaTela) {
	document.querySelector(".pagina-lista-quizzes").style.display = "none";
	document.querySelector(".pagina-quizz").style.display = "none";
	document.querySelector(".pagina-criar-quizz").style.display = "none";
	document.querySelector(".loading").style.display = "none";

	document.querySelector("." + nomeDaTela).style.display = "flex";
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

