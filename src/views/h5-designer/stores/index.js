import Vue from 'vue';
import Vuex from 'vuex';

import confs from './modules/confs.store';
import page from './modules/page.store';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        confStore: confs,
        pageStore: page
    }
});
