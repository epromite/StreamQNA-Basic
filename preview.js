function updateQuestion() {
    const question = localStorage.getItem("currentQuestion") || "Menunggu pertanyaan...";
    const sender = localStorage.getItem("currentSender") || "";

    document.getElementById("question").textContent = question;
    document.getElementById("sender").textContent = sender ? `- ${sender} -` : "";
}

// Jalankan langsung saat halaman dimuat
updateQuestion();

// Perbarui setiap detik
setInterval(updateQuestion, 1000);
