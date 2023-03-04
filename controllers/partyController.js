const PartyModel = require("../models/Party");
const servicePartie = require("../services/partiesService")


const partyController = {
    create: async (req, res) => {
        try {
            const party = {
                title: req.body.title,
                author: req.body.author,
                descricao: req.body.descricao,
                budget: req.body.budget,
                image: req.body.image,
                services: req.body.services
            }
            if (!party) {
                return res.status(400).json({ message: 'Por favor verifique os campos preenchidos' })
            } else {
                if( party.services && !servicePartie.CheckPartyBudget(party.budget, party.services)) {
                    return res.status(406).json({ message: `Orçamento da festa e maior que o custo ${party.budget}`})
                }
                const response = await PartyModel.create(party)
                return res.status(201).json({ response, msg: `${response}` })
            }
        } catch (error) {
            console.log(error)
        }
    },
    getAll: async (req, res) => {
        try {
            const parties = await PartyModel.find();

            if (!parties) {
                return res.status(404).json({ message: `Nenhum evento foi encontrado ${parties}` })
            }
            return res.status(200).json({ parties })
        } catch (error) {
            console.log(error)
        }
    },
    get: async (req, res) => {
        const id = req.params.id;
        // Futuro pensar em implementar o metodo não está cadastrada deseja registrar, em uma busca por nome talvez
        if (!id) {
            console.log(id)
            return res.status(404).json({ message: `A festa não esta cadastrada` })
        }
        try {
            const party = await PartyModel.findById({ _id: id })
            if (!party) {
                return res.status(404).json({ message: 'Festa não encontrada' })
            }
            return res.status(200).json({ message: `Festa encontrada ${party}` })
        } catch (error) {

        }
    },
    delete: async (req, res) => {
        const id = req.params.id;
        if (!id) {
            return res.status(404).json({ message: `Festa não encontrada ${id}` })
        }
        try {
            const party = await PartyModel.findByIdAndDelete({ _id: id })
            return res.status(200).json({ message: `Festa deletada ${party}` })
            // Implementar metodo de confirmação do usuario.
        } catch (error) {
            console.log(`Houve um erro na aplicação ${error}`)
        }
    },
    update: async (req, res) => {
        if (!req) {
            return res.status(401).json({ msg: "Metodo não permitido" })
        }
        const id = req.params.id;
        try {
            const party = {
                title: req.body.title,
                author: req.body.author,
                descricao: req.body.descricao,
                budget: req.body.budget,
                image: req.body.image,
                services: req.body.services
            }
            if (!party) {
                return res.status(401).json({ message: `Por favor verifique os campos preenchidos.` })
            }
            const partyUpdate = await PartyModel.findByIdAndUpdate({ _id: id }, party)
            return res.status(200).json({ message: `Festa atualizada com sucesso ${partyUpdate}` })
        } catch (error) {
            console.log(`Houve um erro inesperado${error}`)
        }
    }

};

module.exports = partyController;