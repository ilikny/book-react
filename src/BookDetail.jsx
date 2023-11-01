import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function BookDetail(){

  //this catch all url parameters to the object
  // const allURLParams = useParams();

  const { id } = useParams();

  const [book, setBook] = useState(null);
  //show the detail of book in return using this state


  const loadBook = async () => {
    const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/books-api/book.php?id='+ id)
    const data = await response.json();

    setBook(data);
  }

  useEffect(()=>{
    loadBook();
  }, [id])


   return (
    <div>
      { book
      ?(

        <>
      
      <h2>Detail of a book</h2>
      <h3>{ book.title }</h3>
      <p>{ book.description }</p>
      <h3> {book.price }</h3>
      </>)
      :
      
      <div className="loading">
      Loading...
      </div>
      

      }
    </div>
   )
}