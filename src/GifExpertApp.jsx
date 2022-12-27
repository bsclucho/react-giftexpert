import {useState} from 'react';
import { AddCategory,GifGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setcategories] = useState(["One Punch"]);


  const onAddCategory = (newCategory) =>{

    if( categories.includes(newCategory) ) return;

    setcategories( [newCategory,...categories] );

    //setcategories(cat => [...cat,"Naruto"])
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      {/* <AddCategory setCategories={ setcategories } /> */}
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {/* <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol> */}

   
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
     
    </>
  );
}
