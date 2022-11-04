const express = require("express");
const router = express.Router();
const homeController = require("./controllers/homeController");
const bookController = require("./controllers/bookController");

router.get("/", homeController.getHome);
router.get("/book-list", bookController.getBookList);
router.get("/books", bookController.getBook);
router.post("/books", bookController.postBook);
router.post("/books/delete", bookController.deleteBook);
router.post("/books/updateBook", bookController.updateBook);
router.post("books/update", bookController.updatePages);


module.exports = router;
