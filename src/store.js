import Vuex from 'vuex'

let store = null;
 

var state = {
	
};

const mutations = {
	
};

const actions = {
	
};

export default function Store(Vue){
  if (!store){
    Vue.use(Vuex);
    store = new Vuex.Store({
      	state,
		mutations,
		actions
    });
  }
  return {
    store
  };
}; 