// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Index - QuickStart Bootstrap Template",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "" },
        { name: "keywords", content: "" },
      ],
      link: [
        { rel: "icon", href: "/img/favicon.png" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&family=Roboto:wght@500;700;900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css",
        },
        { rel: "stylesheet", href: "/lib/animate/animate.min.css" },
        {
          rel: "stylesheet",
          href: "/lib/owlcarousel/assets/owl.carousel.min.css",
        },
        {
          rel: "stylesheet",
          href: "/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css",
        },
        { rel: "stylesheet", href: "/css/bootstrap.min.css" },
        { rel: "stylesheet", href: "/css/style.css" },
      ],
      script: [{ src: "/vendor/bootstrap/js/bootstrap.bundle.min.js" }],
    },
  },
});
