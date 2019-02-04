import Vue from 'vue'
import Vuex from 'vuex'
import geo from './modules/geo'
import home from './modules/home'

Vue.use(Vuex)
const store = () =>
  new Vuex.Store({
    modules: {
      geo,
      home
    },
    actions: {
      // 生命周期
      async nuxtServerInit({ commit }, { req, app }) {
        // 定位
        const {
          status,
          data: { province, city }
        } = await app.$axios.get('/geo/getPosition')
        if (status === 200) {
          commit(
            'geo/setPosition',
            status === 200 ? { city, province } : { city: '', province: '' }
          )
        }
        // 菜单
        const {
          status: status2,
          data: { menu }
        } = await app.$axios.get('/geo/menu')
        commit('home/setMenu', status2 === 200 ? menu : [])
        // 热门地址
        const {
          status: status3,
          data: { result }
        } = await app.$axios.get('/search/hotPlace', {
          params: {
            city: app.store.state.geo.position.city.replace('市', '')
          }
        })
        console.log(result)
        commit('home/setHotPlace', status3 === 200 ? result : [])
      }
    }
  })
export default store
