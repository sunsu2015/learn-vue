<template>
    <form>
        <slot></slot>
    </form>
</template>

<script>
    export default {
        provide() {
            return  {
                // 将表单实放入provide，可以被子孙的inject接收
                form: this
            }
        },
        props: {
            model: {
                type: Object,
                required: true
            },
            rules: {
                type: Object
            }
        },
        data() {
            return {
                fields: []
            }
        },
        created () {
            this.$on('formItemAdd', item => {
                this.fields.push(item);
            });
        },
        methods: {
            async validate(callback) {
                const result = []
                for(let i=0; i<this.fields.length;i++) {
                    result.push(await this.fields[i].validate());
                }
                if (result.filter(item => item).length) {
                    callback(false);
                } else {
                    callback(true);
                }
            }
        },
    }
</script>

<style lang="css" scoped>

</style>