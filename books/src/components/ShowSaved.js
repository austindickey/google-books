import React from "react"
import Container from "./Container"
import TitleDiv from "./TitleDiv"

const db = require("../models")

class BookSearch extends React.Component {

    state = {

    }
    
    componentDidMount() {
        db.Book.find({"saved": true})
            .then(function(data){
                console.log(data)
            })
            .catch(function(err){
                if (err) throw err
            })
    }

    render() {
        return (
            <Container>
                <div className="contentHolder">
                    <TitleDiv/>
                    
                </div>
            </Container>
        )
    }
}

export default BookSearch