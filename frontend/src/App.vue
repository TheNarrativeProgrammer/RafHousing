<!--App.vue -> starts the actual vue app. It's the enry point. On every project, there should be 1 App.vue'-->

<template>
   <div id="app">
       <header>
           <nav>
               <!--router link -> when making a new view, add the link with the folder path here.-->
               <!-- / -> this is defined in the router.js in the import phase-->
               <!-- /about -> this is defined in the router.js in the import phase-->
               <router-link to="/">Home</router-link>
               <router-link to="/about">About</router-link>
               <router-link to="/user/1">User</router-link>
               <router-link to="/leaderboard">Leaderboard</router-link>
               <router-link to="/controls">Controls</router-link>
               <router-link to="/founder">Founders</router-link>
               <router-link to="/contact">Contact</router-link>
           </nav>
       </header>

       <main>
           <!--router-view -> this displays whatever Vue you're currently on. App.vue will first load the header and footer and then body will change and display the other Vue'-->
           <router-view />
       </main>
   </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    nav {
        margin-top: 50px;
        border: 5px solid black;
    }

    /* a -> router-links. <a is element loaded into DOM*/
    a {
        margin-right: 50px;
        
    }
</style>

