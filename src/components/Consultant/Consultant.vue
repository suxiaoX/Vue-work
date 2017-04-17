<template>
  <div class="consultant">
    <div class="consultant-title">
      <h3>顺顺名师</h3>
      <a :href="'/m/' + country + '/consultant/'">更多<span></span></a>
    </div>
    <div class="img-ani">
      <div class="swiper-container consultant-container" ref="consultant">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="consu in consultants">
            <img class="lazy" :src="consu.avatar_file" alt=""/>
            <p>{{consu.full_name}}</p>
            <a class="hold-all" :href="'/m/' + country + '/consultant/' + consu.advisor_id + '/'"></a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper/dist/js/swiper';

  export default{
    replace: true,
    props: {
      country: String,
    },
    data() {
      return {
        consultants: [],
      };
    },
    mounted() {
      this.getConsultants();
    },
    methods: {
      getConsultants() {
        this.consultants = [
          { full_name: '饶勤', avatar_file: 'https://o7q69z2mk.qnssl.com/avatar/000/00/20/50_avatar_max.jpg', advisor_id: 2050 },
          { full_name: '白杨', avatar_file: 'https://o7q69z2mk.qnssl.com/avatar/000/00/44/60_avatar_max.jpg', advisor_id: 4460 },
          { full_name: '夏甜甜', avatar_file: 'https://o7q69z2mk.qnssl.com/avatar/000/00/45/05_avatar_max.jpg', advisor_id: '' },
          { full_name: '郑玲', avatar_file: 'https://o7q69z2mk.qnssl.com/avatar/000/00/26/25_avatar_max.jpg', advisor_id: '' },
          { full_name: '张国思', avatar_file: 'https://o7q69z2mk.qnssl.com/avatar/000/00/24/44_avatar_max.jpg', advisor_id: '' },
          { full_name: '张美荣', avatar_file: 'https://o7q69z2mk.qnssl.com/avatar/000/01/83/01_avatar_max.jpg', advisor_id: '' },
          { full_name: '陈琴', avatar_file: 'https://o7q69z2mk.qnssl.com/avatar/000/00/90/19_avatar_max.jpg', advisor_id: '' },
          { full_name: '周小珂', avatar_file: 'https://o7q69z2mk.qnssl.com/avatar/000/00/38/33_avatar_max.jpg', advisor_id: '' },
        ];
      },
    },
    updated() {
      new Swiper(this.$refs.consultant, {
        slidesPerView: 3.5,
        spaceBetween: 10,
        freeMode: true,
      });
    },
  };

</script>
<style lang="less">
  .consultant {
    background: white;
    padding: 0 15px;
    margin-bottom: 10px;
    position: relative;
    padding-bottom: 5px;
    .consultant-title {
      text-align: left;
      font-size: 16px;
      line-height: 30px;
      padding-top: 10px;
      padding-bottom: 5px;
    }
    h3 {
      margin-bottom: 15px;
      padding-top: 5px;
      font-size: 16px;
      display: inline-block;
    }
    a {
      float: right;
      color: #7b838e;
      font-size: 15px;
    }
    .swiper-slide {
      position: relative;
      img {
        width: 100%;
        border: 1px solid #e1e1e1;
        border-radius: 50%;
      }
      p {
        text-align: center;
        font-size: 14px;
      }
      .hold-all {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
</style>
