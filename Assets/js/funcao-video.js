document.addEventListener("DOMContentLoaded", function () {
    // Remove a classe 'selected' de todos os itens
    function clearSelected() {
        const videoItems = document.querySelectorAll(".video-list li");
        videoItems.forEach(item => {
            item.classList.remove("selected");
        });
    }

    // Muda o vídeo no player e atualiza a seleção
    function changeVideo(videoUrl, element) {
        const player = document.querySelector(".player iframe");
        player.src = videoUrl;

        clearSelected();
        element.classList.add("selected");
    }

    // Adiciona o evento click aos itens
    const videoItems = document.querySelectorAll(".video-list li");
    videoItems.forEach(item => {
        item.addEventListener("click", function () {
            const videoUrl = this.dataset.video; // Obtém a URL do atributo data-video
            changeVideo(videoUrl, this);
        });
    });

    // Seleciona o primeiro vídeo ao carregar
    const firstVideo = document.querySelector(".video-list li");
    if (firstVideo) {
        firstVideo.classList.add("selected");
        const player = document.querySelector(".player iframe");
        player.src = firstVideo.dataset.video; // Garante que o player exiba o primeiro vídeo.
    }
});

// Atualiza o ano no rodapé
document.getElementById('currentYear').textContent = new Date().getFullYear();
