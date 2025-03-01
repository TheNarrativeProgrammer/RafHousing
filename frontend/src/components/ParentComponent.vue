<script>
    import ChildComponent from './ChildComponent.vue'

    export default {
        name: 'ParentComponent',
        components: {
            ChildComponent
        },
        data() {
            return {
                parentMessage: "Hello from parent", //variables are defined in data() and can be used in <template
                isInputCorret: true
            }
        },
        methods: {
            handleCustomEvent(dataFromChild) {
                this.parentMessage = dataFromChild;
            },
            AddNewInterest() {
                //any element within Template that has red of "newRafInterest" can be access.
                //this.$refs. --> search 'this' component for elements that can 'ref' tag of the name 'newRafInterest'. This get the handle of the element with this ref
                this.$refs.newRaffInterest.focus()
                const userEnteredInterest = this.$refs.newRaffInterest.value //save the input from the user as a const

                if (userEnteredInterest) {
                    const raffPattern = /\braff(s|s|f)?\b/i;                     //pattern to look for. Any variation on word "raff"
                                                                                //variableOfPaternThatIsSearchingFor.test(variableToTest)

                    if (raffPattern.test(userEnteredInterest)) {
                        const newInterest = document.createElement('p');        //create a new <p> element. This currently has no content or placement in DOM
                        newInterest.textContent = userEnteredInterest;          //assigne the var storing the text from user to the text within the <p> element creates
                        this.$refs.currentRaffInterest.appendChild(newInterest) //place the <p> in the DOM by appending it to the <div that contains the ref of currentRaffInterest
                        this.$refs.newRaffInterest.value = '';                  //clear the input field
                        this.sInputCorret = true;
                    }
                    else {
                        this.isInputCorret = false;
                    }
                    
                }
            }
        }
    }

</script>



<template>
    <div>
        <!--To get the handle of this element, use the ref we assigned. Save the ref as a variable and then it can be manipulated-->
        <!--the method AddNewInterest uses the ref to get the handle of the element to manipulate-->
        <input type="text" ref="newRaffInterest" />
        <button @click="AddNewInterest">Give Raff Another Interest</button>

        <h3 v-if="!isInputCorret">Interest must be contain 'raff'</h3>

        <div class="interest" ref="currentRaffInterest">
            <h3>This is Raf</h3>
            <img src="../assets/raf.jpg" alt="Raf housing" />
            <h3>His intersting include</h3>
            <p>white water raffing</p>
            <p>winning draws and raffles</p>
            <p>Hunting with raiffles</p>
            <p>Chillin with riff raff</p>
            <p>Eating Belgium wraffles</p>
            <p>Raughing at jokes</p>
            <p>Petting giRAFFes</p>
        </div>

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

    .interest {
        color: black;
        list-style-type: none; /*remove bullet points*/
        background: #ff9ed2;
        margin: 20px auto;
        padding: 10px 20px;
        border-radius: 10px;
        display: flex;
        align-items: center; /*vertically, the items justify to middle*/
        justify-content: space-between; /*equal space between each item in horizontal direction*/
    }

</style>