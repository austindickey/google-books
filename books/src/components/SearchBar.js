import React from 'react'

export default class SearchBar extends React.Component {
    state = {
        loading: true
    }
    
    async componentDidMount() {
        const url = "https://www.googleapis.com/books/v1/volumes?q=boss"
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    }

    render() {
        return (
            <div>
                {this.state.loading ? <div>loading...</div> : <div>person...</div>}
            </div>
        )
    }
}