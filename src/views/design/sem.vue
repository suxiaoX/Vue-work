<template>
  <div class="article sem">
    <h1>13232323</h1>
    <Banner></Banner>
  </div>
</template>

<script>

  import Banner from './Banner';
  /**
   *   执行顺序： created > mounted > updated
   */
  export default {
    data() {
      return {
        xsdwAppFrom: 1,
        country: 'au',
        project: '',
        pages: {
          au: { title: '澳洲留学' },
          usa: { title: '美国留学' },
        },
        caseType: 'index',
      };
    },
    components: {
      Banner,
    },
    created() {
      document.title = 'aaaa';
    },
    methods: {
      getTitleStr() {
        return this.pages[this.country].title;
      },
      getAppFrom() {
        return this.country === 'au' ? 1 : 2;
      },
    },
  };

</script>
