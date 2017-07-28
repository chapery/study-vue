<template class="app">
    <div>
        <h1>count: {{ count }}</h1>
        <pop></pop>
    </div>
</template>

<script>

import pop from './components/pop'
import {mapState} from 'vuex'

export default {
    name: 'App',
    data () {
        return {
            //
        }
    },
    computed: {
        ...mapState(['count'])
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

