import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {works} from './works'
import {doesntWorks} from './doesnt_work'

works()
doesntWorks()

createApp(App).mount('#app')
