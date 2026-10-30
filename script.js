
// ======================================
// 1. EMAIL VALIDATION FUNCTION
// ======================================

function isValidEmail(email) {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);

}


// ======================================
// 2. REGISTRATION FORM VALIDATION
// ======================================

const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const fullName = document.getElementById("fullName").value.trim();

        const email = document.getElementById("signupEmail").value.trim();

        const password = document.getElementById("signupPassword").value;

        const confirmPassword = document.getElementById("confirmPassword").value;

        const userType = document.getElementById("userType").value;

        const message = document.getElementById("signupMessage");


        if (fullName.length < 3) {

            message.textContent = "Name must contain at least 3 characters.";
            message.style.color = "red";
            return;

        }

        if (!isValidEmail(email)) {

            message.textContent = "Please enter a valid email address.";
            message.style.color = "red";
            return;

        }

        if (password.length < 8) {

            message.textContent = "Password must contain at least 8 characters.";
            message.style.color = "red";
            return;

        }

        if (password !== confirmPassword) {

            message.textContent = "Passwords do not match.";
            message.style.color = "red";
            return;

        }

        if (userType === "") {

            message.textContent = "Please select your account type.";
            message.style.color = "red";
            return;

        }


        alert("Registration successful! Please sign in.");

        window.location.href = "login.html";

    });

}


// ======================================
// 3. LOGIN FORM VALIDATION
// ======================================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();

        const password = document.getElementById("loginPassword").value;

        const message = document.getElementById("loginMessage");


        if (!isValidEmail(email)) {

            message.textContent = "Please enter a valid email address.";
            message.style.color = "red";
            return;

        }

        if (password.length < 8) {

            message.textContent = "Password must contain at least 8 characters.";
            message.style.color = "red";
            return;

        }


        alert("Login successful! Welcome to FreelanceSafe Lite.");

        window.location.href = "index.html";

    });

}


// ======================================
// 4. CONTACT FORM VALIDATION
// ======================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("contactName").value.trim();

        const email = document.getElementById("contactEmail").value.trim();

        const subject = document.getElementById("contactSubject").value.trim();

        const messageText = document.getElementById("contactMessage").value.trim();

        const feedback = document.getElementById("contactFeedback");


        if (name.length < 3) {

            feedback.textContent = "Name must contain at least 3 characters.";
            feedback.style.color = "red";
            return;

        }

        if (!isValidEmail(email)) {

            feedback.textContent = "Please enter a valid email address.";
            feedback.style.color = "red";
            return;

        }

        if (subject.length < 3) {

            feedback.textContent = "Subject must contain at least 3 characters.";
            feedback.style.color = "red";
            return;

        }

        if (messageText.length < 10) {

            feedback.textContent = "Message must contain at least 10 characters.";
            feedback.style.color = "red";
            return;

        }


        feedback.textContent = "Your message passed validation successfully!";
        feedback.style.color = "green";

        contactForm.reset();

    });

}
