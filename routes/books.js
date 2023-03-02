var express = require('express');
var router = express.Router();

let books = [{
  id: 1,
  title: "Shantaram",
  author: "G Davis",
  pages: 1000,
  avaible: true 
},
{
id: 2,
title: "Harry Potter och den flammande bägaren",
author: "J K Rowling",
pages: 1000,
avaible: false
},
{
  id: 3,
  title: "Sagan om ringen",
  author: "J R R Tolkien",
  pages: 700,
  avaible: true
  },
  {
    id: 4,
    title: "Sagan om konungens återkomst",
    author: "J R R Tolkien",
    pages: 700,
    avaible: true
    }
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(books);
});

router.post('/borrow', function(req, res){
  res.send({message: "works"})
  let borrowedBook = req.body;

  books.map(book => {
    if((book.title).toLowerCase() === (borrowedBook.title).toLowerCase()){
      book.avaible = false;
    }
    console.log(books)
})
})

router.post('/leave', function(req, res){
  res.send({message: "works"})
  let leavedBook = req.body;

  books.map(book => {
    if((book.title).toLowerCase() === (leavedBook.title).toLowerCase()){
      book.avaible = true;
    }
    console.log(books)
})
})

router.post('/add', function(req, res){
  res.send({message: "thank you!"});
  let book = req.body;
  book.id = books.length + 1;
  book.avaible = true;
  books.push(book);
})

module.exports = router;