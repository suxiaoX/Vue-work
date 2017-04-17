<template>
  <div class="nav-container">
    <div class="row">
      <div class="col" v-for="(toolbar, index) in toolbars">
        <div class="wrap">
          <div class="icon-wrap">
            <div class="icon" :class="'icon-' + (index + 1)"></div>
          </div>
          <p>{{toolbar.title}}</p>
          <a class="hold-all" :href="toolbar.link"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    replace: true,
    data() {
      return {
        toolbars: [],
      };
    },
    props: {
      country: {
        type: String,
        required: true,
        default: 'usa',
      },
    },
    mounted() {
      this.getToolBars();
    },
    methods: {
      getToolBars() {
        const toolbarsMap = {
          au: [
            { title: '硕士留学', link: '/m/au/master/' },
            { title: '本科留学', link: '/m/au/undergraduate/' },
            { title: '中学留学', link: '/m/au/midschool/' },
            { title: '预科留学', link: '/m/au/matriculation/' },
          ],
          usa: [
            { title: '硕士留学', link: '/m/au/master/' },
            { title: '本科留学', link: '/m/au/undergraduate/' },
            { title: '中学留学', link: '/m/au/midschool/' },
            { title: '条件评估', link: '/m/tool/evaluate/33/' },
          ],
        };
        this.toolbars = toolbarsMap[this.country];
      },
    },
  };

</script>

<style lang="less">
  .nav-container {
    background: white;
    .row {
      margin: 0 10px;
      .col {
        padding: 0;
        margin-bottom: 10px;
      }
      .col div.wrap {
        text-align: center;
        padding: 15px 0 0;
        margin: 4px;
        position: relative;
        > .icon-wrap {
          height: 41px;
          width: 100%;
        }
        .icon {
          height: 47px;
          width: 47px;
          margin: 0 auto;
        }
        .icon-1 {
          background: url(/static/images/usa-spirit.png) -1px 0 no-repeat;
          background-size: 435%;
        }
        .icon-2 {
          background: url(/static/images/usa-spirit.png) -49px 0 no-repeat;
          background-size: 435%;
        }
        .icon-3 {
          background: url(/static/images/usa-spirit.png) -96px 0 no-repeat;
          background-size: 435%;
        }
        .icon-4 {
          background: url(/static/images/usa-spirit.png) -144px 0 no-repeat;
          background-size: 435%;
        }
        > p {
          font-size: 14px;
          color: #333;
          margin: 10px 0;
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
  }
</style>
