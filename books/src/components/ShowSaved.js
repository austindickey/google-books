import React from "react"
import Container from "./Container"
import TitleDiv from "./TitleDiv"
import { Results, SingleResult } from "./Results"

class BookSearch extends React.Component {

    state = {
        books: []
    }

    showSaved() {

        fetch('/saved')
            .then(response => response.json())
            .then(res => this.setState({books: res}))
            .catch(err => console.log("err", err))
        
    }
    
    componentDidMount() {
        this.showSaved()
    }

    deleteBook(book) {
        fetch(`/api/${book._id}`, {
            method: "POST"
        }).then(()=> {
            this.showSaved()
        })
    }

    render() {
        const bookList = this.state.books
        return (
            <Container>
                <div className="contentHolder">
                    <TitleDiv/>

                    {!bookList.length ? (
                        <Results>
                            <h3 id="noResults">No Books to Display</h3>
                        </Results>
                    ) : (
                            <Results>
                                {bookList.map((book, i) => {

                                    return (
                                        <SingleResult
                                            key={i}
                                            bookLink={book.bookLink}
                                            title={book.title}
                                            subtitle={book.subtitle}
                                            authors={book.authors}
                                            publishDate={book.publishedDate}
                                            bookImg={book.bookImg}
                                            description={book.description}
                                            btnText={"Delete"}
                                            btnClassNames={"btn btn-danger deleteBook"}
                                            clickFunc={() => this.deleteBook(book)}
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