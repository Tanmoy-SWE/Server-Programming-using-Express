const books = require("./../models/books");
const bookModel = require("./../models/books");

const getBookList = async (req, res) => {
  let data = [];
  let books = [];
  try {
    data = await bookModel.find();
    //console.log(data);
    data.forEach((book) => {
      books.push({ name: book.name, author: book.author, genre: book.genre });
    });
  } catch (error) {
    console.log(error);
  } finally {
    res.render("bookList", { books: books });
  }
};

const getBook = (req, res) => {
  res.render("addBooks");
};

const postBook = (req, res) => {
  const data = new bookModel({
    name: req.body.name,
    author: req.body.author,
    genre: req.body.genre,
  });
  data
    .save()
    .then(() => {
      console.log("Data Saved Successfully!");
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      res.redirect("/books");
    });
};


const deleteBook = async(req, res) => {

  try {
    await bookModel.deleteOne({id : req.params.id});
    console.log("Data Deleted Successfully!")
  } catch (error) {
    console.log(error);
  }
  let data = [];
  let books = [];
  try {
    data = await bookModel.find();
    //console.log(data);
    data.forEach((book) => {
      books.push({ name: book.name, author: book.author, genre: book.genre });
    });
  } catch (error) {
    console.log(error);
  } finally {
    res.render("bookList", { books: books });
  }
  
};

const updateBook = async(req, res) => {

  res.render("updateBooks");
  
};


const updatePages = async(req, res) => {

  const data = new bookModel({
    name: req.body.name,
    author: req.body.author,
    genre: req.body.genre,
  });
  data
    .save()
    .then(() => {
      console.log("Data Saved Successfully!");
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      res.redirect("/bookList");
    });
  
};

module.exports = { getBookList, getBook, postBook, deleteBook, updateBook, updatePages };
