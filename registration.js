function valid() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("psw").value;
    var confirmPassword = document.getElementById("psw2").value;

    // Basic validation
    if (email === "" || password === "" || confirmPassword === "") {
        alert("All fields are required");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

    // If validation passes, redirect to login page
    window.location.href = "login.html";
    return false; // Prevent form submission
}

// Remove or comment out the disp() function if it's not needed anymore
// function disp() { ... }
