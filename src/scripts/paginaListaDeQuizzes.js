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
			RenderizarQuizz(divListaQuizzes, element, false);
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
			RenderizarQuizz(divListaQuizzesDoUsuario, element, true);
		});

		document.querySelector(".quizzes-do-usuario-conteudo").style.display =
			"flex";
		document.querySelector(".sem-quizz-do-usuario").style.display = "none";
	}

	ExibirTela("pagina-lista-quizzes");
}

function RenderizarQuizz(divListaQuizzes, quizz, ehQuizzDoUsuario) {
	let htmlQuizz = `<div class="quizz">
	<div onclick="AbrirQuizz(${quizz.id})">
		<div class="imagem-do-quizz">
			<img 
				src="${quizz.image}"
			/>
		</div>
		<div class="titulo-do-quizz">${quizz.title}</div>
	</div>`;
	if (ehQuizzDoUsuario) {
		htmlQuizz += `
		<div class="acoes">
			<div onclick="EditarQuizz(${quizz.id}, ${quizz.key})">
				<ion-icon  name="create-outline"></ion-icon>
			</div>
			<div id="deletar${quizz.id}" onclick="DeletarQuizz(${quizz.id}, '${quizz.key}')">
				<ion-icon name="trash-outline"></ion-icon>
			</div>
		</div>`;
	}

	htmlQuizz += `</div>`;

	divListaQuizzes.innerHTML += htmlQuizz;
}

function DeletarQuizz(id, key) {
	if (confirm("Deseja deletar o quizz? :/")) {
		const pDeletarQuizz = ReqDeletarQuizz(id, key);
		pDeletarQuizz.then(iniciarSite);
	}
}
