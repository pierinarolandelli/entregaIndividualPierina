const db = require('../database/database/models/index')


module.exports = {
    home: (req, res) => {
        db.Notas.findAll({
            order: [
                ['updated_at', 'DESC']
            ]
        })
        .then(notas => {
            res.render('index', {notas: notas})
        })
    },
    create: (req, res) => {
        db.Notas.create({
            titulo: req.body.title,
            texto: req.body.description
        })
        .then( () => {
            res.redirect('/')
        })
    },
    refresh: (req, res) => {
        db.Notas.findByPk(req.params.id)
        .then(nota => {
            res.render('detail', {nota})
        })
    },
    change: (req, res) => {
        db.Notas.update({
            titulo: req.body.title,
            texto: req.body.message
        }, {where:{
            id: req.params.id
        } 
        })
        .then(notaActualizada => {
            res.redirect('/')
        })
        .catch(error => {
            res.send(error)
        })
    },
    delete: (req, res) => {
        db.Notas.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(pelicula => {
            res.redirect('/')
        })
    }
}
