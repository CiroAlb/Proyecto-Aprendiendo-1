/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: [
    './src/App.js',
    './src/App.css',
    './componentes/PostContainer.js',
    './componentes/PostComponent.js',
    './componentes/FollowersButton.js',
    './componentes/FollowButton.js'
  ],
}

