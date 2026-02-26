import app from "./src/app.js";
import conexao from "./infra/conexao.js";

const port = 3000;


//Realizando a connection
conexao.connect(( erro )=>{
    if(erro){
        console.log(erro)
    }else{
        console.log("Conexão com BANCO DE DADOS realizada com sucesso!")
    }

//Escutando a porta 
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

})



