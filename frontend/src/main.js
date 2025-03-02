//Main.js kicks off the porcess. 
import { createPinia} from 'pinia'
import { createApp } from 'vue' //import function "createApp" from vue library
import './style.css'
import App from './App.vue'     //create App object by importing it from vue file App.vue. This object is a vue root component
import router from './router.js'

//once you have the Route, we have to mount/bind it. #app in main.js is same name as the index.html <div id=app
//root componet "App" is inject/mounted onto div element with class id "app"

//one line way to create App, pass in rouer, and mount to DOM. This is missing pinia
//createApp(App).use(router).mount('#app')

//this is the firs bit of JS code that starts the Vue app. It's called after index.html
//Here we're creating the App
//then we mount it
//then we put it into the <div id="app" within the index.html


//This is the same as a 1 line code above, but in separate lines and includes a 2ns .use for pinia
const app = createApp(App);

const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount('#app');
