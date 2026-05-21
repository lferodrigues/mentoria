// Seleciona os elementos do DOM
const loginButton = document.getElementById('login-btn');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

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

// Adiciona evento de clique ao botão de login
loginButton.addEventListener('click', () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    // Exibe a tela de carregamento
    showLoadingScreen(true);

    // Simula um pequeno atraso para demonstrar a tela de carregamento
    setTimeout(() => {
        // Verifica se as credenciais correspondem às esperadas
        if (email === 'contato@feliperodrigues.net' && password === 'Fe67541@') {
            // Redireciona para o link especificado
            window.location.href = 'https://feliperodrigues.net.br/administrador/register/cadastro';
        } else {
            // Esconde a tela de carregamento e exibe um alerta de acesso negado
            showLoadingScreen(false);
            alert('Acesso Negado');
        }
    }, 1000); // 1 segundo de atraso para simular processamento
});
