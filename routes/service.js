const router = require("express").Router();

const serviceController = require("../controllers/serviceController")

//Funções
//Criar servico.
router
    .route("/services")
    .post((req,res) => serviceController.create(req, res))
//Traz todos serviços.
router
    .route("/services")
    .get((req, res) => serviceController.getAll(req, res))
//Traz produto por id
router
    .route("/services/:id")
    .get((req, res) => serviceController.get(req, res))
//Deletar serviço
router
    .route("/services/:id")
    .delete((req, res) => serviceController.delete(req, res))
//Atualiza o serviço
router
    .route("/services/:id")
    .put((req, res) => serviceController.update(req, res))

module.exports = router;