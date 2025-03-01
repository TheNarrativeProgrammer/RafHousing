<script>
    export default {
        name: 'TaskList',
        data() {
            return {
                tasks: [],
                detailedTasks: [],
                loading: true,
                errorMessage: '',
                isShowImportantOnly: false,
            }
        },
        methods: {
            ToggleIsImportant(detailedTaskToTaggle) {
                detailedTaskToTaggle.isImportant = !detailedTaskToTaggle.isImportant
            },
            ToggleShowImportantOnly() {
                this.isShowImportantOnly = !this.isShowImportantOnly;
            }
        },
        //Computed property is data that is dependent on other data. Here, a "Filtered" property is dependent on what data "detailedTasks" contains
        //if data in "detailedTasks" changes, then data in Filtered array would change. The Filtered array is array of only boos that are True of IsImportant
        //when data in "detailedTasks" changes, vue automatically updates the computed property dependenent on it.
        computed: {
            filteredDetailedTasks() {
                //this function retuns a value and that value can be used in Template. Here we're returning an array of
                //filter() --> JS array method that fires a callback function for each element in array and returns every item that is TRUE.
                // this returned true item, is then stored in a new array.
                //filter(()=>) --> callback function
                //we get access to the element of the array we currently iterating on. Pass it into the filter fucntion by naming it. Here its "detailedTask""
                //filter((nameGivenToIteator)=> nameGivenToIteator.subPropery == thingToTest)
                return this.detailedTasks.filter((detailedTask) => detailedTask.isImportant == true)
            }
        },
        mounted() {
            setTimeout(() => {
                const simulatedError = false
                if (simulatedError) {
                    this.errorMessage = 'Failed to load tasks';
                } else {
                    this.tasks = ['Eat ramen', 'play games', 'sleep'];
                    this.detailedTasks = [
                        { title: "study", owner: "Reid", isImportant: true },
                        { title: "JS", owner: "Reid", isImportant: true },
                        { title: "mobileDev", owner: "Reid", isImportant: false },
                    ];
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

    <div>
        <h3>Detailed Task list</h3>
        <button @click="ToggleShowImportantOnly">
            <span v-if="isShowImportantOnly">Show All</span>
            <span v-else>Show Important</span>
        </button>
        <p v-if="detailedTasks.length === 0"> No detailed tasks found</p>
        <div v-else>

            <ul v-if="isShowImportantOnly">
                <!--v-bind:class="{key, value}
        v-bind:class="{classApplied: thingToTest, }-->
                <li v-for="detailedTask in filteredDetailedTasks" v-bind:class="{important: detailedTask.isImportant}" @click="ToggleIsImportant(detailedTask)">
                    <h4>{{detailedTask.title}}</h4>
                    <p>{{detailedTask.owner}}</p>
                    <p>{{detailedTask.isImportant}}</p>
                </li>
            </ul>
            <ul v-else>
                <li v-for="detailedTask in detailedTasks" v-bind:class="{important: detailedTask.isImportant}" @click="ToggleIsImportant(detailedTask)">
                    <h4>{{detailedTask.title}}</h4>
                    <p>{{detailedTask.owner}}</p>
                    <p>{{detailedTask.isImportant}}</p>
                </li>
            </ul>
        </div>
        
    </div>

</template>



<style scoped>
    body {
        background: #eee;
        max-width: 960px;
        margin: 20px auto;
    }
    /*strip on margin */
    p, h3, ul{
        margin: 0;
        padding: 0;
    }
    /**/
    li {
        color: black;
        list-style-type: none; /*remove bullet points*/
        background: #fff;
        margin: 20px auto;
        padding: 10px 20px;
        border-radius: 10px;
        display: flex;
        align-items: center;            /*vertically, the items justify to middle*/
        justify-content:  space-between; /*equal space between each item in horizontal direction*/
    }
        li.important {
            background: #ff9ed2;
        }
</style>