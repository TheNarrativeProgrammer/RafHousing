<script>
    export default {
        name: 'SubmissionComponent',
        data() {
            return {
                userFeeback: [],
                responseMessage: 'Thank you for your feedback',
                displayMessage: 'Please submit your feedback.'
            }
        },
        methods: {
            logUserFeedback() {
                this.displayMessage = this.responseMessage;
            }
        }

    }
</script>



<template>
    <div>
        <h2>Hello : {{displayMessage}}</h2>
        <textarea></textarea>
        <button @click="logUserFeedback">Submit</button>
    </div>
</template>