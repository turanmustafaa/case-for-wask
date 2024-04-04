import api from '../api';

const accountsService = {
  getAccounts() {
    return api.get('/myaccounts');
  },
};

export default accountsService;
