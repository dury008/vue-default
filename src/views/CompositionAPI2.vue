<template>
    <div>Composition Calculatior</div>
    <div>
        <input type="text" v-model.number="state.num1" />
        <span> + </span>
        <input type="text" v-model.number="state.num2" />
        <span> = </span>
        <span>{{state.result}}</span>
    </div>
</template>
<script>
import {reactive, computed} from 'vue';
export default {
    name: '',
    components: {},
    data() {
        return {
            sampleData: ''
        };
    },
    setup() { //composition api
        let state = reactive({
            num1:0,
            num2:0,
            result: computed(()=> state.num1 + state.num2)
        });

        return{
            state
        }
    },
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>