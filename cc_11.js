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

