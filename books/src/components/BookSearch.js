import React from "react"
import Container from "./Container"
import TitleDiv from "./TitleDiv"
// import SearchBar from "./SearchBar"
import { Results, SingleResult } from "./Results"

class BookSearch extends React.Component {
    state = {
        books: [],
        bookSearch: ""
    }

    async componentDidMount() {
        const url = "https://www.googleapis.com/books/v1/volumes?q=boss"
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

    async handleFormSubmit () {
        const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.bookSearch}`
        const response = await fetch(url)
        const data = await response.json()
        const books = data.items
        this.setState({books})
    }

    render() {
        let bookList = this.state.books
        console.log("Book List: ", bookList)
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
                        <button className="btn btn-danger mb-2" id="bookSearchButton" onClick={() => this.handleFormSubmit()}>Search</button>
                    </div>
                    <div>{bookList.title}</div>
                    <Results>
                        {bookList.map((book, i) => {

                        return (
                            <SingleResult
                                key={i}
                                title={book.volumeInfo.title}
                            />
                            )
                        })}
                    </Results>

                </div>
            </Container>
        )
    }
}

export default BookSearch