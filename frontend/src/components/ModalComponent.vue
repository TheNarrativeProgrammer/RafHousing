<script>
    //For child to use a prop, we need to tell vue this component can accept a certain prop
    //Export this component object and inside define 'props' property
    //props [] an array that takes in values passed to it from parent
    //within 'SubmissionComponent' (this components parent) the Modal tag contained the prop 'thankyouMessage'. <Modal thankyouMessage="Thank you. Click to close"></Modal>
    //props: ['thankyouMessage'] is getting the 'thankyouMessage' prop passed into it.
    export default {
        props: ['modalThankyouMessage', 'modalFeedbackMessage', 'modalCloseMessage'],
        data() {
            return {
                isShowingModal: true
            }
        },
        //custom events are fired from child component and listened to by parent component. Create a custom Event like @SomeEvent in template of parent inside Child tag <Modal @someEvent
        //emit event - this (references this component) .$
        //emit event -  .$emit('nameOfEventWeAreEmitting')
        //when this function is called, the event is emitted and the parent who is listening then receives the event
        //in parent <Modal @closeEvent="functionToFireOnReceivingEvent"></Modal> is listening for closeEvent
        methods: {
            CloseModal() {
                this.$emit('closeEvent')
            }
        }
    }

</script>

<template>
    <!-- @click.self this is a event modifier. Without this, user can click on both background and Modal to trigger the close. 
     With '.self' the click event only registers to the div class of backdrop. It doesn't fire if Modal div is clicked. -->
    <div v-if="isShowingModal "class="backdrop" @click.self="CloseModal"><!--greyed out backdrop behind modal-->
       <div class="modal">
           <h3>{{modalThankyouMessage}}</h3>
           <p>{{modalFeedbackMessage}}</p>
           <p>{{modalCloseMessage}}</p>
       </div>

    </div>
</template>

<style scoped>
    .modal{
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
    }

    .backdrop{
        top: 0px;
        position: fixed;
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
    }

</style>