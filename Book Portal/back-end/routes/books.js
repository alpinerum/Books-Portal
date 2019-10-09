const Book = require('./../models/book-model');
const router = require('express').Router();
const Sequelize = require('sequelize');

router.post('/addBook', (req, res)=>{
        Book.create({image: req.body.image,
                    title: req.body.title,
                    contact: req.body.contact,
                    phone: req.body.phone,
                    email: req.body.email,
                    abstract: req.body.abstract,
                    author: req.body.author,
                    publish_date: req.body.publish_date,
                    category: req.body.category,
            }).then((book)=>{    
                
                   return res.status(200).json({msg: `${book.title} has been added successfully`})}).catch((err)=>{ return res.status(500);});
    
    

});

router.get('/getBooks', (req, res)=>{
        /* implement the getBooks route from scratch */
});

router.get('/getBook/:id', (req, res)=>{
       /* implement the getBook route from scratch */
});

router.patch('/changeBook/:id', (req, res)=>{
        Book.findOne({where: {ID: req.params.id}}).then((book)=>{
              if (book.status == 'available' && book.borrowedBy == null) 
              { book.status = 'not available';
               book.borrowedBy = req.body.email;}
               else if (book.status == 'not available' && req.body.email == book.borrowedBy) {
                       book.status = 'available';
                       book.borrowedBy = null;
               }
               else {return res.json({success: false}); }
                book.save();
                // complete the following method, return a json object having the book object as a property after being edited and a boolean 
              //  property called success in case of success, and error with status 500 in case of failure 
               return res.status(200).json({book: book, success: true})}).catch((err)=>{return res.status(500).send(err);});
});

module.exports = router;