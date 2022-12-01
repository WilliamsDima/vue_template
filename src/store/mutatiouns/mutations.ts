import { TItem } from './../state';
import { MutationTree } from 'vuex'
import { State } from '../state'
import { MutationTypes } from './mutation-types'

export type Mutations<S = State> = {
    [MutationTypes.addItem](state: S, item: TItem): void,
    [MutationTypes.removeItem](state: S, item: TItem): void,
    [MutationTypes.setItems](state: S, items: TItem[]): void,
    [MutationTypes.setLoadind](state: S, value: boolean): void,
    [MutationTypes.setSearchValue](state: S, value: string): void,
    [MutationTypes.setPage](state: S, page: number): void,
    [MutationTypes.setTotalPage](state: S, total: number): void,
}
  
export const mutations: MutationTree<State> & Mutations = {
    [MutationTypes.addItem](state, item: TItem) {
        state.items.push(item)
    },
    [MutationTypes.removeItem](state, item: TItem) {
        state.items = state.items.filter((it: TItem) => it.id !== item.id)
    },
    [MutationTypes.setItems](state, items: TItem[]) {
        state.items = items
    },
    [MutationTypes.setLoadind](state, value: boolean) {
        state.loading = value
    },
    [MutationTypes.setSearchValue](state, value: string) {
        state.searchValue = value.trim()
    },
    [MutationTypes.setPage](state, page: number) {
        state.page = page
    },
    [MutationTypes.setTotalPage](state, total: number) {
        state.totalPage = total
    },
}
