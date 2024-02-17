const db= require('../models')


const getAuthor=async (req, res) => {

    try {
  
      let author = await db.Author.findAll();
      console.log("getAuthor")
  
      /*if (!books) {
        res.send('Book not found')
      }*/
  
      res.send(author);
  
    } catch (error) {
      res.json(error);
    }
 };
const getAuthorId= async (req, res) => {

  try {
  
      let author = await db.Author.findOne({
        where: {
          id: req.params.id
        }
      })
  
      console.log("getAuthorId")
      if (!author) {
        res.send('Author not found');
      }
  
      res.send(author);
  
    } catch (error) {
      res.json(error);
    }
};
  
const createAuthor= async (req, res) => {
  
    try {
  
      await db.Author.create({
  
        name: req.body.name,
        address: req.body.address,
        contact: req.body.contact,
        
  
      });
      console.log("createAuthor")
  
      res.send('Author added');
  
    } catch (error) {
      res.json(error);
    }
  
  };
  /*const createBook = async (req, res) => {
 
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
                author: req.body.author,
            });
            res.send('Book added');
        }
    } catch (error) {
        res.json(error);
    }
};*/
  
  
  
  const updateAuthor= async (req, res) => {
  
    try {
  
      const author= await db.Author.findByPk(req.params.id);
  
      if (!author) {
  
        res.send('Author not found');
      } else {
  
        await author.update({
  
          name: req.body.name,
          address: req.body.address,
         
        });
  
        res.send('Author Updated');
  
      }
    } catch (error) {
      res.json(error);
    }
  
  };
  
  
  
  
  const deleteAuthor= async (req, res) => {
    try {
  
      const author = await db.Author.findByPk(req.params.id);
  
      if (!author) {
  
        res.send('Author not found');
      } else {
  
        await author.destroy();
  
        res.send('Author Deleted');
  
      }
    } catch (error) {
      res.json(error);
    }
  };
  module.exports={
    getAuthor,
    getAuthorId,
    createAuthor,
    updateAuthor,
    deleteAuthor
  }