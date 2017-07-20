<template class="app">
    <pop v-text="count"></pop>
</template>

<script>
import pop from './components/pop'
export default {
    name: 'App',
    data () {
        return {
            //
        }
    },
    computed: {
        count () {
            return this.$store.state.count
        }
    },
    components: {
        pop
    }
}
</script>

<style lang="scss" scoped>
    button{
        background: red;
    }
</style>

