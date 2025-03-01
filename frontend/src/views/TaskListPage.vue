<script>
    //to add component to this vue
    //1. import
    //2. TaskList add to components: property within export default
    //3. add element to <template. Here we added  <task-list /> It looks for Pacal case version if Import step and converts it to cabab automatically. Must write in this format
    import TaskList from '../components/TaskListComponent.vue'

    export default {
        name: 'TaskListPage',
        components: {
            TaskList
        }
    }


</script>


<template>
    <div class="taskList-page">
        <h1>Task List</h1>
        <task-list></task-list>
    </div>



</template>


<style scoped>
    .taskList-page {
        text-align: center;
        margin-top: 20px;
    }

</style>