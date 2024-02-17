const express=require('express')
const router=express.Router()
const {getBook, getBookId, createBook ,updateBook,deleteBook,getAuthorBookId}=require('../services/book')

router.get('/books',getBook)
router.get('/books/:id',getBookId)
router.post('/books',createBook)
router.put('/books/:id',updateBook)
router.delete('/books/:id',deleteBook)

router.get('/author/:author_id/books',getAuthorBookId)
module.exports=router
