<template>
    <div>
        <ProvideInjectChild/>
    </div>
</template>
<script>
import ProvideInjectChild from './ProvideInjectChild'
export default {
    name: '',
    components: {ProvideInjectChild},
    data() {
        return {
            items: ["a","h"]
        };
    },
    provide() {
        return{
            itemLength: this.items.length
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>