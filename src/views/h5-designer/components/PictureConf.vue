<template>
  <div class="picture-conf">
    <form class="form" v-on:submit.prevent="save">
      <div class="form-group row">
        <label class="col-2 col-form-label">标题</label>
        <div class="col-10">
          <input v-model="model.title" class="form-control" type="text">
          {{model.title}}
        </div>
      </div>
      <div class="form-group row">
        <label class="col-2 col-form-label">图片地址</label>
        <div class="col-10">
          <input v-model="model.src" class="form-control" type="text">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-2 col-form-label">链接地址</label>
        <div class="col-10">
          <input v-model="model.link" class="form-control" type="text">
        </div>
      </div>
      <div class="form-group row">
        <div>
          <button class="btn btn-danger pull-right"> 添加 </button>
          <button class="btn btn-default pull-right"> 重置 </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
//    import { mapMutations } from 'vuex';

    export default {
        props: ['partialKey'],
        data: () => {
            return {
                model: {
                    title: '',
                    src: '',
                    link: '',
                    key: this.props
                }
            };
        },
        methods: {
            save() {
                this.$store.commit('modifyPartialConf', this.model);
            }
        }
    };
</script>
