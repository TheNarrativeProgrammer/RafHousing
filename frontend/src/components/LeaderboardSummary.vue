<script>
    //returning the default object on export. By default, this is what is returned when LeaderBoardSummary is imported unless something else is defined.
    export default {
        //within {} this is the info that is being passed in the default. name, data(), mounted varialbes
        //name: -> this is a varialbe (which is a key), that stores the data of type string 'leaderboardsummary'
        //data() -> this is variables (whihc is alos a function, which is a javascript this) (which is key), thats stores/returns an object which is inside curly brackets
        // {} -> OBJECT  that is scoped within curly brackets (note: except for the case wheb you're definin a function, which {} define the function scope)
        //THIS ENTIRE THING IS AN OBJECT
        //  {
        //      leaderboardData: [],
        //      errorMessage: ''
        //  }
        name: 'LeaderboardSummary',
        data() {
            return {
                leaderboardData: [],
                errorMessage: ''
            }
        },
        //'this' -> VARIABLES STORED IN DATA()when using 'this' keyword, it is referencing the VARIBALBES (leaderBoardData and errorMessage).
        //'this' -> FUNCTIONS STORED IN METHODS: 'using 'this' keyword it is referencing FUNCTIONS
        //define the variables/objects that this vue uses in data(), and then use 'this' in mounted() and methods: functions to access the var/objects data() defined
        //mounth() _< functio vue calls when component is put into a page. Wthin "lanadingPage", when <leaderboard-summary /> is hti in code, mounted() is called
        //any data within the component or vue needs to have a function CALL within mounted() function. By defaut, function calls won't occur when Vue/component is added 
            //to DOM unless they are in mounted(). This is like Awake()
        mounted() {
            this.fetchLeaderboardData()
        },
        //async -> calling this function, we're going to listen for return, but not pause anything while we way for th return from this fetch.
        //try -> executes code inside {} until it hits an error. If error found, then it passed object 'err' which is defined in the catch bracket.
            //if no errro is found, then the code executes in full and catch() is never executed.
        methods: {
            async fetchLeaderboardData() {
                try {
                    //await -> await a response from this fetch, like in coroutine when you're waiting for something to occur before moving on to next line of code.
                    const res = await fetch('/api/leaderboard-summary')
                    if (!res.ok) {
                        throw new Error(`server returned status ${res.status}`)
                    }
                    const data = await res.json();
                    this.leaderboardData = data;
                    //err -> object that is returned by the 'try' if  an error is found. It's passed into the catach as a param. Note: 'err' is what we commonly use, but it can be any word
                } catch (err) {
                    this.errorMessage = err.message;
                }
            }
        }
    }
</script>



<template>
    <div class="leaderboard-summary">
        <h2>Leaderboard Summary</h2>

        <table>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Player</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                <!--Directive: is an iterator. -->
                <!--V-for: for loop that creates obejcts of item, and index based on what is in the leaderboard -->
                <!--colon : -> makes it a vue diretive -->
                <!--key -> bind an attrivbute called kay to the td leements being created -->
                <tr v-for="(item, index) in leaderboardData" :key="index">
                    <td>{{index}}</td>
                    <td>{{item.player}}</td>
                    <td>{{item.score}}</td>
                </tr>
            </tbody>
        </table>
        <p v-if="errorMessage" class="error">{{errorMessage}}</p>
    </div>
</template>


<style scoped>
    .leaderboard-summary{
        margin-top: 10px;
    }

    table{
        margin: 0 auto;
        border-collapse: collapse;

    }

    th, td {
        border: 1px, solid, #ccc;
        padding: 1px;
    }

    error {
        color: red;

    }

</style>