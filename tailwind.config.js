/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"], // Вказує шляхи до файлів, в яких Tailwind буде шукати класи для генерації стилів
  theme: {
    extend: { // Розширює базову тему Tailwind
      fontFamily: {
        custom: ['Bluu Next Cyrillic', 'sans-serif'], // Додає нову назву шрифту "custom", яку можна використовувати в класах Tailwind
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'yellow': '#FABF59',
        'background': '#F9B50C',
      },
      padding: {
        'big': '20px',
      },
      spacing: {
        0.8: '0.005rem',
      },
      backgroundImage: {
        'hero': "url('./images/hogwarts.jpg')",
      },
      backgroundSize: {
        'cover': 'cover',
      },
      backgroundPosition: {
        'center': 'center',
      },
      backgroundRepeat: {
        'no-repeat': 'no-repeat',
      },
      linearGradientDirections: {
        // Додаткові напрямки градієнтів, які можна використовувати
        '179': '179deg',
      },
    },
  },
  plugins: [], // Місце для додавання плагінів Tailwind, якщо вони будуть потрібні
}
