<script>
    //import child component of modal
    import Modal from '../components/ModalComponent.vue'


    export default {
        name: 'SubmissionComponent',
        //register the child components we're using within this parent component
        //components:   this is a propery which is an object
        //Modal is a property
        components: {
            Modal
        },

        data() {
            return {
                userFeeback: [],
                userFeedbackInput: '', //variable to bind textarea input to. This is appended to the 'userFeeback' array
                isShowModal: false,
                responseMessage: 'Thank you for your feedback',
                closeMessage: 'click background to close',
                displayMessage: 'Please submit your feedback.'
            }
        },
        methods: {
            logUserFeedback() {
                //push feedback to array
                //CHECK - if input is empty
                if(this.userFeedbackInput.trim()){
                    this.userFeeback.push(this.userFeedbackInput);
                }
                //emit event that sends feedback. 
                //this.$emit('nameOfEvent', dataToSendWithEvent)
                //this event currently has no listener
                //this.$emit('feedbackReceivedEvent', this.userFeedbackInput)
                //clear input field
                this.userFeedbackInput ='';
                //update display message
                this.displayMessage = this.responseMessage;
                
            },
            ToggleModal() {
                this.isShowModal = !this.isShowModal
            },
        }

    }
</script>



<template>
    <div>
        <h2>Hello : {{displayMessage}}</h2>
        <!-- Bind the textarea to variable userFeedbackInput -->
         <!-- v-model is 2 way data binding. It creates link between data in vue Component and DOM, synconizing the data. -->
        <textarea v-model="userFeedbackInput"></textarea>

        <!-- Button calls function that logs user feedback and toggles Modal on -->
        <button @click="logUserFeedback(); ToggleModal()">Submit</button>
    </div>
    <!--To pass in prop from parent to child component, define the prop inside the tags of the child -->
    <!--<Modal></Modal>  this is the child component without the prop-->
    <!--<Modal propName = "value passed into prop"></Modal>     this format only works for Strings. Doesn't work for int, arrays, or anything besides strings'-->
    <!--v-bind:displayFeedback=userFeeback  this is data bind, which binds the prop to a variable  -->
    <!--v-bind:     or :        colon is shorthand for v-bind. Both bind something to a variable  -->
    <!--<Modal @closeEvent="functionToFireOnReceivingEvent"></Modal> is listening for closeEvent. Child component emits event and then ''ToggleModal' is called-->
    <!-- userFeeback[userFeeback.length-1] displays the current submission from the user -->
    <div v-if="isShowModal">
        <Modal modalThankyouMessage="Submitted" v-bind:modalFeedbackMessage="userFeeback[userFeeback.length-1]" :modalCloseMessage="closeMessage" @closeEvent="ToggleModal"></Modal>
    </div>

    <!-- display all feedback to user -->
    <!-- <div v-if="userFeeback.length > 0">
            <ul>
                <li v-for="(feedback, index) in userFeeback" :key="index">
                    {{ feedback }}
                </li>
            </ul>

        </div> -->


</template>

<style scoped>
li {
        color: black;
        list-style-type: none; /*remove bullet points*/
        background: #fff;
        margin: 20px auto;
        padding: 10px 20px;
        border-radius: 10px;
        display: flex;
        align-items: center;            /*vertically, the items justify to middle*/
        justify-content:left; /*equal space between each item in horizontal direction*/
    }
</style>