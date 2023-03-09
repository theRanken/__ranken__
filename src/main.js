import { createApp } from 'vue'
import App from './App.vue'
import router  from './router'
import 'remixicon/fonts/remixicon.css'
import './styles/index.css'
import './styles/tailwind.css'

createApp(App).use(router).mount('#app')
