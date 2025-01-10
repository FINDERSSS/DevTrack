const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.querySelector('input[placeholder="Email"]').value;

    emailjs.send("service_wxhhx7w", "template_ullcfsw", {
        to: email,
        user_name: "Test User",
        reset_link: "https://test.com"
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            alert("Email sent successfully!");
        },
        function(error) {
            console.log("FAILED", error);
            alert("Failed to send email: " + error.text);
        }
    );
});