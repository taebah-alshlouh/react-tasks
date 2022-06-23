import React from 'react';

function Sort(){
    const data = [5, -2, 23, 7, 87,-42, 509];
    const sort = data.sort((a, b) => (a > b ? 1 : -1));
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