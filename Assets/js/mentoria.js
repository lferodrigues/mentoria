document.addEventListener("DOMContentLoaded", () => {
    // Verificar a origem do usuário usando document.referrer
    const allowedReferrer = "https://feliperodrigues.net.br/login";

    // Mostrar tela de carregamento (opcional)
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
                <p style="margin-top: 15px; font-family: Arial, sans-serif;">Verificando acesso...</p>
            `;
            document.body.appendChild(loadingScreen);
        }
        loadingScreen.style.display = show ? "flex" : "none";
    }

    // Exibir tela de carregamento enquanto verifica
    showLoadingScreen(true);

    setTimeout(() => {
        // Verifica se o usuário veio da URL correta
        if (document.referrer !== allowedReferrer) {
            // Redireciona caso não tenha vindo do admin
            window.location.href = "https://feliperodrigues.net.br";
        } else {
            // Permite acesso ao cadastro
            showLoadingScreen(false);
        }
    }, 1000); // Adiciona pequeno atraso para efeito visual
});

// Verifica se o usuário está autenticado
if (localStorage.getItem('authenticated') !== 'true') {
    // Remove a autenticação inválida e redireciona
    localStorage.removeItem('authenticated');
    window.location.href = 'https://feliperodrigues.net.br';
}
