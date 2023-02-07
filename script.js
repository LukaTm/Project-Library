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
    let tuksa = [myLibrary[myLibrary.length - 1]]
    tuksa.forEach(function(book) {
        const books = document.querySelector(".books");
        const p = document.createElement("p");
        p.textContent = `Title: ${book.book} Author: ${book.author} Pages: ${book.numberOfPages}`;
        books.appendChild(p);
    });
}

// Remove Book Button 



