import express from "express";

const app = express();

//Indicar para o express.js ler o body como json
app.use(express.json());

//Mock
const selecoes = [
    { "id": 1, "selecao": "Brasil", "grupo": "G" },
    { "id": 2, "selecao": "Suíça", "grupo": "A" },
    { "id": 3, "selecao": "Camarões", "grupo": "B" },
    { "id": 4, "selecao": "Sérvia", "grupo": "D" }
];

function buscarSelecaoPorId(id) {
    return selecoes.filter(selecao => selecao.id == id);
}
function buscarIndexPorId(id) {
    return selecoes.findIndex(selecao => selecao.id == id);
}

//Criando Rota Padrão ou Raiz
app.get("/", (req, res) => {
    res.send("Hello World");
});

//Criando Rota para buscar todas as seleções
app.get("/selecoes", (req, res) => {
    res.status(200).send(selecoes);
});


//app.post("/selecoes", (req, res) => {
    //selecoes.push(req.body);
    //res.status(200).send("Seleção cadastrada com sucesso");
//});

//------------------Validação de Dados na Criação----------- 

app.post("/selecoes", (req, res) => {
    const { selecao, grupo } = req.body;
    
    // Regra: Não permitir cadastro sem nome ou grupo
    if (!selecao || !grupo) {
        return res.status(400).send("Os campos 'selecao' e 'grupo' são obrigatórios.");
    }

    selecoes.push(req.body);
    res.status(201).send("Seleção cadastrada com sucesso"); 
});

//--------------------------------------------------------

app.get("/selecoes/:id", (req, res) => {
    const selecao = buscarSelecaoPorId(req.params.id);
    if (selecao.length === 0) {
        res.status(404).send("Seleção não encontrada");
    } else {
        res.json(selecao);
    }
});


app.delete("/selecoes/:id", (req, res) => {

    let index = buscarIndexPorId(req.params.id);

    //Deletar a seleção
    selecoes.splice(index, 1);
    res.send('Seleção deletada com sucesso');
});


export default app;




