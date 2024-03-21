/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"], // Вказує шляхи до файлів, в яких Tailwind буде шукати класи для генерації стилів
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
      },
      spacing: {
        0.8: '0.005rem',
      }
    },
  },
  plugins: [], // Місце для додавання плагінів Tailwind, якщо вони будуть потрібні
}
