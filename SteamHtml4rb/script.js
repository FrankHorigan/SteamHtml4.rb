document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const accountName = document.getElementById('account-name').value;
    const password = document.getElementById('password').value;

    
    alert(`Account: ${accountName}, Password: ${password}`);
});
document.getElementById("account-form").addEventListener("submit", function(event) {
    const email = document.getElementById("email").value;
    const confirmEmail = document.getElementById("confirm-email").value;

    if (email !== confirmEmail) {
        event.preventDefault();
        alert("Email addresses do not match. Please check and try again.");
    }
});
