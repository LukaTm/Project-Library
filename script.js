
let myLibrary = [];
let x = 0

// Add Book's all info to myLibrary
const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Book Read? Check
    let readStatus = undefined
    document.querySelector("#yes").checked ? readStatus = "Read" : readStatus = "Not Read" 

    const book = document.querySelector("#book").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    addBookToLibrary(book,author,pages,readStatus);
});

// Add Book to myLibrary
function addBookToLibrary(book,author,numPages,readStatus) {
    myLibrary.push ({
        'book': book,
        'author': author,
        'numberOfPages':numPages,
        'id':x,
        'readStatus': readStatus,
        'readBool': readStatus == 'Not Read' ? false : true
    })
    Book()
}

function changeReadStatus() {

}


// Display book on site
const books = document.querySelector(".books");
function Book() {
    let tuksa = [myLibrary[myLibrary.length - 1]]
    tuksa.forEach(book => {
        const p = document.createElement("p");
        p.setAttribute('class',`p${x}`)
        p.textContent = `Title: ${book.book} Author: ${book.author} Pages: ${book.numberOfPages} Read status: ${book.readStatus}`;


        // Create each div for book
        const div = document.createElement('div')


        // Book Read Status
        const statusButton = document.createElement('button')
        statusButton.textContent = 'Change read status'
        statusButton.setAttribute('id',`changeReadButton${x}`)
        div.appendChild(statusButton)


        const button = document.createElement('button')
        button.setAttribute('class','allDeleteButtons')
        button.setAttribute('id',`id${x}`)
        button.textContent = 'Delete Book'
        div.appendChild(p);
        div.appendChild(button);
        books.appendChild(div)


        // Read Status Button
        statusButton.addEventListener('click', () =>{
            myLibrary.forEach(book => {

                let bookParent = statusButton.parentElement
                const bookText = bookParent.querySelector('p')
                if (book.id == p.className.slice(1)){
                    if (book.readBool === true){
                        book.readBool = false
                        book.readStatus = 'Not Read'

                        bookText.textContent = bookText.textContent.slice(0,-5)
                        bookText.textContent += ' Not Read'      
                    } else {
                        book.readBool = true
                        book.readStatus = 'Read'
                        bookText.textContent = bookText.textContent.slice(0,-9)
                        bookText.textContent += ' Read'
                    }
                    
                }
            })
        });

        // Remove Book Button 
        button.addEventListener("click", () => {

            // Remove book from Library
            myLibrary.forEach(bookId => {
                if (bookId.id == button.id.slice(2)){
                    let newArray = myLibrary.filter(obj => obj.id !== button.id.slice(2));
                    myLibrary = newArray
                }
            let parentToRemove = button.parentElement
            parentToRemove.remove()

            });
        });
        x++
    });
}



