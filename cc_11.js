// Task 1: Creating Book Class
class Book {
    constructor(title,author, isbn, copies) {
        this.title = title; // title string
        this.author = author; // author string
        this.isbn = isbn; // isbn number
        this.copies = copies; // number of copies
    }
    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`; // details of book
    };
    updateCopies(quantity) {
        this.copies += quantity;
    } // updates the copies of book
}; // class for book

// Test Cases for Task 1

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"

book1.updateCopies(-1);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"


// Task 2: Creating a Borrower Class

class Borrower {
    constructor(name, borrowerId) {
        this.name = name; // name string
        this.borrowerId = borrowerId; // borrower number
        this.borrowedBooks = []; // borrower array
    }
    borrowBook(book) {
        this.borrowedBooks.push(book); // adds books to array
    }
    returnBook(book) {
        this.borrowedBooks = this.borrowedBooks.filter(b => b.isbn !== book.isbn); // removes books from array
    }
}; // class for borrower


// Test Cases for Task 2

const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]

borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: []


// Task 3: Creating a Library Class 

class Library {
    constructor() {
        this.books = []; // array of books 
        this.borrowers = []; // array of borrowers
    }
    addBook(book) {
        this.books.push(book); // adds books to arryy
    }
    listBooks() {
        this.books.map(book => console.log(book.getDetails())); // lists book details
    }
    addBorrower(borrower) {
        this.borrowers.push(borrower); // adds borrower to array
    }
    // Task 4: Implementing Book Borrowing
    lendBook(borrowerId, isbn) {
        const book = this.books.find(book => book.isbn === isbn); // locates book by isbn
        const borrower = this.borrowers.find(borrower => borrower.borrowerId === borrowerId); // finds borrower by id
        if (book && borrower) {
        if (book.copies > 0) {
            book.updateCopies(-1); // updates copies
            borrower.borrowBook(book); // borrows selected book
            } 
            else {
                console.log("No copies available");
            }
        } else {
            console.log("Book or borrower not found")
        }
    }
    // Task 5: Implementing Book Returns
    returnBook(borrowerId, isbn) {
        const borrower = this.borrowers.find(b => b.borrowerId === borrowerId); // finds borrower by id
        const book = this.books.find(b => b.isbn === isbn); // finds book by isbn
        if (book) {
            book.updateCopies(1); // updates copies
            if (borrower) {
                borrower.returnBook(book); // returns book
            }
        }
    }
} // class for library


// Test Cases for Task 3

const library = new Library();
library.addBook(book1);
library.listBooks();
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"


// Test Cases for Task 4 

library.lendBook(201, 123456);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 3"
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]

// Test Cases for Task 5

library.returnBook(201, 123456);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"
console.log(borrower1.borrowedBooks);
// Expected output: []


