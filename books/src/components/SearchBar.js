import React from 'react'

function SearchBar () {
    return (
        <div id="searchBox">
            <h3>Search for a Book</h3>
            <form class="form-inline">
                <div class="form-group mb-2">
                    <input type="password" class="form-control" id="bookName" placeholder="Book Name"/>
                </div>
                <button type="submit" class="btn btn-danger mb-2" id="bookSearchButton">Search</button>
            </form>
        </div>
    )
}

export default SearchBar