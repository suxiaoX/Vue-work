<template>
  <div class="article index">
    <h1>SEM</h1>
    <div class="msg">{{msg}}</div>
    <router-link to="/m/au.html">Go to AU</router-link><br>
    <router-link to="/children/">Go to children</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  /* eslint no-undef:0 */

  export default {
    replace: false,
    data() {
      return {
        msg: 'hello sem mobile',
      };
    },
    mounted() {
    },
    components: {
    },
  };

</script>
