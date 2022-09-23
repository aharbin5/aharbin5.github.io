import bookJSON from './json-files/google-books-book.json' assert {type: 'json'};

toWrite = "Something";
toWrite = toWrite + bookJSON.id;

$("#first-book").html(toWrite);