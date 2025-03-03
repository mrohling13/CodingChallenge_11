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




