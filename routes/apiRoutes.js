const router = require("express").Router()
const request = require('request')
const controller = require("../controllers/booksController")

function apiCall(req, res) {
    let searchQuery = req.params.search
    
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`
    request(url, function (error, response, data) {
        if (!error && response.statusCode == 200) {
            let books = JSON.parse(data).items
            res.send(books)
        }
      })
    
}

router.get("/api/:search", apiCall)

router.post("/api", controller.create)

router.post("/api/:id", controller.remove)

router.get("/saved", controller.findAll)

module.exports = router