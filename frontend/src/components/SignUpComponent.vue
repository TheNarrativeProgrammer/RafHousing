<script>
export default{
    name: 'SignUp',
    data(){
        return{
            email: '',
            password: '',

        }
    },
    methods: {
        handleSubmit(){
            
        }
    }
}


</script>




<template>
<form @submit="handleSubmit">
    <label>Email:</label>
    <!--v-model="variableToLinkTo"  -->
    <input type="email" required v-model="email">
    <label>Password:</label>
    <input type="password" required v-model="password">
</form>

<div class="submit">
    <button>Create Account</button>
</div>

<p>Welcome: {{ email }}</p>


</template>





<style>
button{
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
}

</style>