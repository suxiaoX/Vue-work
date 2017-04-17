<template>
    <div class="image">
        <a v-for="image in confs" :href="image.link">
            <img :src="image.src" :alt="image.name" />
        </a>
    </div>
</template>
<script>
/* import { mapGetters } from 'vuex'; */

export default {
    name: 'PictureView',
    props: ['conf'],
    computed: {
        confs() {
            console.log(this);
            return this.$store.getters.pageData.filter(c => c.key === this.conf);
        }
    }
};
</script>
<style lang="scss" scoped>

</style>
