import { Mutations } from './../mutatiouns/mutations';
import { ActionTree, ActionContext } from 'vuex'
import { ActionTypes } from './action-types'
import { State } from '../state';
import { MutationTypes } from '../mutatiouns/mutation-types';
import axios from 'axios';

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
    [ActionTypes.fetchItems](
        { state, commit }: AugmentedActionContext,
    ): void,
    [ActionTypes.loadMoreItems](
        { state, commit }: AugmentedActionContext,
    ): void,
}

export const actions: ActionTree<State, State> & Actions = {
    async [ActionTypes.fetchItems]({ state, commit }) {
        try {
            commit(MutationTypes.setLoadind, true)
            const { data, headers } = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _page: state.page,
                    _limit: state.limit
                }
            })

            if (headers['x-total-count']) {
                commit(MutationTypes.setTotalPage, Math.ceil(+headers['x-total-count'] / state.limit))
                commit(MutationTypes.setItems, data)
            }

        } catch (error) {
            console.log('fetchItems', error);
        } finally {
            commit(MutationTypes.setLoadind, false)
        }
    },
    async [ActionTypes.loadMoreItems]({ state, commit }) {
        try {
            commit(MutationTypes.setPage, state.page + 1)

            const {data, headers} = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _page: state.page,
                    _limit: state.limit
                }
            })
  
            
            if (headers['x-total-count']) {
                commit(MutationTypes.setTotalPage, Math.ceil(+headers['x-total-count'] / state.limit))
                commit(MutationTypes.setItems, [...state.items, ...data])
            }
          
        } catch (error) {
            console.log('fetchItems', error);
        }
    },
}
