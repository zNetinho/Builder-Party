const { Service: ServiceModel } = require("../models/Service")

const serviceController = {

    create: async function (req, res) {
        try {
            const service = {
                nomeDoServico: req.body.nomeDoServico,
                descricao: req.body.descricao,
                precoServico: req.body.precoServico,
                Image: req.body.Image
            }
            if(!service) {
                return res.status(500).json({msg: "Por favor verique os campos de cadastro"})
            }
            const response = await ServiceModel.create(service);
            res.status(201).json({ response, msg: "Serviço criado" })

        } catch (e) {
            console.log(`Error: ${e}`)
            res.status(500).json({msg: "Erro ao cadastrar serviço"})
        }
    },
    getAll: async (req, res) => {
        try {
            const services = await ServiceModel.find();
            if(!services) {
                return res.status(404).json({msg: "Serviço não encontrado"})
            }
            res.json({ msg: `Tudo certo ${services}` })
        } catch (error) {
            return res.status(500).json({msg: "Entro no catch do getAll"})
        }
    },
    get: async (req, res) => {
        const id = req.params.id;
        if (!id) {
            return res.status(500).json({ msg: 'Enviar id' })
        }
        try {
            const service = await ServiceModel.findById({ _id: id })
            if(!service) {
                return res.status(404).json({msg: "Serviço não encontrado"})
            }
            return res.json(service)
        } catch (error) {
            return res.status(500).json({msg: "Houve um erro na busca dos dados solicitado"})
        }
    },
    delete: async (req, res) => {
        const id = req.params.id;
        if (!id) {
            return res.status(500).json({ msg: 'Enviar id' })
        }
        const service = await ServiceModel.findById(id)
        if (!service) {
            return res.status(500).json({ msg: 'Enviar id' })
        }
        try {
            const deletedService =
                await ServiceModel.findByIdAndDelete(id)
            console.log(deletedService);
            return res.status(200).json({ deletedService, msg: `Serviço deletado: ${deletedService}` })
        } catch (error) {
            return res.status(401).json({msg: "não foi possivel deletar o serviço"})
        }
    },
    update: async(req, res) => {
        if(!req) {
            return res.status(401).json({msg: "não foi atualizado"})
        }
        const id = req.params.id;
        const service = {
            nomeDoServico: req.body.nomeDoServico,
            descricao: req.body.descricao,
            precoServico: req.body.precoServico,
            Image: req.body.Image
        }
        if(!service) {
            return res.status(500).json({ msg: 'Enviar o serviço atualizado' })
        }

        const serviceUpdate = await ServiceModel.findByIdAndUpdate(id, service);
        return res.status(200).json(serviceUpdate)
    }
}

module.exports = serviceController;