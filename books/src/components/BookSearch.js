import React from "react"
import Container from "./Container"
import TitleDiv from "./TitleDiv"
import SearchBar from "./SearchBar"
import Results from "./Results"

class BookSearch extends React.Component {
    state = {

    }

    render() {
        return (
            <Container>
                <div className="contentHolder">
                    <TitleDiv/>
                    <SearchBar/>
                    <Results header="Search Results"/>

                </div>
            </Container>
        )
    }
}

export default BookSearch