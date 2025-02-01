<script>
    export default {
        name: 'ChildComponent',
        props: {
            someProp: {
                type: String,
                required: true
            }
        },
        methods: {
            sendToParent() {
                this.$emit('customEvent', 'Hello, parent Im your child')
                //this.$emit('nameOfEvent', 'parameters')
                //Emit -> sends info from child to parent
                //'Hello, parent Im your child' -> this is data that is being sent from child to parent via the 'emit' and it send to whatever function is linked to 
                //'customEvent' which in this case is the parentComponent.
            }
        }
    }
</script>



<template>
    <div>
        <!--PROPS -> -->
        <p>Child Received : {{someProp}}</p>
        <!--this cutton click triggers the function sendToParent().-->
        <button @click="sendToParent">Send Event to Parent</button>
    </div>

</template>



<style>

</style>