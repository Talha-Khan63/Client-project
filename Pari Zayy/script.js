function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    const feedback = document.getElementById("feedback");

    if (name === "" || email === "" || subject === "" || message === "") {
        feedback.textContent = "Please fill in all fields.";
        feedback.style.color = "#d9534f";
        return false;
    }

    if (!validateEmail(email)) {
        feedback.textContent = "Please enter a valid email address.";
        feedback.style.color = "#d9534f";
        return false;
    }

    feedback.textContent = "Thank you! Your message has been sent.";
    feedback.style.color = "#28a745";
    document.getElementById("contactForm").reset();
    return false; // Prevent form submission for demo purposes
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
