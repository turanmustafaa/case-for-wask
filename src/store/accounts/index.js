import accountsService from "@/services/accounts";
export default {
    namespaced: true,
    state: {
        accounts: [],
    },
    getters: {
        accountsGetter: state => state.accounts,
    },
    actions: {
        async getData({ commit }) {
            const data = await accountsService.getAccounts();
            const newData = await data.data.accounts
            commit('SET_DATA', newData);
        },
    },
    mutations: {
        SET_DATA(state, accounts) {
            state.accounts = accounts;
        },
    }
}