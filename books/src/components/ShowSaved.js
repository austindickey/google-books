import React from "react"
import Container from "./Container"
import TitleDiv from "./TitleDiv"
// import Results from "./Results"

class BookSearch extends React.Component {
    state = {

    }

    render() {
        return (
            <Container>
                <div className="contentHolder">
                    <TitleDiv/>
                    {/* <Results header="Saved Books"/> */}

                </div>
            </Container>
        )
    }
}

export default BookSearch