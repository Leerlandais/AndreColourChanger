const textInp = document.querySelector("#textInput");
const bodyInp = document.querySelector("#bodyInput");
const body = document.querySelector("#colourBody");
const para = document.querySelector("#colourP");
const myHeader = document.querySelector("#myHeader");
const otherHeader = document.querySelectorAll(".scrollThis");
const myText = document.getElementById("myText");
const messLen = document.getElementById("messLen");
const maxLen = document.getElementById("maxLen")
const saveCount = document.querySelector("#saveCount");
const saveColours = document.querySelector("#saveColours");
const cycleColours = document.getElementById("cycleColours");

saveColours.addEventListener("click", saveThisColour);
cycleColours.addEventListener("click", cycleTheColours);

maxLen.textContent = myText.getAttribute("maxlength");
textInp.addEventListener("change", changeTextColour);
bodyInp.addEventListener("change", changeBodyColour);

let origColBody = localStorage.getItem("bodyCol");
bodyInp.style.value = origColBody;
body.style.backgroundColor =  origColBody;

let origColText = localStorage.getItem("textCol");
textInp.style.value = origColText;
para.style.color =  origColText;

let savesUsed = 0;
let currentCycle = 1;
sessionStorage.setItem("SavesUsed", savesUsed)

for (let i = 0; i <= otherHeader.length; i++) {
    otherHeader[i].addEventListener('click', scrollToHeader);
}

function changeTextColour() {
    let newColText = textInp.value;
    console.log (newColText);
    para.style.color = newColText;
    localStorage.setItem("textCol", newColText);
}

function changeBodyColour() {
    let newColBody = bodyInp.value;
    console.log (newColBody);
    body.style.backgroundColor = newColBody;
    localStorage.setItem("bodyCol", newColBody);
}

function updateTextSize() {
    messLen.textContent = myText.value.length;
}

function undoChanges() {
    body.style.backgroundColor =  origColBody;
    para.style.color =  origColText;
}

function scrollToHeader() {
    
    this.scrollIntoView({top: 0, behavior: "smooth"});    
}

function saveThisColour() {
    if (savesUsed > 7) {
        alert("No saves left for this session, sorry");
    }else {
        savesUsed++;
        saveCount.textContent = savesUsed;
        let newColBody = bodyInp.value;
        let newColText = textInp.value;
        sessionStorage.setItem("SavesUsed", savesUsed);
        sessionStorage.setItem("SaveFileBody"+savesUsed, newColBody);
        sessionStorage.setItem("SaveFileText"+savesUsed, newColText);
    }
}

function cycleTheColours() {
    if (currentCycle > 8) {
        currentCycle = 1;
    }
       let thisCycleBoby = sessionStorage.getItem("SaveFileBody"+currentCycle);
        let thisCycleText = sessionStorage.getItem("SaveFileText"+currentCycle);

        para.style.color = thisCycleText;
        body.style.backgroundColor = thisCycleBoby;
        currentCycle++;

}

