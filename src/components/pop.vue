<template>
    <div>
        <h1 v-text="counter"></h1>
        <button @click="increment">increment</button>
    </div>
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
            this.$store.commit('increment')
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>
