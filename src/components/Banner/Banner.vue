<template>
  <div id='banner'>
    <div class="swiper-container banner-contanier" ref="banner">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="banner in banners">
          <a :href="banner.link"><img :src="banner.image" alt=""/></a>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper/dist/js/swiper';
  import 'swiper/dist/css/swiper.css';

  export default {
    replace: true,
    data() {
      return {
        banners: [],
      };
    },
    props: {
      country: String,
      project: String,
    },
    mounted() {
      this.getBanners();
    },
    methods: {
      getBanners() {
        this.banners = [
          { image: '/static/images/au/au-master-1.png', link: 1 },
          { image: '/static/images/au/banner-1.png', link: 2 },
          { image: '/static/images/au/au-master-2.png', link: 3 },
        ];
      },
    },
    updated() {
      new Swiper(this.$refs.banner, {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        autoplay: 2000,
        loop: true,
      });
    },
  };

</script>
<style lang="less">
  #banner {
    .swiper-container {
      padding: 0 !important;
      .swiper-pagination {
        text-align: right;
        padding-right: 20px;
        color: white;
        font-size: 17px;
      }
      .swiper-slide {
        width: 100% !important;
        height: auto !important;
        border: none !important;
      }
    }
    img {
      width: 100%;
    }
  }
</style>
