/* eslint-disable no-shadow */
const state = {
    all: [
        {
            key: 'banner',
            name: 'test1',
            src: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRy8gJT0S5oQDIpytQRvrljIawNQLtXGNsi9PvpE_AM-_Ff7VIHtw',
            link: 'http://www.baidu.com'
        },
        {
            key: 'banner',
            name: 'test2',
            src: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRy8gJT0S5oQDIpytQRvrljIawNQLtXGNsi9PvpE_AM-_Ff7VIHtw',
            link: 'http://www.baidu.com'
        }
    ]
};

const mutations = {
    modifyPartialConf(state, conf) {
        const idx = state.all.findIndex(c => c.key === conf.key);
        state.all.splice(idx, 1, conf);
    }
};

const actions = {

};

const getters = {
    pageData(state) {
        return state.all;
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
