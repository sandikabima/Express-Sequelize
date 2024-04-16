const express = require('express')
const router = express.Router()
const Controller = require('../controllers/user')


router.post('/', Controller.post)
router.get('/', Controller.getAll)
router.get('/:id', Controller.findById)
router.put('/:id', Controller.put)
router.delete('/:id', Controller.delete)



module.exports = router