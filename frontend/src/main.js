import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.js'

//once you have the Route, we have to mount/bind it. #app in main.js is same name as the index.html <div id=app
createApp(App).use(router).mount('#app')

//this is the firs bit of JS code that starts the Vue app. It's called after index.html
//Here we're creating the App
//then we mount it
//then we put it into the <div id="app" within the index.html
