console.log("Welcome to Note Application");
Shownotes();


// add note afer clicking button tag

let addBtn = document.getElementById("addBtn");
//  console.log(addBtn);
addBtn.addEventListener("click", function (e) {

    let addtest = document.getElementById("addText");
    let notes = localStorage.getItem("notes");
    if (notes === null) {
        // console.log(notelement);
        noteobj = [];
    } else {
        // console.log("Stroage have some Element");
        noteobj = JSON.parse(notes);
    }

    noteobj.push(addtest.value);
    localStorage.setItem("notes", JSON.stringify(noteobj));
    addtest.value = "";
    // console.log(noteobj);

    Shownotes();
})

// Function shownotes at from page 

function Shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes === null) {
        // console.log(notelement);
        noteobj = [];
    } else {
        // console.log("Stroage have some Element");
        noteobj = JSON.parse(notes);
    }
    let html = "";
    noteobj.forEach(function (element, index) {
        html += `
        <div class="card my-2 mx-2 noteCard" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text">${element}</p>
          <buttton id = "${index}" onclick = "deletenote(this.id)" class="btn btn-primary">Delete</button>
        </div>
      </div>
        `
    });
    let notelement = document.getElementById(`notes`);

    if (noteobj.length != 0) {
        notelement.innerHTML = html;
    }

    else notelement.innerHTML = `Nothing to show use add section above in thie add note`;
}


// function to delete note 

function deletenote(index) {
    let notes = localStorage.getItem("notes");
    if (notes === null) {
        // console.log(notelement);
        noteobj = [];
    } else {
        // console.log("Stroage have some Element");
        noteobj = JSON.parse(notes);
    }
    noteobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(noteobj));
    Shownotes();
    // console.log(noteobj);
}

let search = document.getElementById(`searchTxt`);
search.addEventListener("input", function () {
    let inputval = search.value.toLowerCase();
    let card = document.getElementsByClassName(`noteCard`);
    Array.from(card).forEach(function (element) {
        let cardText = element.getElementsByTagName("p")[0].innerText;
        if (cardText.includes(inputval)) {
            element.style.display = "block"
        }
        else element.style.display = "none"
    })

})











