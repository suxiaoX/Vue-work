<template>
  <div class="partial">
    <router-link class="btn-conf" v-bind:to="'/' + conf">编辑</router-link>
    <div :is="type" :conf="conf"></div>
  </div>
</template>
<script>
import { ViewComponents } from './componentRegister';

export default {
  props: ['conf', 'type'],
  components: ViewComponents
};
</script>
<style lang="scss">
.partial {
    border: 1px dashed dodgerblue;
    width: 100%;
    min-height: 160px;
    cursor: pointer;
    position: relative;

    .router-link-active {
        color: red;
    }
}

.btn-conf {
    position: absolute;
    top: 5px;
    right: 5px;
}
</style>
