<template>
    <div>
        <input :type="type" :value="inputValue" @input="inputHandler">
        {{someValue}}
    </div>
    
</template>

<script>
    export default {
        inject: ['someValue'],
        props: {
            value: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: 'text'
            }
        },
        data() {
            return {
                inputValue: this.value
            }
        },
        methods: {
            inputHandler(e) {
                this.inputValue = e.target.value;
                this.$emit('input', this.inputValue);
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>