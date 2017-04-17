<template>
  <div class="reason">
    <div class="reason-title"><h3>成功案例</h3> <a href="/m/case/">更多<span></span></a></div>
    <ul>
      <li v-for="(item, $index) in cases" class="clearfix" style="position: relative;">
        <div class="bk-icon" :class="'bk-icon-' + Math.floor(Math.random()*2)">
          <span>{{item.name.substr(0,1)}}</span>
        </div>
        <div class="reason-content">
          <p class="title">{{item.chinese_name}} {{item.degree || item.project || ''}} {{item.offer_major ||
          ''}} </p>
          <p class="case-tag"><span>{{item.school_name}}</span>
            <span v-for="examItem in item.exam_type">{{examItem.exam_type + ' ' + examItem.score}}</span>
          </p>
          <p class="production">{{item.title}}</p>
        </div>
        <a :href="'/cases/detail/' + item.student_id"
           style="position: absolute;width: 100%;height:100%;z-index:99;top:0;left:0;"></a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
    replace: true,
    props: {
      caseType: {
        type: String,
        default: 'index',
      },
    },
    data() {
      return {
        cases: [],
        searchKey: {
          index: {
            offer_id__in: '9992,323,2937',
            page_size: 3,
          },
          master: {
            offer_id__in: '323,426,428',
            page_size: 3,
          },
          undergraduate: {
            offer_id__in: '2937,7209,7597',
            page_size: 3,
          },
          midschool: {
            offer_id__in: '1983,1984,2416',
            page_size: 3,
          },
          matriculation: {
            offer_id__in: '410,754,2336',
            page_size: 3,
          },
        },
      };
    },
    created() {
    },
    methods: {
      async getCase() {
        const dd = await this.$http.get('http://crpapi.shunshunliuxue.com:9000/offers/list/', this.searchKey[this.caseType]);
        this.cases = dd.body.results;
      },
    },
    mounted() {
      this.getCase();
    },
  };

</script>
<style lang="less">
  .reason {
    background: white;
    padding: 0 15px;
    color: #333;
    margin-bottom: 10px;
    div.reason-title {
      text-align: left;
      font-size: 16px;
      line-height: 30px;
      padding-top: 10px;
      h3 {
        padding-top: 5px;
        font-size: 16px;
        margin: 0;
        display: inline-block;
      }
      a {
        float: right;
        color: #7b838e;
        font-size: 15px;
        span {
          width: 15px;
          height: 15px;
          display: inline-block;
          vertical-align: middle;
          background: url(/static/images/usa-spirit.png) -51px -59px no-repeat;
          background-size: 1030%;
          margin-bottom: 2px;
        }
      }
    }
    ul {
      list-style: none;
    }
    ul > li {
      font-size: 15px;
      padding: 15px 0 10px;
      line-height: 23px;
      border-bottom: 1px solid #eeeeee;
      padding-bottom: 0;
      &:last-child {
        border-bottom: none;
      }
      > .bk-icon {
        display: inline-block;
        width: 65px;
        height: 65px;
        float: left;
        border-radius: 50%;
        background-color: #87daff;
        span {
          color: #fff;
          display: block;
          line-height: 65px;
          text-align: center;
          border-radius: 50%;
          font-size: 30px;
        }
      }
      > .bk-icon-0 {
        background-color: #87daff;
      }
      > .bk-icon-1 {
        background-color: #ccaaff;
      }
      > .bk-icon-2 {
        background-color: #aac8ff;
      }
      > .reason-content {
        padding-left: 80px;
        p.case-tag {
          margin: 0;
          padding-bottom: 2px;
        }
        p:first-child {
          font-size: 16px;
          color: #000;
          margin: 0;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        p:nth-child(2) {
          color: #484848;
          padding-bottom: 2px;
          > span {
            border: 1px solid #02a3ff;
            color: #02a3ff;
            font-size: 10px;
            padding: 0 5px;
            margin-right: 5px;
            border-radius: 4px;
            display: inline-block;
            line-height: 18px;
          }
        }
        p:last-child {
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #7b838e;
          font-size: 13px;
          overflow: hidden;
        }
      }
    }
  }
</style>
