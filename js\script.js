<link rel="stylesheet" href="css/style.css">
<script src="js/script.js"></script>
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Zabraň přesměrování po odeslání formuláře
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log(`Email: ${email}, Heslo: ${password}`);

    // Zde můžeš přidat kód pro odeslání dat na backend
});
