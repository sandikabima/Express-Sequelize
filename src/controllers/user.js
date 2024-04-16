const User = require('../models/user')

class Controller {
    static post(req, res){
        const {nama , email } = req.body
        User.create({
        nama : nama,
        email : email,
        })
        .then((data)=> {
            res.status(201).json({data})
        })
    }

    static async getAll (req, res){
        try {
            const data = await User.findAll();
            res.status(200).json({data})
        } catch (error) {
            res.status(500)
            res.send(error.message)
        }
    }

    static async delete(req, res){
        try {
            let data = await User.destroy({
                where : {
                    id : + req.params.id
                },
                force : true
            })
            data ? res.status(200).json({message:"success to delete"}) : res.status(404).json({message : "user not found"})
        } catch (error) {
            res.status(500)
            res.send(error.message)
        }
    }

    static async findById(req, res){
        try {
            const {id} = req.params
            const data = await User.findByPk(id)
            if (!data){
                res.status(400).send({message : `user with ${id} not found`})
            }
            res.status(200).json({data})
        } catch (error) {
            res.status(500)
            res.send(error.message)
        }
    }

    static async put(req, res){
        try {
            const {id} = req.params
            const {nama, email} = req.body
            const data = await User.findOne({
                where : {id}
            })
            if (!data){
                res.status(400).send({message : `user with ${id} not found`})
            }

            if (nama) data.nama = nama
            if (email) data.email = email
            const updateData = await data.save()

            if (!updateData){
                res.status(400).send({message : `user with ${id} failed update`})
            }
            res.status(200).json({data})
        } catch (error) {
            res.status(500)
            res.send(error.message)
        }
    }

}

module.exports = Controller