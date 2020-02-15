
export const state = () => ({
  blogPosts: [],
  profile: [],
});

export const mutations = {
  setBlogPosts(state, list) {
    state.blogPosts = list;
  },
  setProfile(state, list) {
    state.profile = list;
  },
};

export const actions = {
  async nuxtServerInit({ commit }) {
    let files = await require.context('~/assets/content/blog/', false, /\.json$/);
    let blogPosts = files.keys().map(key => {
      let res = files(key);
      res.slug = key.slice(2, -5);
      return res;
    });
    await commit('setBlogPosts', blogPosts);

    // let files2 = await require.context('~/assets/content/profile/', false, /\.json$/);
    // let profile = files2.keys().map(key => {
    //   let res = files2(key);
    //   res.slug = key.slice(2, -5);
    //   return res;
    // });
    // await commit('setProfile', profile); 
  },
};
