<template>
    <div>
        <div>likes=> {{likes}}</div>
        <div>isOk => {{isOk}}</div>
        <div>author name: {{author.name}}</div>

        <button type="button" @click="childFunction" ref="child_btn">자식에있는클릭</button>

        <h1>{{message}}</h1>
    </div>
</template>
<script>
export default {
    name: '',
    components: {},
    props: {
        likes:{
            type: Number,
            default: 0
        },
        isOk:{
            type: Boolean,
            default: false
        },
        commentIds: {
            type: Array
        },
        author: {
            type: Object
        }
    },
    data() {
        return {
            message: '자식에 있던 메세지'
        };
    },
    setup() {},
    created() {},
    mounted() {
        console.log(this.commentIds);
    },
    unmounted() {},
    methods: {
        childFunction(){
            this.$swal('부모컴포넌트에서 직접 발생시킨 이벤트');
        },
    }
}
</script>