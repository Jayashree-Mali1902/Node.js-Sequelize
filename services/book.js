const db= require('../models')


const getBook=async (req, res) => {

    try {
  
      let books = await db.Book.findAll();
      console.log("getBook")
  
      /*if (!books) {
        res.send('Book not found')
      }*/
  
      res.send(books);
  
    } catch (error) {
      res.json(error);
    }
  
  };
  
const getBookId= async (req, res) => {
  try {
  
      let book = await db.Book.findOne({
        where: {
          id: req.params.id
        }
      })
  
      console.log("getBookId")
      if (!book) {
        res.send('Book not found');
      }
  
      res.send(book);
  
    } catch (error) {
      res.json(error);
    }
 };
  
/*const createBook= async (req, res) => {
  
    try {
  
      await db.Book.create({
  
        name: req.body.name,
        author: req.body.author,
        
  
      });
      console.log("createBook")
  
      res.send('Book added');
  
    } catch (error) {
      res.json(error);
    }
  
  };*/
  const createBook = async (req, res) => {
 
    try {
       let existBook = await db.Book.findOne({
            where: {
                name: req.body.name
            }
        });
 
        if (existBook) {
            res.send('The book already exists.');
        }
        else {
            await db.Book.create({
                name: req.body.name,
                author_id: req.body.author_id,
            });
            res.send('Book added');
        }
    } catch (error) {
        res.json(error);
    }
};
  
  
  
  const updateBook= async (req, res) => {
  
    try {
  
      const book= await db.Book.findByPk(req.params.id);
  
      if (!book) {
  
        res.send('Book not found');
      } else {
  
        await book.update({
  
          name: req.body.name,
          author_id: req.body.author_id,
         
        });
  
        res.send('Book Updated');
  
      }
    } catch (error) {
      res.json(error);
    }
  
  };
  
const deleteBook= async (req, res) => {
    try {
  
      const book = await db.Book.findByPk(req.params.id);
  
      if (!book) {
  
        res.send('Book not found');
      } else {
  
        await book.destroy();
  
        res.send('Book Deleted');
  
      }
    } catch (error) {
      res.json(error);
    }
  };

  const getAuthorBookId= async (req, res) => {
 
    try {
     
      let book = await db.Book.findAll({
        where: {
          author_id: req.params.author_id
        }
      })
   
      console.log("getAuthorBookId")
   
      res.send(book);
   
    } catch (error) {
      console.log(error)
      res.json(error);
    }
  }

  module.exports={
    getBook,
    getBookId,
    createBook,
    updateBook,
    deleteBook,
    getAuthorBookId
  }