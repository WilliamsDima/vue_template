import axios from 'axios'
import { computed, ref } from 'vue'

export const useSearch = (items: any) => { 

    const searchValue = ref('')

    const search = () => {
        return [...items.value].filter(item => item.title.toLowerCase().includes(searchValue.value.toLowerCase()))
    }

    const searchList = computed(search)

    
    


    return {
        searchList,
        searchValue
    }
}