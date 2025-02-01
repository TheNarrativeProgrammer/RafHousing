//ROuter - allows you to naviagate through the different pathways/vues for app.

//1. import the vue
//2. specify the vue folder pathway

//NOTE: vues are components, and components are components, but we separate vues from components because they are pages.
//componets are things we want to put inside of our vues. Vues are the pages themselves, with componets inside them.

//within the 'vues' folder, we put all the vues. 

import { createRouter, createWebHistory } from 'vue-router';

import LandingPage from './views/LandingPage.vue';
import AboutPage from './views/AboutPage.vue';
import UserPage from './views/UserPage.vue';
import Leaderboard from './views/LeaderboardPage.vue'
import ControlsPage from './views/ControlsPage.vue'
import FounderPage from './views/FounderPage.vue'
import ContactPage from './views/ContactPage.vue'

const routes = [
    {
        path: '/',
        name: 'Landing', //note: name here isn't being used by anything except the router. Nothing else is referencing this
        component: LandingPage //component here is the "name" must match the 'name' the export of the vue file 
        //in LandingPage.vue            export default {
                                            //name: 'LandingPage',
    },
    {
        path: '/about',
        name: 'About',
        component: AboutPage
    },
    {
        path: '/user/:id', //this is what is displayed in URI. The Colon makes this a paramater that we can pass info to. Each user will have a different ID #. 
        //path also is references in the router-links in the App.vue
        name: 'UserPage',
        component: UserPage
    },
    {
        path: '/leaderboard',
        name: 'Leaderboard',
        component: Leaderboard
    },
    {
        path: '/controls',
        name: 'Controls',
        component: ControlsPage
    },
    {
        path: '/founder',
        name: 'Founder',
        component: FounderPage
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;