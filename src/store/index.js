import { createStore } from 'vuex'
import accounts from '../store/accounts'

export default createStore({
  modules: {
    accounts,
  }
})