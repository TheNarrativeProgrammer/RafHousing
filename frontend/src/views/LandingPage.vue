<template>
    <div class="landing-page">
        <h1>Welcome to Raf Housing, where we house them rafs</h1>
        



        <parent-component></parent-component>
    </div>
</template>

<script>

    //to add component to this vue
    //1. import from path and match name in the NameOfComponent.vue export - ParentComponent
    //2. ParentComponent - add to components: property within export default
    //3. add element to <template. Here we added  <parent-component/> It looks for Pacal case version if Import step and converts it to cabab automatically. Must write in this format

    //import parent only, not child. Parent is importing and using child component already
    import ParentComponent from '../components/ParentComponent.vue'

    export default {
        name: 'LandingPage',
        components: {
            ParentComponent
        }

    }
</script>

<style scoped>
    .landing-page {
        text-align: center;
        margin-top: 20px;
    }
</style>