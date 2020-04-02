<template>
    <div>
        id: {{$route.params.id}}<br>
        param1: {{$route.params.param1}}<br>
        foo: {{$route.query.foo}}<br>
        id: {{id}}<br>
        param1: {{param1}}<br>
        foo: {{foo}}
    </div>
</template>

<script>
    export default {
        props: ['id', 'param1', 'foo'],
    }
</script>

<style lang="scss" scoped>

</style>