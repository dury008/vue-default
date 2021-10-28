<template>
    <div>
        <button type="button" @click="getProductList">조회</button>
        <table>
            <thead>
                <tr>
                    <th>제품명</th>
                    <th>가격</th>
                    <th>배송비</th>
                    <th>카테고리</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, id) in productList" :key="id" >
                    <td>{{product.product_name}}</td>
                    <td>{{product.price}}</td>
                    <td>{{product.delivery_price}}</td>
                    <td>{{product.category}}</td>

                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: '',
    components: {},
    data() {
        return {
            productList: []
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        async getProductList(){
            this.productList = await this.api("https://6885c759-f95f-47e3-bf1a-cfde97eb3fe5.mock.pstmn.io/productList", "get",{})
            console.log(this.productList);
        },
        async api(url, method, data) {
            return (await axios({
                method: method,
                url: url,
                data: data
            }).catch(e=> {
                console.log(e);
            })).data;
        }
    }
}
</script>