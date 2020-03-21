<template>
    <div>
        <label v-if="label">{{label}}</label>
        <slot></slot>
        <p v-if="errorMessage" class="error">{{errorMessage}}</p>
    </div>
</template>

<script>
    export default {
        props: {
            label: {
                type: String,
                default: ''
            },
            prop: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                errorMessage: ''
            }
        },
    }
</script>

<style lang="css" scoped>
    .error {
        color: red
    }
</style>