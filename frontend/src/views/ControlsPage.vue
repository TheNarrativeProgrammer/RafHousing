<script>
    export default {
        name: 'ControlsPage',
        data() {
            return {
                xPositionWithinDiv: 0,
                yPositionWithinDiv: 0

            }
        },
        methods: {
            HandleEvent(eventInfo, number) {
                //console.log(eventInfo.type)
                //if (number) {
                //    console.log(number)
                //}
            },
            HandleMouseMove(eventInfo) {
                this.xPositionWithinDiv = eventInfo.offsetX
                this.yPositionWithinDiv = eventInfo.offsetY
            }
        }
    }

</script>



<template>
    <div class="controls-page">
        <h1>Controls page</h1>
        <div class="box" @mouseover="HandleEvent($event, 5)">
            <p>w</p>
        </div>

        <div class="box" @mouseleave="HandleEvent">
            <p>a</p>
        </div>

        <div class="box" @dblclick="HandleEvent">
            <p>s</p>
        </div>

        <div class="box" @mousemove="HandleMouseMove">
            <p>d</p>
            
        </div>

        <div class="box">
            position - {{xPositionWithinDiv}} {{yPositionWithinDiv}}
        </div>

    </div>


</template>



<style>


</style>