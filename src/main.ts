import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import components from '@/components/atoms'
import directives from '@/directives/'
import { store } from './store/store'

const app = createApp(App)

components.forEach((component: any) => {
    app.component(component.name, component)
})

directives.forEach((directiv: any) => {
    app.directive(directiv.name, directiv)
})

app
    .use(router)
    .use(store)
    .mount('#app')
