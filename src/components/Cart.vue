<template>
    <div>
        <p>{{name}}</p>
        <table>
            <tr>
                <th></th>
                <th>名称</th>
                <th>单价</th>
                <th>数量</th>
                <th>价格</th>
            </tr>
            <tr v-for="(c, i) in cart" :key="c.id" :class="{active: c.active}">
                <td><input type="checkbox" v-model=c.active></td>
                <td>{{c.name}}</td>
                <td>{{c.price}}</td>
                <td><button @click="minus(i)">-</button>{{c.count}}<button @click="plus(c)">+</button></td>
                <td>{{c.count * c.price}}</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td>{{activeCount}}</td>
                <td>{{count}}</td>
                <td>{{total}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                cart: []
            }
        },
        created () {
            this.$root.$on('addCart', good => {
                const ret = this.cart.find(item => item.id === good.id);
                if (ret) {
                    ret.count ++;
                } else {
                    this.cart.push({
                    ...good,
                    count: 1,
                    active: false
                    });
                }
            });
        },
        props: {
            name: {
                type: String,
                default: ''
            }
        },
        methods: {
            minus(i) {
                if(this.cart[i].count === 1) {
                    this.cart.splice(i, 1);
                } else {
                    this.cart[i].count --;
                }
            },
            plus(c) {
                c.count ++;
            }
        },
        computed: {
            activeCount() {
                return this.cart.filter(c => c.active).length;
            },
            count() {
                return this.cart.length;
            },
            total() {
                let num = 0;
                this.cart.forEach(c => {
                    if (c.active) {
                        num += c.price * c.count;
                    }
                });
                return num;
            }
        },
    }
</script>

<style scoped>
.active {
    background: green;
}
</style>