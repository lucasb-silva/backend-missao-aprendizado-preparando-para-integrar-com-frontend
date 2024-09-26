const express = require('express')
const controller = require('./personagem.controller')
const { validateObjectId } = require('../db/database.helper')

const router = express.Router()

router.get('/', validateObjectId, controller.readAll)
router.get('/:id', validateObjectId, controller.readById)
router.post('/', validateObjectId, controller.create)
router.put('/:id', validateObjectId, controller.updateById)
router.delete('/:id', validateObjectId, controller.deleteById)

module.exports = router