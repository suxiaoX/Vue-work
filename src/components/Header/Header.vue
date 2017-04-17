<template>
  <div id="navtitle">
    <a v-if="title.showback && title.backLink" :href="title.backLink"><span class="be-back-icon"></span></a>
    <div class="page-title"><span v-if="title.icon" alt=""></span>{{title.title}}</div>
  </div>
</template>

<script>
  /* eslint no-script-url: 0 func-names: 0 */
  export default {
    replace: true,
    props: {
      /**
       * title: 导航显示的标题; icon: 导航配置的图标
       * showback: 是否显示后退按钮; backLink: 后退的链接，默认为history
       * tp: showback和backLink同时传入时才会显示后退按钮
       */
      title: {
        type: Object,
        default: function () {
          return {
            title: '',
            showback: false,
            backLink: 'javascript:history.back(-1)',
          };
        },
      },
    },
  };
</script>

<style lang="less">
  #navtitle {
    cursor: pointer;
    width: 100%;
    line-height: 42px;
    font-size: 18px;
    background: #2bb568;
    text-align: center;
    color: white;
    span {
      width: 26px;
      height: 26px;
      display: inline-block;
      vertical-align: middle;
      background: url(/static/images/usa-spirit.png) -2px -94px no-repeat;
      background-size: 1000%;
      margin-right: 5px;
      margin-bottom: 4px;
    }
    .be-back-icon {
      position: absolute;
      left: 15px;
      width: 20px;
      height: 20px;
      display: inline-block;
      vertical-align: middle;
      background: url(/static/images/usa-spirit.png) -1px -85px no-repeat;
      background-size: 920%;
      top: 10px;
      z-index: 9;
    }
  }
</style>
