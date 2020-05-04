import React from "react"
import Container from "./Container"
import TitleDiv from "./TitleDiv"

class BookSearch extends React.Component {
    state = {

    }

    render() {
        return (
            <Container>
                <div className="contentHolder">
                    <TitleDiv/>
                    <h1>Home Page</h1>

                </div>
            </Container>
        )
    }
}

export default BookSearch