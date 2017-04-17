<template>
  <div class="footer">
    <div class="bottom-holder"></div>
    <div class="bottomBar row" style="margin: 0!important;">
      <div class="b-term col-xs-3">
        <a :href="getLink(country)">
          <div :class="country"></div>
          <p style="color: #2bb568;">{{country | backTitle}}</p>
        </a>
      </div>
      <div class="b-term col-xs-3">
        <a :href="'/m/tool/xxdw/' + xsdwAppFrom + '/'">
          <div class="gps">
            <div class="circle-tips"></div>
          </div>
          <p>选校定位</p>
        </a>
      </div>
      <div class="b-term col-xs-3">
        <div class="consulting J_call_window" :data-target="xsdwAppFrom">
          <div class="chat"></div>
          <p>在线咨询</p>
        </div>
      </div>
      <div class="b-term col-xs-3">
        <a href="tel:4001046661">
          <div class="tel"></div>
          <p>电话咨询</p>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    replace: true,
    filters: {
      backTitle: value => {
        const countryMap = { au: '澳洲', usa: '美国' };
        return `${countryMap[value]}留学`;
      },
    },
    props: {
      xsdwAppFrom: {  //  获取选校定位渠道详情deid
        type: Number,
        required: true,
        default: 1,
      },
      country: String,    //  'au|usa'
    },
    methods: {
      getLink: value => {
        return `/m/${value}/`;
      },
    },
  };

</script>
<style lang="less">
  .footer {
    .bottom-holder {
      height: 49px;
    }
    .bottomBar {
      position: fixed;
      bottom: 0;
      width: 100%;
      max-width: 750px;
      color: #7b838e;
      z-index: 999;
      margin: 0 !important;
      background: #f8f8f8;
      border-top: 1px solid #d8dbde;
      .b-term {
        height: 54px;
        padding-top: 7px;
        display: inline-block;
        text-align: center;
        position: relative;
        a {
          color: #7b838e;
          text-decoration: none;
          display: inline-block;
          width: 100%;
        }
        p {
          font-size: 12px;
        }
        .au {
          margin: 0 auto;
          width: 33px;
          height: 26px;
          background: url(/static/images/usa-spirit.png) -175px -48px no-repeat;
          background-size: 210px;
          position: relative;
          bottom: 3px;
        }
        .usa {
          margin: 0 auto;
          width: 26px;
          height: 26px;
          background: url(/static/images/usa-spirit.png) 0 -41px no-repeat;
          background-size: 180px;
          position: relative;
          bottom: 3px;
        }
        .chat {
          margin: 0 auto;
          width: 26px;
          height: 26px;
          background: url(/static/images/usa-spirit.png) -57px -51px no-repeat;
          background-size: 219px;
          position: relative;
          bottom: 3px;
        }
        .gps {
          margin: 0 auto;
          width: 26px;
          height: 26px;
          background: url(/static/images/usa-spirit.png) -33px -50px no-repeat;
          background-size: 220px;
          position: relative;
          bottom: 3px;
          div.circle-tips {
            position: absolute;
            width: 9px;
            height: 9px;
            border-radius: 50%;
            background: red;
            top: 0;
            right: -2px;
          }
        }
        .tel {
          margin: 0 auto;
          width: 26px;
          height: 26px;
          background: url(/static/images/usa-spirit.png) -83px -51px no-repeat;
          background-size: 219px;
          position: relative;
          bottom: 3px;
        }
      }
      .b-term:last-child {
        border: none;
      }
      .middle-line {
        width: 1px;
        height: 18px;
        display: inline-block;
        background-color: #7b838e;
      }
    }
  }
</style>
