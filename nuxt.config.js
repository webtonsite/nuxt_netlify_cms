
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/assets/lib/bootstrap/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: '/assets/lib/font-awesome/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: '/assets/lib/animate/animate.min.css' },
      { rel: 'stylesheet', href: '/assets/lib/ionicons/css/ionicons.min.css' },
      { rel: 'stylesheet', href: '/assets/lib/lightbox/css/lightbox.min.css' }
    ],
    script: [
      {
        src: "/assets/lib/jquery/jquery.min.js",
        type: "text/javascript",
        body: true
      },
      {src: '/assets/lib/jquery/jquery-migrate.min.js', body: true},
      {src: '/assets/lib/popper/popper.min.js', body: true}, 
      {src: '/assets/lib/bootstrap/js/bootstrap.min.js', body: true},
      {src: '/assets/lib/easing/easing.min.js', body: true},
      {src: '/assets/lib/counterup/jquery.waypoints.min.js', body: true},
      {src: '/assets/lib/counterup/jquery.counterup.js', body: true},
      //{src: '/lib/owlcarousel/owl.carousel.min.js', body: true},
      {src: '/assets/lib/lightbox/js/lightbox.min.js', body: true},
      {src: '/assets/lib/typed/typed.min.js', body: true},
      {src: '/assets/contactform/contactform.js', body: true},
      {src: '/assets/js/main.js', body: true},
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/static/assets/css/style.css',
    '~/static/assets/css/style-mn.css'
    //'~/css/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    //{ src: '~/static/assets/lib/jquery/jquery.min.js' }
    //{ src: '~/plugins/izitoast.js', ssr: false },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
