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
        'big': '8px',
      },
      letterSpacing: {
        'text': '0.8px',
      },
      maxWidth: {
        'hero': '905px',
      },
      height: {
        'hero': '200px',
      },
      fontSize: {
        'hero': '80px',
      },
      lineHeight: {
        'hero': '100px',
      }
    },
  },
  plugins: [], // Місце для додавання плагінів Tailwind, якщо вони будуть потрібні
}
