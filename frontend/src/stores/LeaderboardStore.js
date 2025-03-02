//1. Import 'defineStore' function from pinia
//this allows us to make a store
import { defineStore } from "pinia";


//2. invoke function defineStore, which takes in 2 arguements
//arguement 1--> identifier for the store, used for connecting to store
//arguement 2--> object, where inside we define things like the state

// defineStore('leaderboard', {
//     stateL
// })

//3. Export store and save it as const var starting with 'use' and name of store
//the return value of defineStore() func is a function in itself, and that function is houses in this 'useLeaderboardStore' var
//invoke 'useLeaderboardStore' in vue component to get access to this store

//state() -> property that is a function which return an object
//when returning an object, place in ({})
//state: ({
//})
//return object is a state object and it can have different properties
export const useLeaderboardStore = defineStore('leaderboard', {
    state:() => ({
        leaderboardData: [],
        selectedCount: 10
    }),


actions: {
    async fetchLeaderboard(count = 10){
        try {
            const response = await fetch(`http://localhost:3000/api/leaderboard?count=${count}`);
            const result = await response.json();
            if (result.success) {
                this.leaderboardData = result.data
            } else {
                console.error('Server returned an error', result.error)
            }
            } catch (error) {
                console.error('failed to fetch', error)
            }
        }
    }
})