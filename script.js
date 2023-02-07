let myLibrary = [];

const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const book = document.querySelector("#book").value;
  addBookToLibrary(book);
});


function Book() {
    myLibrary.forEach(function(book) {
        const books = document.querySelector(".books");
        const p = document.createElement("p");
        p.textContent = `Title: ${book.book},`;
        books.appendChild(p);
});
}

function addBookToLibrary(book,author,numPages) {
    myLibrary.push ({
        'book': book,
        'author': author,
        'numberOfPages':numPages
    })
}


addBookToLibrary('dasga','harry potos','150356')
Book()