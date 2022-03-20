const   nomeListaId = "ListaIdQuizz",
        nomeListaQuizz = "ListaQuizz";

function GuardarQuizzLocal(quizz) {
    let quizzLocal = new Object();

    quizzLocal.id = quizz.id;
    quizzLocal.key = quizz.key;

    let arr = ObterArrQuizzLocal();
    arr.push(quizzLocal);

    localStorage.setItem(nomeListaId, JSON.stringify(arr));
}

function ObterArrQuizzLocal(){
    let arrArmazenado = localStorage.getItem(nomeListaId);

    return arrArmazenado != null ? JSON.parse(arrArmazenado) : [];
}

