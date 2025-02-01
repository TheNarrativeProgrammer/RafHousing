<template>
    <div class="landing-page">
        <h1>Welcome to Raf Housing, where we house them rafs</h1>
        <p>This is the landing page :).</p>

        <leaderboard-summary />

        <parent-component></parent-component>

        <task-list />
    </div>
</template>

<script>
    import LeaderboardSummary from '../components/LeaderboardSummary.vue'

    //to add component to this vue
    //1. import
    //2. TaskList add to components within export TaskList
    //3. add element to <template. Here we added  <task-list /> It looks for Pacal case version if Import step and converts it to cabab automatically. Must write in this format
    import TaskList from '../components/TaskList.vue'

    //import parent only, not child. Parent is importing and using child component already
    import ParentComponent from '../components/ParentComponent.vue'

    export default {
        name: 'LandingPage',
        components: {
            LeaderboardSummary,
            TaskList,
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