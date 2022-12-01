export type TItem = {
    id: number,
    title: string
}


interface IState {
    items: TItem[]
    loading: boolean
    searchValue: string
    page: number
    limit: number
    totalPage: number
}

export const state: IState = {
    items: [
        // { id: 1, title: 'First' },
        // { id: 2, title: 'Second' },
        // { id: 3, title: 'Three' },
      ],
    loading: false,
    searchValue: '',
    page: 1,
    limit: 10,
    totalPage: 0,
}
  
export type State = typeof state