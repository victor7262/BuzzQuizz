function obterTodosQuizzesSucesso(resposta) {
	const divListaQuizzes = document.querySelector(
		".todos-quizzes .lista-quizzes"
	);
	const divListaQuizzesDoUsuario = document.querySelector(
		".quizzes-do-usuario .lista-quizzes"
	);

	divListaQuizzes.innerHTML = "";
	divListaQuizzesDoUsuario.innerHTML = "";

	listaDeQuizzesDoUsuario = ObterArrQuizzLocal();
	//listaDeQuizzesGlobal = resposta.data;

	// listaDeQuizzesGlobal.forEach((element) => {
	// 	RenderizarQuizz(divListaQuizzes, element);
	// });

	resposta.data.forEach((element) => {
		if (element.id >= 1217) {
			listaDeQuizzesGlobal.push(element);
			RenderizarQuizz(divListaQuizzes, element);
		}
	});

	resposta.data.forEach((element) => {
		if (element.id >= 1218) {
			listaDeQuizzesGlobal.push(element);
			RenderizarQuizz(divListaQuizzes, element);
		}
	});

	if (listaDeQuizzesDoUsuario.length > 0) {
		listaDeQuizzesDoUsuario.forEach((element) => {
			RenderizarQuizz(divListaQuizzesDoUsuario, element);
		});

		document.querySelector(".quizzes-do-usuario-conteudo").style.display =
			"flex";
		document.querySelector(".sem-quizz-do-usuario").style.display = "none";
	}

	ExibirTela("pagina-lista-quizzes");
}

function RenderizarQuizz(divListaQuizzes, quizz) {
	let htmlQuizz = `<div id="${quizz.id}" class="quizz" onclick="AbrirQuizz(${quizz.id})">
    <div class="imagem-do-quizz">
        <img
            src="${quizz.image}"
        />
    </div>
    <div class="titulo-do-quizz">${quizz.title}</div>
</div>`;

	divListaQuizzes.innerHTML += htmlQuizz;
}
