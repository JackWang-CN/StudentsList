import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        list: [
            {
                serial_number: 0,
                name: "张三",
                sex: "男",
                nation: "汉",
                grade: "三年二班",
                phone: "123456789",
                idCard: "51390112345678",
                subject: "计算机网络安全",
                guardian: { name: "张老大", phone: "13882977653" }
            },
            {
                serial_number: 1,
                name: "李四",
                sex: "男",
                nation: "汉",
                grade: "三年二班",
                phone: "123456789",
                idCard: "51390112345678",
                subject: "计算机网络安全",
                guardian: { name: "张老大", phone: "13882977653" }
            },
            {
                serial_number: 2,
                name: "王五",
                sex: "男",
                nation: "汉",
                grade: "三年二班",
                phone: "123456789",
                idCard: "51390112345678",
                subject: "计算机网络安全",
                guardian: { name: "张老大", phone: "13882977653" }
            },
            {
                serial_number: 3,
                name: "小红",
                sex: "女",
                nation: "汉",
                grade: "三年二班",
                phone: "123456789",
                idCard: "51390112345678",
                subject: "计算机网络安全",
                guardian: { name: "张老大", phone: "13882977653" }
            },
            {
                serial_number: 4,
                name: "小娟",
                sex: "女",
                nation: "汉",
                grade: "三年二班",
                phone: "123456789",
                idCard: "51390112345678",
                subject: "计算机网络安全",
                guardian: { name: "张老大", phone: "13882977653" }
            }
        ]
    },

    mutations: {
        //新增数据
        addInfo(state, obj) {
            obj.serial_number = state.list.length;
            this.state.list.push(obj)
        },

        //修改数据
        changeInfo(state, obj) {
            var index = obj.serial_number;
            var list = this.state.list;
            list[index] = obj;
            this.state.list = [...list]
        }
    },

    actions: {
        updateInfo(comment, obj) {
            comment.commit('changeInfo', obj)
        }
    }
})