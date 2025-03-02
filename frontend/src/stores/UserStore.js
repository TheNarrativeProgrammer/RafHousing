//STORE - Centralized place to store data. Everything references the store and the store accesses the backend
import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
    //PINIA STEPS
    //step 1 - define a state. It's the main block of info
    state: () => ({
        user: null
    }),
    //actions -> similar to the computed in vue. It's methods that return a single value. They can be called from this store or a component.
    actions: {
        async login(email) {
            //if user inputs email that exist, then return success
            try {
                //do a POST. check if info exist. First FETCH data from the leaderboard
                const response = await fetch('http://localhost:3000/api/login', {
                    //object info
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    //send stringified version of email
                    body: JSON.stringify({email})
                })
                //if response isn't ok, then throw error. This catches a user error
                if (!response.ok) {
                    const error = await response.json();
                    throw new Error(error.error || 'Login failed');
                }
                //if info is ok, then return it. Info is put in "user"
                this.user = await response.json();
            } catch (err) {
                //resolve "try" with a "catch". This catches server error.
                console.error("login error: ", err.message);
                throw err;
            }
        },
        //log user out by deleting user. Don't do this normally, but works for now
        logout() {
            this.user = null;
        }
    }
});