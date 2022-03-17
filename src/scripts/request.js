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