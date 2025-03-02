<script>
    import SubmissionComponent from '../components/SubmissionComponet.vue'
    export default {
        name: 'ContactPage',
        data(){
            return{
                urlOfCreator: 'http://www.reidgillis.com',
            }
        },
        components: {
            SubmissionComponent
        },
    }

</script>



<template>
    <div class="contact-page">
        <div>
            <submission-component  ></submission-component>
        </div>

        <div>
            <a v-bind:href="urlOfCreator">Creator website</a>
        </div>
    </div>



</template>