<template>
  <div class="question">
    <h3>留学热门问题</h3>
    <ul>
      <li v-for="item in questions"><a :href="'/article/' + item.id + '/'">{{item.title}}</a></li>
    </ul>
  </div>
</template>
<script>
  export default{
    replace: true,
    props: {
      country: String,
      project: String,
    },
    data() {
      return {
        questions: [],
      };
    },
    mounted() {
      this.getQuestion();
    },
    methods: {
      async getQuestion() {
        const dd = await this.$http.get('http://sem.major.shunshunliuxue.com/topic/get_quote', { country: this.country, topic: 'au_master' });
        console.log(dd, '//////////');
        this.questions = [
          { id: '1', title: '在澳洲毕业后如何申请工作签证' },
          { id: '2', title: '赴澳读高中不可不知四件事' },
          { id: '3', title: '澳洲硕士申请专家规划指导' },
          { id: '4', title: '澳洲本科预科招生信息' },
          { id: '5', title: '澳大利亚高中留学申请指南' },
          { id: '6', title: '持澳洲八大录取书备战高考' },
        ];
      },
    },
  };

</script>
<style lang="less">
  .question {
    background: white;
    padding: 0 15px;
    color: #333;
    h3 {
      padding: 15px 0 5px;
      font-size: 16px;
      margin: 0;
    }
    ul {
      list-style: none;
      &:extend(.reason ul);
      > li {
        font-size: 15px;
        line-height: 25px;
        border-bottom: 1px solid #eeeeee;
        padding: 10px 0;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        a {
          color: #7b838e;
        }
      }
    }
  }
</style>
