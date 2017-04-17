<template>
<div class="image">
  <div :is="confComponentType" :partialKey="$route.name"></div>
</div>
</template>
<script>
  import { ConfComponents } from './componentRegister';

  export default {
    data() {
      return {
        confComponentType: `${this.$route.meta.confType}Conf`
      };
    },
    components: ConfComponents
};
</script>
