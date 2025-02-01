<script>
    export default {
        name: 'ProfileComponent',
        props: {
            founderNameProp: {
                type: String,
                required: true
            }
        }
    }
</script>


<template>
    <div>
        <p>Founder {{founderNameProp}}</p>

    </div>
</template>

<style>
</style>