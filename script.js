// Script para modo oscuro
document.getElementById("dark-mode-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    const modeButton = document.getElementById("dark-mode-toggle");
    // Cambiar el texto del botón según el modo
    if (document.body.classList.contains("dark-mode")) {
        modeButton.textContent = "Modo Claro";
    } else {
        modeButton.textContent = "Modo Oscuro";
    }
});
