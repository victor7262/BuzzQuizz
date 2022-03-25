const urlApi =
	"https://mock-api.bootcamp.respondeai.com.br/api/v3/buzzquizz/quizzes";

function ReqObterTodosQuizzes() {
    return axios.get(urlApi);
}
    
function ReqObterQuizzPeloId(id){
    return axios.get(`${urlApi}/${id}`);
}

function ReqCriarQuizz(quizz){
    return axios.post(urlApi, quizz);
}

function ReqDeletarQuizz(id, key){
    const headers = { 
        'Authorization': key,
    };

    return axios.delete(`${urlApi}/${id}`, { headers });
}