const getAllBooks = (req, res) => {
    res.send('Here you get all the books')
}
const getBookById = (req, res) => {
    res.send('You get the specific book here')
}
const addBook = (req, res) => {
    res.send('New books will added here')
}
const updateBook = (req, res) => {
    res.send('Proccessing updation of specific book data here')
}
const deleteBook = (req, res) => {
    res.send('Here you can delete specific books')
}

module.exports = {
    getAllBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook
}