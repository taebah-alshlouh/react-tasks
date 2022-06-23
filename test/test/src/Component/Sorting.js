import React from 'react';

function Sort(){
    const data = ["Banana ", "Orange ", "Apple ", "Mango "];
    const sort = data.sort((a, b) => (a > b ? -1 : 1));
    console.log(sort);
return(
   <>
<h1> sorting data</h1>
<ul>
        {sort.map((element, i) => (
          <li key={i}>{element}</li>
        ))}
      </ul>
</>
);
}

export default Sort;