var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.get(`/verifica_aula/:ID_USUARIO/:idAula`, function (req, res) {
    usuarioController.verifica_aula(req, res);
});

router.post("/insere_aula", function (req, res) {
    usuarioController.insere_aula(req, res);
});

router.get(`/obter_aulasAssistidas/:ID_USUARIO`, function (req, res) {
    usuarioController.obter_aulasAssistidas(req, res);
});

module.exports = router;