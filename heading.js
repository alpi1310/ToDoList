// SELECTORS
let headingInput = document.querySelector(".heading-input");
let divHed = document.querySelector(".heading-in")
let headbtn = document.querySelector(".heading-button")
let headName = document.querySelector(".h1");
let tempDiv = document.querySelector(".tep");
let todoInsert = document.querySelector("#for");


// EVENTS
headbtn.addEventListener("click", deletePast);
headingInput.addEventListener("click", deeletealert);
document.addEventListener("DOMContentLoaded", displayNone);


// Function

function deletePast(e) {
    e.preventDefault();
    if (headingInput.value === null || headingInput.value === "") {
        createAlertforName();
    } else {
        rmForHeadIn();
    }
}



function createAlertforName(e) {


    // .......................................<h5>tag cration
    const hfive = document.createElement("h5");
    // ......................................class cration for h5
    hfive.classList.add("hfive");
    // ..................................text creation for h5
    const txtofalert = document.createTextNode(
        "You Did NOt Type Your Name!!!"
    );
    hfive.appendChild(txtofalert); //append text in the <h5>tag
    tempDiv.appendChild(hfive); // append <h5>tag in the div which contains class of (.mesg)

}


function deeletealert(e) {
    for (let x = 0; x < tempDiv.children.length;) {
        if (tempDiv.children[x].classList.contains("hfive")) {
            for (let i = 0; i < tempDiv.children.length; i++) {
                tempDiv.children[i].remove();

            }
        }

    }

}


function rmForHeadIn(e) {
    const inputValue = headingInput.value;
    headName.innerText = inputValue + "'s To Do List";
    divHed.remove();
    todoInsert.removeAttribute("style");
}

function displayNone(e) {
    if (divHed.classList[0] === "heading-in") {
        divHed.nextElementSibling.style.display = "none";
    }
}