//create class library and implement the following:-
// constructor must take the book list as an arguments
// getBookList()
// issueBook(bookName,userName)
// returnBook(booKName)

class Library{
    constructor(bookList){
        this.bookList=bookList;
        this.issuedBooks={};
    }
    getBookList(){
        this.bookList.forEach(element => {
            console.log(element);
        });
    }
    issueBook(bookname,user){
        if (this.issuedBooks[bookname]==undefined){
            this.issuedBooks[bookname]=user;
        }
        else{
            console.log("This book is already issued"); 
        }
    }
    returnBook(bookname){
        delete this.issuedBooks[bookname];
    }
}
// in browser console type this:-
// l=new Library(['book_name1','book_name2','book_name3'])
// l.getBookList()
// l.issueBook('book_name1','username')