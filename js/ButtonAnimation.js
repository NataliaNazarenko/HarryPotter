const menuItem = document.getElementById("menu-item");
const button = menuItem.querySelector("a");

button.addEventListener("click", function(event) {
    // Додаємо клас анімації для зникнення
    button.classList.add("animate__zoomOut");

    // Чекаємо завершення анімації та змінюємо видимість кнопки
    button.addEventListener("animationend", function() {
        button.style.display = "none";

        // Переходимо на іншу сторінку після завершення анімації
        window.location.href = button.href;
    });

    // Зупиняємо типову дію переходу посиланням
    event.preventDefault();
});

document.addEventListener("DOMContentLoaded", function() {
    const menuItem = document.getElementById("menu-item");
    const button = menuItem.querySelector("a");

    // Перевіряємо, чи поточна URL адреса - це сторінка "worldHP.html"
    if (window.location.pathname === "/worldHP.html") {
        // Якщо так, показуємо кнопку
        button.style.display = "block";
    } else {
        // Інакше, ховаємо кнопку
        button.style.display = "none";
    }
});