<script>
    export default {
        name: 'Leaderboard',
        data() {
            return {
                leaderboardData: [],
                errorMessage: ''
            }
        },
        mounted() {
            this.fetchLeaderBoardData()
        },

        methods: {
            async fetchLeaderBoardData() {
                try {
                    const res = await fetch('/api/leaderboard-summary')
                    if (!res.ok) {
                        throw new Error(`Server returned status ${res.status}`)
                    }
                    const dataFromRequest = await res.json();
                    this.leaderboardData = dataFromRequest;
                } catch (err) {
                    this.errorMessage = err.message;
                }
            }
        }
    }

</script>



<template>
    <div class="leaderboard-page">
        <h2>LEADER BOARD</h2>

        <table>
            <!--Table column heads-->
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Player</th>
                    <th>Score</th>
                </tr>
            </thead>
            <!--table Rows-->
            <tbody>
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
    .leaderboard{
        margin-top: 10px;
    }

    table {
        margin: 0 auto;
        border-collapse: collapse;
        border: 5px solid black;
    }

    th {
        color: aqua;
    }

    th, td {
        border: 1px, solid, #ccc;
        padding: 1px;
    }

    error{
        color: red;
    }

</style>