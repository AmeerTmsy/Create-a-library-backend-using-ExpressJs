const express = require('express')
const router = express.Router()

const getAllAuthers = (req, res) =>{
    res.send("Get all the listed authers ")
}
const getAutherById = (req, res) =>{
    res.send("Here can get specific auther")
}
const addAuther = (req, res) =>{
    res.send("Here can add new auther")
}
const updateAuther = (req, res) =>{
    res.send("Here can update authers data information")
}
const deleteAuther = (req, res) =>{
    res.send("Here can delete specific auther")
}

module.exports = {
    getAllAuthers,
    getAutherById,
    addAuther,
    updateAuther,
    deleteAuther
}