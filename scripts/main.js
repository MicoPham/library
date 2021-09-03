const container = document.getElementById('container');
const addBook = document.getElementById('addBook');
const cancelButton = document.getElementById('cancel');
const dialog = document.getElementById('dia');

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
    resetForm();
}

function display() {
    container.innerHTML = '';

    for (let i = 0; i < myLibrary.length; i++) {
        const book = document.createElement('div');
        book.classList.add('details');
        book.innerHTML = `<div>Title: ${myLibrary[i].title}</div>
                          <div>Author: ${myLibrary[i].author}</div>
                          <div>Pages: ${myLibrary[i].pages}</div>
                          <div>Have read?: <button onclick='toggle(${i})'>${myLibrary[i].read ? 'Yes' : 'No'} </button></div>
                          <button onclick='removeBook(${i})'> Remove </button>`;
        container.append(book);
    }
}

function removeBook(i) {
	myLibrary.splice(i, 1);
	display();
}

function resetForm() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('read').checked = '';
}

function toggle(i) {
    if (myLibrary[i].read) {
        myLibrary[i].read = false;
    } else {
        myLibrary[i].read = true;
    }
    display();
}

addBook.addEventListener('click', function() {
    dialog.showModal();
});

cancelButton.addEventListener('click', function(){
    dialog.close('');
});

display();
