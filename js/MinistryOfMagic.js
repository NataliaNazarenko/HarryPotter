document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("fireworksButton");

    button.addEventListener("click", function () {
        const numberOfElements = 40; // Кількість інтерактивних елементів
        const container = document.createElement("div"); // Створення контейнера для інтерактивних елементів
        container.classList.add("fireworks-container");

        for (let i = 0; i < numberOfElements; i++) {
            const element = document.createElement("i"); // Створення інтерактивного елемента
            container.appendChild(element);
        }

        document.body.appendChild(container); // Додавання контейнера з інтерактивними елементами в body

        // Затримка в 5 секунд перед видаленням контейнера з анімацією
        setTimeout(function () {
            container.classList.add("fadeOut"); // Додати клас для запуску CSS-анімації
            setTimeout(function () {
                container.remove(); // Видалення контейнера після закінчення анімації
            }, 1000); // Зачекайте 1 секунду (1000 мс) перед видаленням контейнера
        }, 5000);
    });
});