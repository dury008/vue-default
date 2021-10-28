<template>
    <div>
        <page-title :title="title" />
        <button type="button" @click="callChildFunction" >부모에 있는 클릭</button>
        <ChildComponent 
            :likes="likes" 
            :isOk="true"
            :commentIds="[1,5,3,4]"
            :author="author"

            ref="child_component" 
        />

        <ChildComponent2 ref="child_component2" @send-message="SendMessage" />
        <h2>{{parentMsg}}</h2>
        
        <button type="button" @click="showData">자식데이터 동기화</button>

    </div>
</template>
<script>
import PageTitle from '../components/PageTitle'
import ChildComponent from '../components/ChildComponent'
import ChildComponent2 from '../components/ChildComponent2'
export default {
    name: '',
    components: {'page-title':PageTitle, ChildComponent, ChildComponent2},
    data() {
        return {
            title: '부모컴포넌트에서 전송할 페이지 타이틀',
            likes: 23,
            author: {name:'홍길동', company: '회사이름'},
            parentMsg: ''
        };
    },
    computed: {
        msg(){
            return this.$refs.child_component2.message;
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        callChildFunction(){
            // this.$refs.child_component.$refs.child_btn.click();
            //this.$refs.child_component.childFunction();
            this.$refs.child_component.message = "잉기모리";
        },
        SendMessage(msg) {
            this.$swal(msg);
            this.parentMsg = msg;
        },
        showData() {
            alert(this.msg);
        }
    }
}
</script>