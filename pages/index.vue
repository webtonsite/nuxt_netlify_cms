<template>
  <div>
    <div v-for="item in $store.state.blogPosts">
      {{ item.title }}
    </div>
    <div v-for="item in $store.state.profile">
      {{ item.slug }}
    </div>

    <client-only>
      <home-section></home-section>
      <about-section></about-section>
      <service-section></service-section>
      <counter-section></counter-section>
      <portfolio-section></portfolio-section>
      <contact-footer-section></contact-footer-section>
    </client-only>

    <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
    <div id="preloader"></div>

  </div>
</template>

<script>
import HomeSection from '~/components/HomeSection.vue'
import AboutSection from '~/components/AboutSection.vue'
import ServiceSection from '~/components/ServiceSection.vue'
import CounterSection from '~/components/CounterSection.vue'
import PortfolioSection from '~/components/PortfolioSection.vue'
import ContactFooterSection from '~/components/ContactFooterSection.vue'

export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },  
  components: {
    HomeSection,
    AboutSection,
    ServiceSection,
    CounterSection,
    PortfolioSection,
    ContactFooterSection
  }
}
</script>

