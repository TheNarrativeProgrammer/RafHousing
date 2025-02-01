<script>
    import ProfileComponent from '../components/ProfileComponent.vue'

    export default {
        name: 'FounderPage',
        components: {
            ProfileComponent
        },
        data() {
            return {
                founderName: 'Reid'
            }
        }
        
    }

</script>



<template>
    <div class="founder-page">
        <h1>FOUNDER</h1>
        <profile-component :founderNameProp='founderName'></profile-component>
    </div>

</template>



<style>

</style>