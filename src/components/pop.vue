<template>
    <h1 v-text="counter"></h1>
</template>

<script>

export default {
    name: 'pop',
    data () {
        return {
            counter: 0
        }
    },
    methods: {
        increment () {
            this.counter++
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>
