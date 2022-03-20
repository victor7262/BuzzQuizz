const   nomeListaId = "ListaIdQuizz",
        nomeListaQuizz = "ListaQuizz";

function GuardarIdQuizzLocal(quizz) {
    let quizzLocal = new Object();

    quizzLocal.id = quizz.id;
    quizzLocal.key = quizz.key;

    let arr = ObterArrIdQuizzLocal();
    arr.push(quizzLocal);

    localStorage.setItem(nomeListaId, JSON.stringify(arr));
}

function ObterArrIdQuizzLocal(){
    let arrArmazenado = localStorage.getItem(nomeListaId);

    return arrArmazenado != null ? JSON.parse(arrArmazenado) : [];
}

function GuardarQuizzLocal(quizz) {
    GuardarIdQuizzLocal(quizz);

    let arr = ObterArrQuizzLocal();
    arr.push(quizz);

    localStorage.setItem(nomeListaQuizz, JSON.stringify(arr));
}

function ObterArrQuizzLocal(){
    let arrArmazenado = localStorage.getItem(nomeListaQuizz);

    return arrArmazenado != null ? JSON.parse(arrArmazenado) : [];
}

