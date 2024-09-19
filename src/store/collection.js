import Repository, { baseUrl } from '~/repositories/Repository.js';

// State
export const state = () => ({
  collections: null,
  categories: null,
  queries: null
});

// Mutations
export const mutations = {
  setCollections(state, payload) {
    state.collections = payload;
  },

  setCategories(state, payload) {
    state.categories = payload;
  },

  setQueries(state, payload) {
    state.queries = payload;
  }
};

// Actions
export const actions = {
  async getCollectionsBySlugs({ commit }, payload) {
    try {
      const query = payload.map(item => `slug_in=${item}`).join('&');
      const response = await Repository.get(`${baseUrl}/collections?${query}`);
      commit('setCollections', response.data);
      return response.data;
    } catch (error) {
      return { error: JSON.stringify(error) };
    }
  },

  async getCategoriesBySlugs({ commit }, payload) {
    try {
      const query = payload.map(item => `slug_in=${item}`).join('&');
      const response = await Repository.get(`${baseUrl}/product-categories?${query}`);
      commit('setCategories', response.data);
      return response.data;
    } catch (error) {
      return { error: JSON.stringify(error) };
    }
  }
};
