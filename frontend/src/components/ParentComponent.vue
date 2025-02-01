<script>
    import ChildComponent from './ChildComponent.vue'

    export default {
        name: 'ParentComponent',
        components: {
            ChildComponent
        },
        data() {
            return {
                parentMessage: "Hello from parent" //variables are defined in data() and can be used in <template
            }
        },
        methods: {
            handleCustomEvent(dataFromChild) {
                this.parentMessage = dataFromChild;
            }
        }
    }

</script>



<template>
    <div>
        <!--we start with defualt parentMessage-->
        <h2>Parent Data: {{parentMessage}}</h2>
        <!--we put a child component inside another component, which is it's parent. -->
        <!--we're defining a custom event here. Here it's called 'customEvent' but it could be called anything. Childcomponet is listening for this event. -->
        <!--We're giving an event a name, but not defining how it's called. In child componet, we're calling the event.' -->
        <!--@customeEvent -> key that child component uses to broadcast event' -->
        <!--handleCustomEvent is called when customeEvent is triggered. HandleCustomEvent is function defined in methods:-->
        <child-component :someProp="parentMessage" @customEvent="handleCustomEvent"></child-component>

        <!-- : colon -> access a key or property of component that it's in-->
        <!--:someProp -> this is defined in childComponet and it specifies that a childComponent must take a String (it's required). -->
        <!--:someProp -> here, we're passing the String 'parentMessage as the required string when we're instiantiating the childComponent'-->
        <!--@customEvent="handleCustomEvent"> here, we're BINDING this event to the childcomponent, saying when event is called from ChildComp, then fire handleCustomEvent'-->
    </div>

</template>



<style>
</style>