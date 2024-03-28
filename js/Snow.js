document.getElementById("snowButton").addEventListener("click", function() {
    const numberOfSnowflakes = 100; // Кількість сніжинок
    const snowContainer = document.createElement("div");
    snowContainer.classList.add("snow-container");

    // Додавання сніжинок до контейнера
    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake"); // Додавання класу для сніжинки
        snowContainer.appendChild(snowflake);
    }

    document.body.appendChild(snowContainer); // Додавання контейнера до body

    // Плавне зупинення снігу через 5 секунд
    setTimeout(function() {
        snowContainer.style.animation = "fadeOut 1s forwards"; // Застосування анімації зникнення
        setTimeout(function() {
            snowContainer.remove(); // Видалення контейнера після 1 секунди
        }, 1000); // Зачекати 1 секунду перед видаленням контейнера
    }, 5000);

    snowContainer.classList.add("snow"); // Додавання стилів снігу до контейнера
});