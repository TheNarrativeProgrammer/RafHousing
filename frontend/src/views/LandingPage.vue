<script setup>
    //<script setup> -> add 'setup' to delay the script from running until other things are setup/loaded
    //ref -> other way of binding variables. Ref binds in-line.
    //onMounted
    //computed -> does methods and returns one value. 
    import { ref, onMounted, computed } from 'vue';
    //import with {} -> import a specific things inside a library without the default. Use if you want specific method or data
    //import with {} -> import the default which imports the whole library
    import { useUserStore } from '../stores/UserStore.js'

    const userStore = useUserStore()

    //define "ref" in script, which is binding, and then can use this ref in the "template"
    //ref() is similar to $ref, but $ref is used within <script> tag (excluding the <setup> tag within <script>) to access DOM element with that ref="refName", ref() instead...
    //save a reference to a varaible ('email' in this case) which can be sent via the 'return' of setup, or data.
    //in template, use ref=email to link it to this ref().
    //***const email = ref('') -> is refernence to <input with tag type="email"
    //make changes to DOM element with 'email' tag using using ".value "    email.value.textContent="change to something"
    //import {ref} from 'vue to get access to this function
    //ref is a reference to something, but here it's not yet linked to anything. 
    const email = ref('')

    onMounted(()=> {

    })

    async function handleLogin() {
        try {
            await userStore.login(email.value)
        } catch (err) {
            alert(err.message);
        }
    }

    function logout() {
        userStore.logout();
    }
    

</script>


<template>
    <!--show data or not show on loging-->
    <div>
        <!--v-if -> adds or removes things from the DOM. Will add to dom if user hasn't logged in'-->
        <div v-if="!userStore.user">
            <h1>Login</h1>
            <input v-model="email" 
                   type="email"
                   placeholder="enter your email"
                   />
            <button @click="handleLogin">Login</button>
        </div>
        <div v-else>
            <!--userStore.user.username this is key stored in database-->
            <h1>Welcome, {{userStore.user.username}}</h1>
            <p>Email: {{userStore.user.email}}</p>
            <!--calls location "logout" function on click-->
            <button @click="logout">Logout</button>
        </div>

    </div>

</template>



<style>
</style>