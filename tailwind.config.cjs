const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        'sans': ['overpass', 'system-ui'],
      },
      colors: {
        orange: '#FF3E00',
        'light-orange': '#FFB299',
        grayish: '#676778',
        'dark-grayish': '#484854'
      }
    }
  },

  plugins: []
}

module.exports = config
