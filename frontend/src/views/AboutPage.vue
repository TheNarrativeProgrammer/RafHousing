<script>
    export default {
        name: 'AboutPage',
        data() {
            return {
                creators: "Reid",
                authors: ["Reid", "Raf", "our lord a savour"],
                likes: 1,
                showImage: true
            }
        },
        //methods property - this is a propery still within the data object. It contains all of the functions/methods for this vue/component.
        methods: {
            DecreaseLikes() {
                //this --> references the component itself. To access the properties within a function within the methods property, put this. before the property. We're accessing the "title" property
                //this --> lets vue know that we're accessing the properties within this component. It searches for "likes" within this component.
                this.likes--
            },
            DecreaseLikeByNum(DecreaseAmount) {
                this.likes -= DecreaseAmount
            },
            ToggleImage() {
                this.showImage = !this.showImage
            }
        }
    }
</script>



<template>
    <div class="about-page">
        <h1>About us</h1>
        <p>
            Creators: {{ creators }}
            <br>How much do you like him? {{likes}}/10</br>

            <div v-if="likes < 0">
                <!--V-if removes element from DOM if conidtion is false-->
                <p>You don't like Reid? He doesn't like you!</p>
            </div>

        </p>

        <button @click="likes++">Increase Likes</button>                        <!--increase "likes" property via template by directly incurmneting "likes" property within button within template-->
        <button @click="DecreaseLikes">Decrease Likes</button>                  <!--decrease "likes" property via invoking the "DecreaseLikes" function within the methods property within data object-->
                                                                                <!--Pass no arguements into function. Simply invoke it. This doesn't require () to invoke'-->
        <button @click="DecreaseLikeByNum(2)">Decrease Likes by a lot</button>  <!--decrease "likes" property via invoking the "DecreaseLikeByNum" and passing in arguement-->

        <button @click="ToggleImage">
            <span v-if="showImage">Hide Reid</span>
            <span v-else>Show Reid</span>
        </button>
        <p>
            Authors: <span v-for="(author, index) in authors" :key="index">
                {{author}}
                <span v-if="index < authors.length -1">, </span> <!--print a coma and space-->
            </span>
        </p>

        <h2 v-show="showImage">Great, You want more of Reid</h2>            <!--V-show keeps elements in DOM, unlike v-if which removes them. V-show affects CSS property of visiblity not DOM-->
        <div v-if="showImage">
            <img src="../assets/reid.jpg" />
        </div>
    </div>
</template>



<style scoped>
    .about-page {
        text-align: center;
        margin-top: 20px;
    }
    img {
        max-width: 600px;
    }
</style>