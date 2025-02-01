<script>
    export default {
        name: 'TakeList',
        data() {
            return {
                tasks: [],
                loading: true,
                errorMessage: ''
            }
        },
        mounted() {
            setTimeout(() => {
                const simulatedError = false
                if (simulatedError) {
                    this.errorMessage = 'Failed to load tasks';
                } else {
                    this.tasks = ['Eat ramen', 'play games', 'sleep']
                }
                this.loading = false
            }, 1000)
        }
    }
</script>



<template>
    <div>
        <h3>TaskList</h3>
        <!--here, we're testing a variable 'loading' and checking if it's true or false. If true, then add this paragraph to dom-->
        <p v-if="loading">Loading tasks...</p>
        <p v-else-if="tasks.length === 0">NO tasks found.</p>
        <ul v-else>
            <li v-for="(task, i) in tasks" :key="i">
                {{task}}
            </li>
        </ul>

        <p v-if="errorMessage" class="error">Error: {{ errorMessage }}</p>
    </div>

</template>



<style>

</style>