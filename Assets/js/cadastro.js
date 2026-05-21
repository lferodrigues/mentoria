// Referências aos elementos
const registerBtn = document.getElementById('register-btn');
const backToLoginBtn = document.getElementById('back-to-login-btn');
const errorMessage = document.getElementById('error-message');

// Registro
registerBtn.addEventListener('click', () => {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;
    const birthdate = document.getElementById('birthdate').value;
    const cpf = document.getElementById('cpf').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            user.updateProfile({
                displayName: `${firstName} ${lastName}`,
            }).then(() => {
                alert('Usuário cadastrado com sucesso!');
                window.location.href = 'index.html';
            });
        })
        .catch((error) => {
            errorMessage.style.display = 'block';
            errorMessage.textContent = error.message;
        });
});

// Voltar para Login
backToLoginBtn.addEventListener('click', () => {
    window.location.href = 'index.html';
});
