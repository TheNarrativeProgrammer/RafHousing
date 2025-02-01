<script>
    //name: 'UserPage' -> this is what is imported in route.js
    export default {
        name: 'UserPage',
        data() {
            return {
                username: 'Loading...'
            }
        },
        //computed -> directive hook that returns a single value. Runs a callback that returns a single thing
        //fromt whatever path ($route) you got, get the paramaters and specifically get the 'id'
        //here we're defining a variable/objectt userId
        computed: {
            userId() {
                return this.$route.params.id;
            }
        },
        //with userId object defined above, we can use it here.
        mounted() {
            this.username = 'Player' + this.userId;
        }
    }

</script>


<template>
    <div>
        <h1>User Details</h1>
        <p>User ID: {{ userId }}</p>
        <p>Name: {{ username }}</p>
    </div>


</template>



<style>

</style>