import React from "react"
import Container from "./Container"
import TitleDiv from "./TitleDiv"
import { Results, SingleResult } from "./Results"
import Moment from "moment"
import axios from "axios"
import mongoose from "mongoose"
// const mongoose = require("mongoose")
const dbConnection = mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks")

// import booksController from "../controllers/booksController"

// const db = require("../models")

class BookSearch extends React.Component {
    state = {
        books: [],
        bookSearch: ""
    }

    async apiCall() {
        const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.bookSearch}`
        const response = await fetch(url)
        const data = await response.json()
        const books = data.items
        this.setState({books})
    }

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    saveBook(i) {
        console.log("firing")
        // db.Book.insert(this.state.books[i])
        //     .then(function(data){
        //         console.log(data)
        //     })
        //     .catch(function(err){
        //         if (err) throw err
        //     })
        axios.post(dbConnection, this.state.books[i])
    }

    render() {
        let bookList = this.state.books
        // console.log("Book List: ", bookList)
        return (
            <Container>
                <div className="contentHolder">
                    <TitleDiv/>
                    <div id="searchBox">
                        <h3>Search for a Book</h3>
                        <form className="form-inline">
                            <div className="form-group mb-2">
                                <input type="text" name="bookSearch" value={this.state.bookSearch} onChange={(event) => this.handleInputChange(event)} className="form-control" id="bookName" placeholder="Book Name" />
                            </div>
                        </form>
                        <button className="btn btn-danger mb-2" id="bookSearchButton" onClick={() => this.apiCall()}>Search</button>
                    </div>
                    {!bookList.length ? (
                        <Results>
                            <h3 id="noResults">No Books to Display</h3>
                        </Results>
                    ) : (
                            <Results>
                                {bookList.map((book, i) => {
                                    let formattedDate = Moment(book.volumeInfo.publishedDate).format("MMMM Do, YYYY")

                                    return (
                                        <SingleResult
                                            key={i}
                                            bookLink={book.volumeInfo.infoLink}
                                            title={book.volumeInfo.title}
                                            subtitle={book.volumeInfo.subtitle}
                                            authors={book.volumeInfo.authors === undefined ? "No Listed Authors" : book.volumeInfo.authors.join(", ")}
                                            publishDate={formattedDate}
                                            bookImg={book.volumeInfo.readingModes.image ? book.volumeInfo.imageLinks.smallThumbnail : "https://books.google.com/googlebooks/images/no_cover_thumb.gif"}
                                            description={book.volumeInfo.description}
                                            btnText={"Save"}
                                            btnClassNames={"btn btn-danger saveBook"}
                                            clickFunc={() => this.saveBook(i)}
                                        />
                                    )
                                })}
                            </Results>
                        )}
                </div>
            </Container>
        )
    }
}

export default BookSearch