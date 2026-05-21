document.getElementById("login-btn").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Criação da tela de loading
    const loadingScreen = document.createElement("div");
    loadingScreen.id = "loading-screen";
    loadingScreen.style.position = "fixed";
    loadingScreen.style.top = "0";
    loadingScreen.style.left = "0";
    loadingScreen.style.width = "100%";
    loadingScreen.style.height = "100%";
    loadingScreen.style.backgroundColor = "rgba(30, 30, 30, 0.9)";
    loadingScreen.style.display = "flex";
    loadingScreen.style.flexDirection = "column";
    loadingScreen.style.justifyContent = "center";
    loadingScreen.style.alignItems = "center";
    loadingScreen.style.color = "#fff";
    loadingScreen.style.zIndex = "1000";

    const spinner = document.createElement("div");
    spinner.style.border = "6px solid rgba(255, 255, 255, 0.2)";
    spinner.style.borderTop = "6px solid #00c0ff";
    spinner.style.borderRadius = "50%";
    spinner.style.width = "50px";
    spinner.style.height = "50px";
    spinner.style.animation = "spin 1s linear infinite";

    const message = document.createElement("p");
    message.textContent = "Carregando...";
    message.style.marginTop = "15px";
    message.style.fontFamily = "Arial, sans-serif";

    loadingScreen.appendChild(spinner);
    loadingScreen.appendChild(message);
    document.body.appendChild(loadingScreen);

    // Adiciona animação de spin ao spinner
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(styleSheet);

    // Lógica original de autenticação e carregamento
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log("Login realizado com sucesso:", userCredential.user);

            // Redireciona para a página de mentoria
            window.location.href = "https://feliperodrigues.net.br/mentoria";

            // Remove a tela de loading após o redirecionamento
            document.body.removeChild(loadingScreen);
        })
        .catch((error) => {
            console.error("Erro ao fazer login:", error);

            // Exibe uma mensagem de erro com alert
            alert("Erro ao fazer login: E-mail e/ou senha incorretos. Por favor, tente novamente.");

            // Remove a tela de loading em caso de erro
            document.body.removeChild(loadingScreen);
        });
});
