
let displaytable = document.getElementById("displaytable");
let form = document.getElementById("myform");
let title = document.getElementById("title");
let author = document.getElementById("author");
let pages = document.getElementById("pages");
let dialog = document.querySelector("dialog");
let read = document.getElementById("read");
let table;
let tableRowOne;
let tableRowTwo;
let tableRowThree;
let tableRowFour;

let book;
let addbook = document.getElementById("addbook");


let myLibrary = [];

function Book(title,author,pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;

    return this;

}

function addBookToLibrary(bookItem){
    myLibrary.push(bookItem)

}

let submitbutton = document.getElementById("submitbutton");
submitbutton.addEventListener("click" ,(e) => {
   let  titleValue = title.value;
   let  authorValue = author.value;
   let  pagesValue = pages.value;
     book = new Book(titleValue,authorValue,pagesValue);
     
     
     addBookToLibrary(book);
     displayTable();
     
    
    
    dialog.close();
    e.preventDefault
})
addbook.addEventListener("click", () => {
    table = document.createElement("table");
    tableRowOne = document.createElement("tr");
    tableRowTwo = document.createElement("tr");
    tableRowThree = document.createElement("tr");
    tableRowFour = document.createElement("tr");
    tableRowOne.style.backgroundColor = "#66FF66";
    tableRowTwo.style.backgroundColor = "#6666FF";
    tableRowThree.style.backgroundColor = "#66FF66";
    tableRowFour.style.backgroundColor = "#6666FF";


    
    dialog.showModal()
    

});

form.addEventListener("submit",(e) =>{
   
   
    e.preventDefault();
})

function displayTable(){
    if(myLibrary !== null){
        myLibrary.forEach(item =>{
            tableRowOne.innerHTML = `Title: ${item.title}`;
            tableRowTwo.innerHTML = `Author: ${item.author}`;
            tableRowThree.innerHTML = `Pages:  ${item.pages}`;
            if(read.checked){
                this.read = true;
                tableRowFour.innerHTML = `I have read the book`;
            }
            else{
                tableRowFour.innerHTML = `I have not read the book`;
            }

        });
        displaytable.appendChild(table);
        table.appendChild(tableRowOne);
        table.appendChild(tableRowTwo);
        table.appendChild(tableRowThree);
        table.appendChild(tableRowFour);
    }
}
