import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        title: 'My Custom Title',
        links: [
            'http://google.com',
            'http://coursetro.com',
            'http://youtube.com'
        ]
    },
    getters: {
        countLinks: state => {
            return state.links.length
        }
    },
    mutations: {
        ADD_LINK: (state, link) => {
            state.links.push(link)
            localStorage.setItem('links', JSON.stringify(state.links))
        },
        REMOVE_LINK: (state, link) => {
            state.links.splice(link, 1)
            localStorage.setItem('links', JSON.stringify(state.links))
        },
        REMOVE_ALL: (state) => {
            state.links = []
            localStorage.setItem('links', JSON.stringify(state.links))
        },
        initializeLinks: (state) => {
            if(localStorage.getItem('links')) {
                state.links = JSON.parse(localStorage.getItem('links'))
            }
        }
    },
    actions: {
        removeLink: (context, link) => {
            context.commit("REMOVE_LINK", link)
        },
        removeAll({commit}) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    commit('REMOVE_ALL')
                    resolve()
                }, 1500)             
            })
        }
    }
})