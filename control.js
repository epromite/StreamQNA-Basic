function sendQuestion() {
    const sender = document.getElementById("nameInput").value;
    const question = document.getElementById("questionInput").value;
    
    localStorage.setItem("currentQuestion", question);
    localStorage.setItem("currentSender", sender);
}
