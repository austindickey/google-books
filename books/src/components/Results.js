import React from 'react'

// function Results (props) {
//     return (
//         <div className="results">
//             <h3>{props.header}</h3>

//         </div>
//     )
// }

// export default Results


// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function Results({ children }) {
    return <ul className="list-group">{children}</ul>;
  }
  
  // RecipeListItem renders a bootstrap list item containing data from the recipe api call
  export function SingleResult({
    title
  }) {
    return (
      <li className="list-group-item">
        <h3>{title}</h3>
      </li>
    );
  }