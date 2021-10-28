<template>
    <div>
        <button type="button" @click="one(), two()">Add 1</button>
        <p>the count is : {{counter}}</p>
        <select v-model="city" @change="changeSelect">
            <option value="서울">서울</option>
        </select>

        <input type="text" v-model="textValue" @keyup.enter="showValue"/>
    </div>
</template>
<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            counter: 0,
            city: "",
            textValue:""
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        increaseCounter(){
            this.counter = this.counter +1;
        },
        one(){
            alert('one');
        },
        two(){
            alert("two");
        },
        changeSelect(){
            alert(this.city);
        },
        showValue(){
            //tab, delete, esc, space, up, down, left, right
            alert(this.textValue)
        }

    }
}
</script>