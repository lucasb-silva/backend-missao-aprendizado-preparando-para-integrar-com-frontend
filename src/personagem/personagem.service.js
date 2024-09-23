const { ObjectId } = require('mongodb')
const { getDatabase } = require('../db/database-connection')

function getCollection() {
  return getDatabase().collection('personagem')
}

function readAll() {
  // Acessamos a lista de personagens no collection do MongoDB
  return getCollection().find().toArray()
}

/**
 * 
 * @param {string} id 
 * @returns 
 */
function readById(id) {
  // Retornar o item na collection usando o ID
  return getCollection().findOne({ _id: new ObjectId(id) })
}

function create(newItem) {
  // Adicionamos na collection
  return getCollection().insertOne(newItem)
}

/**
 * 
 * @param {string} id 
 * @returns 
 */
function updateById(id, newItem) {
  // Atualizamos na collection o novoItem pelo ID
  return getCollection().updateOne(
    { _id: new ObjectId(id) },
    { $set: newItem }
  )

}

/**
 * 
 * @param {string} id 
 * @returns 
 */
function deleteById(id) {
  // Remover o item da collection usando o ID
  return getCollection().deleteOne({ _id: new ObjectId(id) })
}

module.exports = {
  readAll,
  readById,
  create,
  updateById,
  deleteById
}