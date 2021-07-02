// rafcp
import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
const GifExpertApp = () => {
    const [categories, setcategories] = useState( ["Naruto"]);

    return (
     <>
     <h2>GifExpertApp</h2>
     <AddCategory setcategories = {setcategories}/>
     <hr></hr>
     <div className="lista">
     <ol>
         {
        
           categories.map(category => (
              <GifGrid
              key={category}
              category={category}
              />
            ))

          }
     </ol>
     </div>
     </>
    )
}



export default GifExpertApp
