import axios from 'axios'
import { computed, ref, onMounted } from 'vue'

export const useItemsUpdate = (limit: number, items: any, page: number) => { 

    
    const newItems: any = ref([])

    console.log(page);


    const featch = async () => {
        try {
            const { data, headers } = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _page: page,
                    _limit: limit
                }
            })
    
    
            if (headers['x-total-count']) {
                console.log('page', page)
                console.log('test', data);
                
                newItems.value = [...items.value, ...data]
            }
    
    
        } catch (error) {
            console.log('fetchPosts', error);
        }
    }

    console.log(2222);

    const updateItems = computed(featch)

    return {
        page,
        updateItems
    }
}