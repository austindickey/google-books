import React from 'react'

export function Results({ children }) {
    return <ul id="results" className="list-group">{children}</ul>
}

export function SingleResult({
    bookImg,
    title,
    bookLink,
    description,
    authors,
    subtitle,
    publishDate,
    btnText,
    btnClassNames,
    clickFunc
}) {
    return (
        <li className="list-group-item">
            <a href={bookLink} target="_blank" rel="noopener noreferrer"><h3 className="title">{title}</h3></a>
            <p className="subtitle">{subtitle}</p>
            <p><span>Author(s): </span>{authors}</p>
            <p><span>Published Date: </span>{publishDate}</p>
            <a href={bookLink} target="_blank" rel="noopener noreferrer"><img src={bookImg} alt="Book Pic" /></a>
            <p><span>Description: </span>{description}</p>
            <button className={btnClassNames} onClick={clickFunc}>{btnText}</button>
        </li>
    )
}