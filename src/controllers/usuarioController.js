var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var nome_usuario = req.body.nome_usuarioServer;
    var senha = req.body.senhaServer;

    if (nome_usuario == undefined) {
        res.status(400).send("Seu nome de usuário está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(nome_usuario, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                               
                                    res.json({
                                        idUsuario: resultadoAutenticar[0].idUsuario,
                                        nome: resultadoAutenticar[0].nome,
                                        nome_usuario: resultadoAutenticar[0].nome_usuario,
                                        email: resultadoAutenticar[0].email
                                        
                                    });
                            
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var nome_usuario = req.body.nome_usuarioServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (nome_usuario == undefined) {
        res.status(400).send("Seu nome de usuário está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, nome_usuario, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function verifica_aula(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var ID_USUARIO = req.params.ID_USUARIO;
    var ID_AULA = req.params.idAula;
    

    // Faça as validações dos valores
    if (ID_USUARIO == undefined) {
        res.status(400).send("O seu ID do Usuário está indefinido!");
    } else if (ID_AULA == undefined) {
        res.status(400).send("O ID da Aula está indefinido!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.verifica_aula(ID_USUARIO, ID_AULA)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao verificar a sua identidade! Erro:",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function insere_aula(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var ID_USUARIO = req.body.ID_USUARIO;
    var ID_AULA = req.body.idAula;

    // Faça as validações dos valores
    if (ID_USUARIO == undefined) {
        res.status(400).send("O seu ID do Usuário está indefinido!");
    } else if (ID_AULA == undefined) {
        res.status(400).send("O ID da Aula está indefinido!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.insere_aula(ID_USUARIO, ID_AULA)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao verificar a sua identidade! Erro:",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar,
    verifica_aula,
    insere_aula
}