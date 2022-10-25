const API_SINGLE_BOOK = "https://www.coletnelson.us/cs571/f22/hw2/api/book";
const API_MULTIPLE_BOOKS = "https://www.coletnelson.us/cs571/f22/hw2/api/books?amount=12";

// TODO: Set the featured book's image.

const bookimage = document.getElementById("featuredBookImage")
bookimage.setAttribute("src", "https://loremflickr.com/150/200")

// TODO: Set the data for the featured book.
fetch(API_SINGLE_BOOK)
.then((res) => res.json())
.then((book) => {
    let bookName = document.getElementById("featuredBookName");
    let authorName = document.getElementById("featuredBookAuthor");
    bookName.innerHTML = book.name;
    authorName.innerHTML = book.author.firstName + " " + book.author.lastName
});

// TODO: Load all other book data.

fetch(API_MULTIPLE_BOOKS)
.then((res) => res.json())
.then((books) => {
    for (let i = 0; i < books.length; i++) {
        let name = books[i].name;
        let author = books[i].author.firstName + " " + books[i].author.lastName;
        let price = books[i].price;
        let rating = books[i].rating;
        let description = books[i].description;
        let BOOK_HTML = constructBook(name, author, price, rating, description)
        document.getElementById("allOtherBooks").insertAdjacentHTML('beforeend', BOOK_HTML);
    }

    document.getElementsByName("checkout").forEach(checkoutBtn => {
        checkoutBtn.addEventListener("click", () => {
            alert("Thanks for checking out this book!");
        });
    });
})