<template>
  <div class="container-fluid designer">
    <div class="row">
      <div class="col-5 simulator">
        <PartialViewBase type="PictureView" conf="banner"/>
      </div>
      <div class="col-7 configuartion">
        <h3>配置详情</h3>
        <hr/>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint no-console: 0 */
import PartialViewBase from './components/PartialViewBase';

export default {
  components: {
    PartialViewBase
  }
};
</script>

<style>
.designer {
    margin-top: 10px;
}
.partial {
    margin-bottom: 20px;
}

.simulator {
}
.configuartion {
    border: 2px solid #ececec;
}
</style>
