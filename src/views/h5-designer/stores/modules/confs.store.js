/* eslint-disable no-shadow */


const state = {
    all: [
        {
            key: 'banner',
            name: 'test....',
            src: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRy8gJT0S5oQDIpytQRvrljIawNQLtXGNsi9PvpE_AM-_Ff7VIHtw',
            link: 'http://www.baidu.com'
        }
    ]
};

const mutations = {
    addConf(state, conf) {
        state.all.push(conf);
    }
};

const actions = {

};

const getters = {
    allConfs(state) {
        return state.all;
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
