const container = document.getElementById('container');

let myLibrary = [
    {
    title: "Harry Potter and the Philosopher's Stone",
    author: 'J.K. Rowling',
    pages: 223,
    read: true
}
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary () {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;

    myLibrary.push(new Book(title, author, pages, read));
    display();
}

function display() {
    container.innerHTML = '';

    for (let i = 0; i < myLibrary.length; i++) {
        const book = document.createElement('div');
        book.classList.add('details');
        book.innerHTML = `<div>Title: ${myLibrary[i].title}</div>
                          <div>Author: ${myLibrary[i].author}</div>
                          <div>Pages: ${myLibrary[i].pages}</div>`;
        container.append(book);
    }
}

display();

const addBook = document.getElementById('addBook');
const cancelButton = document.getElementById('cancel');
const dialog = document.getElementById('dia');

addBook.addEventListener('click', function() {
    dialog.showModal();
});

cancelButton.addEventListener('click', function(){
    dialog.close('canceled');
});