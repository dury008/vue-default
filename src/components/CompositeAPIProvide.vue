<template>
    <div>
        <CompositionAPIInject />
    </div>
</template>
<script>
import CompositionAPIInject from './CompositionAPIInject.vue';
import {provide} from 'vue';
export default {
    name: '',
    components: {CompositionAPIInject},
    data() {
        return {
            sampleData: ''
        };
    },
    setup() {
        provide('title', 'Vue.js 프로젝트');
    },
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>