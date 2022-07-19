function getValue(){
    let message = document.getElementById("message").value;
    let revMessage = reverse(message);
    displayReversed(revMessage);
}

// bussness logic
function reverse(message){
    let messageArr = "";
    for(let i=message.length-1;i>=0;i--){
        messageArr+=message[i];
    }
    return messageArr;
}

// display the reversed string
function displayReversed(revMessage){
    let results = document.getElementById("results");
    results.classList.add("revMessage");
    results.innerHTML=revMessage;
}