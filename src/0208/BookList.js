import { useState } from 'react'
import './BookList.css'

// 範例資料
import data from './books.json'

// 實心圖
import bookmarkIconFill from './bookmark-fill.svg'
// 空心圖
import bookmarkIcon from './bookmark.svg'

function BookList() {
  const initState = data.map((v, i) => {
    return { ...v, liked: false }
  })
  const toggleLiked = (arr, id) => {
    return arr.map((v, i) => {
      if (v.isbn === id) return { ...v, liked: !v.liked }
      else return { ...v }
    })
  }

  const [books, setBooks] = useState(initState)
  return (
    <>
      <h1>書籍清單</h1>
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>title</th>
            <th>author</th>
            <th>加入收藏</th>
          </tr>
        </thead>
        <tbody>
          {books.map((v, i) => {
            return (
              <tr key={v.isbn}>
                <td>{v.isbn}</td>
                <td>{v.title}</td>
                <td>{v.author}</td>
                <td>
                  {v.liked ? (
                    <img
                      src={bookmarkIconFill}
                      alt=""
                      onClick={() => {
                        setBooks(toggleLiked(books, v.isbn))
                      }}
                    />
                  ) : (
                    <img
                      src={bookmarkIcon}
                      alt=""
                      onClick={() => {
                        setBooks(toggleLiked(books, v.isbn))
                      }}
                    />
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default BookList
