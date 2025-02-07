import { useState } from 'react';

const BookShelf = (props) => {
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ])
    const [newBook, setNewBook] = useState({ title: "", author: "", })
    const handleInputChange = (eventObj) => {
        const { name, value } = eventObj.target
        setNewBook((newBook) => {
            return {
                ...newBook,
                [name]: value,
            }
        })

    }

    const handleSubmit = (eventObj) => {
        eventObj.preventDefault()
        setBooks((books) => { return [...books, newBook] })
        setNewBook({ title: "", author: "", })
    }

    return (
        <>
            <div className="bookshelfDiv">
                <div className="formDiv">
                    <h3>Add a Book</h3>
                    {/* Form will go here */}
                    <form>
                        <label htmlFor="title">Title: </label>
                        <input name="title" type='text' value={newBook.title} onChange={handleInputChange}></input>

                        <label htmlFor="author">Author: </label>
                        <input name="author" type='text' value={newBook.author} onChange={handleInputChange}></input>
                        <button onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
                <div className="bookCardsDiv">{/* Book cards will display here */
                    books.map((book, i) => {
                        return (
                            <div className='bookCard' key={i}>
                                <strong>{book.title}</strong> by {book.author}
                            </div>
                        )
                    })}</div>
            </div>

        </>
    )
}

export default BookShelf