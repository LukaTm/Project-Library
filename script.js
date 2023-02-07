let myLibrary = [];

// Add Book's all info to myLibrary
const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  event.preventDefault();

  const book = document.querySelector("#book").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  addBookToLibrary(book,author,pages);
});

function addBookToLibrary(book,author,numPages) {
    myLibrary.push ({
        'book': book,
        'author': author,
        'numberOfPages':numPages,
        'id':myLibrary.length
    })
    Book()
}

// Display book on site
function Book() {
    let x = 0
    let tuksa = [myLibrary[myLibrary.length - 1]]

    tuksa.forEach(function(book) {
        const books = document.querySelector(".books");
        const p = document.createElement("p");
        p.setAttribute('class',`id${x}`)
        p.textContent = `Title: ${book.book} Author: ${book.author} Pages: ${book.numberOfPages}`;
        const button = document.createElement('button')
        button.setAttribute('class','allDeleteButtons')
        button.setAttribute('id',`id: ${book.id}`)
        button.textContent = 'Delete Book'
        books.appendChild(p);
        books.appendChild(button);

        // Remove Book Button 
        button.addEventListener("click", () => {
            const delBooks = document.querySelectorAll('.allDeleteButtons');
            delBooks.forEach(function(bookId) {
                if (parseInt(bookId.id.slice(3)) === myLibrary[x]['id']){
                    myLibrary.splice(x,1);
                    const delElement = document.getElementById(`${bookId.id}`)
                    delElement.remove()
                    const delButton = document.querySelector(`.id${x}`)
                    console.log(bookId.id)
                    delButton.remove()
                }

                x++
                
            });
            x = 0;
        });
    });
}




