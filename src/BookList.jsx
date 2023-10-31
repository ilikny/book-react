import { useEffect, useState } from "react";
import Book from "./Book";
import './BookList.scss'

export default function BookList(){
  const [data, setData] = useState(null);

  const [page, setPage] = useState(1);

  const loadData = async (page) => {
    const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/books-api/latest-books.php?page='+page);
    const data = await response.json();

    setData(data);
  }

    useEffect(() => {
    loadData(page);
  }, [])

  const pageDown = event => {
    page == 1 ? setPage(1) :
    setPage( page - 1 )
  }

    const pageUp = event => {
    setPage( page + 1 )
  }

  useEffect(() => {
    loadData(page);
  }, [page])


//  console.log(data);

  return <>
  <h3>Latest books</h3>
  <ul className="book_list">
            {
          data === null
            ? (
              <div className="loading">Loading...</div>
            )
            : data.map(book => <Book key={ book.id } { ...book} />)
            
        }

  </ul>
  <button className="page" onClick={ pageDown } >&larr;</button>
  {page}
  <button className="page" onClick={ pageUp } >&rarr;</button>
  </>
}