document.addEventListener("DOMContentLoaded", () => {
    const registerBtn = document.getElementById("register-btn");
    const backToLoginBtn = document.getElementById("back-to-login-btn");

    // Função para aplicar máscara ao CPF
    function maskCPF(cpf) {
        return cpf
            .replace(/\D/g, "")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    }

    // Função para aplicar máscara ao Telefone
    function maskPhone(phone) {
        return phone
            .replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{5})(\d{4})$/, "$1-$2");
    }

    // Adiciona as máscaras nos campos
    const cpfField = document.getElementById("cpf");
    const phoneField = document.getElementById("phone");

    cpfField.addEventListener("input", (e) => {
        e.target.value = maskCPF(e.target.value);
    });

    phoneField.addEventListener("input", (e) => {
        e.target.value = maskPhone(e.target.value);
    });

    // Mostrar tela de carregamento
    function showLoadingScreen(show) {
        let loadingScreen = document.getElementById("loading-screen");
        if (!loadingScreen) {
            loadingScreen = document.createElement("div");
            loadingScreen.id = "loading-screen";
            loadingScreen.style = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(30, 30, 30, 0.9);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                color: #fff;
                z-index: 1000;
            `;
            loadingScreen.innerHTML = `
                <div style="border: 6px solid rgba(255, 255, 255, 0.2); border-top: 6px solid #00c0ff; border-radius: 50%; width: 50px; height: 50px; animation: spin 1s linear infinite;"></div>
                <p style="margin-top: 15px; font-family: Arial, sans-serif;">Carregando...</p>
            `;
            document.body.appendChild(loadingScreen);
        }
        loadingScreen.style.display = show ? "flex" : "none";
    }

    // Registro de conta
    registerBtn.addEventListener("click", () => {
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirm-password").value.trim();

        if (!email || !password) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        if (password !== confirmPassword) {
            alert("As senhas não coincidem. Tente novamente.");
            return;
        }

        // Exibir tela de carregamento
        showLoadingScreen(true);

        // Cadastro no Firebase Auth
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                showLoadingScreen(false);
                alert("Usuário cadastrado com sucesso!");
            })
            .catch((error) => {
                showLoadingScreen(false);
                alert(`Erro! Usuário não cadastrado: ${error.message}`);
            });
    });

    // Redirecionar para login
    backToLoginBtn.addEventListener("click", () => {
        window.location.href = "https://feliperodrigues.net.br/login";
    });

    // Spin animation
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(styleSheet);
});
