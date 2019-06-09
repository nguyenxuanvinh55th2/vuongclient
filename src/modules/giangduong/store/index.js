import mutations from './mutation.js'
import actions from './actions.js'
import getters from './getters'
export default {
  namespaced: true,
  state: {
    giangduongs: []
  },
  mutations,
  actions,
  getters
}