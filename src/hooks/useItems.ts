import axios from 'axios'
import { onMounted, ref } from 'vue'

export const useItems = (limit: number) => { 

    const items = ref([])
    const totalPage = ref(0)
    const loading = ref(true)

    const fetching: () => any = async () => {
        try {
            const { data, headers } = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _page: 1,
                    _limit: limit
                }
            })
    

            if (headers['x-total-count']) {
                totalPage.value =  Math.ceil(+headers['x-total-count'] / limit)
                items.value = data
            }
    
    
        } catch (error) {
            console.log('fetchPosts', error);
        } finally {
            loading.value = false
        }
    }

    console.log(1111);
    

    onMounted(fetching)


    return {
        items, loading, totalPage,
    }
}