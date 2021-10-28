import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import mixins from './mixins'
import i18nPlugin from './plugins/i18n.js'
import store from './store.js'

const i18nStrings = {
    en: {
        hi: 'hello!'
    },
    ko: {
        hi: '안녕하세요'
    }
}
createApp(App).use(router).use(VueSweetalert2).mixin(mixins).directive('focus',{
    mounted(el){
        el.focus();
    }
})
.use(store)
.use(i18nPlugin, i18nStrings)
.mount('#app')

window.Kakao.init("60c5d0057918866f0f3fbd5714498cbd");