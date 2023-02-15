//variables
const noteList = document.getElementById("noteList");
const userForm = document.getElementById("userSubmit");
const userInput = document.getElementById("userInput");
const form = document.getElementById("form");
const title = document.getElementById("title");
const heartsDiv = document.getElementById("hearts");
let i = 0;
let blondieMode = false;
const audio = document.getElementById("audio")
const loveYou = ["I", "love", "you",];

form.addEventListener("submit", onSubmit)



function onSubmit(event) {

    if (userInput.value == "") {

        event.preventDefault();
        return;

    }


    if (userInput.value == "blondie chou") {

if (blondieMode == false) {
        document.body.style.backgroundColor = "#ed4ac4";
        title.innerHTML = "I <3 My GF, currently playing: Foreigner - 'I Want To Know What Love Is' ";
        const newHearts = document.createElement("p");
        const nodeHearts = document.createTextNode("❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤");
        newHearts.setAttribute("id", "heartsNode");
        newHearts.appendChild(nodeHearts);
        heartsDiv.appendChild(newHearts);
       audio.play();
    
for (x=0; x < loveYou.length; x++) {

    let blondieNote = document.createElement('li');
    let blondieText = document.createTextNode(loveYou[x]);
    blondieNote.appendChild(blondieText);
    noteList.appendChild(blondieNote);
    blondieNote.setAttribute("id", "node" + i);
    blondieNote.setAttribute("class", "nodes");
    blondieNote.addEventListener("click", onClick,)
}

         blondieMode = true;
}
    


    }



    i++


    event.preventDefault();

    const addedNote = document.createElement('li');
    addedNote.setAttribute("id", "node" + i);
    addedNote.setAttribute("class", "nodes");
    const nodeText = document.createTextNode(userInput.value);

    addedNote.appendChild(nodeText);
    noteList.appendChild(addedNote);
    userInput.value = "";



    addedNote.addEventListener("click", onClick,)
    return addedNote;


}



function onClick() {
    this.remove();




}





