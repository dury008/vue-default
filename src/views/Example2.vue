<template>
    <div>
        <!-- <h1 v-if="type=='A'">A</h1>
        <h1 v-else-if="type=='b'">b</h1>
        <h1 v-else-if="type=='c'">c</h1>
        <h1 v-else>other</h1> -->

        <h1 v-show="bRender">A</h1> <!-- html에는 렌더링되지만 style에서 display none을줌 // 자주화면이 렌더링되다안되다할떄씀 -->
    </div> 
</template>
<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            type: 'A',
            bRender: true
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>