<template>
    <div>Composition Calculatior</div>
    <div>
        <input type="text" v-model.number="num1" />
        <span> + </span>
        <input type="text" v-model.number="num2" />
        <span> = </span>
        <span>{{result}}</span>
    </div>
</template>
<script>
import {reactive, computed, toRefs} from 'vue';

function plusCalculator() {
    let state = reactive({
        num1:0,
        num2:0,
        result: computed(()=> parseInt(state.num1)+ parseInt(state.num2)), 
    });

    return toRefs(state)
}
export default {
    name: '',
    components: {},
    data() {
        return {
            sampleData: ''
        };
    },
    setup() { //composition api
        let {num1, num2, result} = plusCalculator();//외부 함수

        return{
            num1, num2, result
        }
    },
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>