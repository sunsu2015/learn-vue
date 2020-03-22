<template>
  <div>
    <input :type="type" :value="inputValue" @input="inputHandler" />
    {{someValue}}
  </div>
</template>

<script>
export default {
  inject: ["someValue"],
  props: {
    value: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    }
  },
  data() {
    return {
      inputValue: this.value
    };
  },
  methods: {
    inputHandler(e) {
      this.inputValue = e.target.value;
      this.$emit("input", this.inputValue);
      console.log(this.$parent);
      this.$parent.$emit("validate");
    //   this.dispatch("k-form-item", "validate", null);
    },
    dispatch(componentName, eventName, value) {
      let parent = this.$parent || this.$root;
      let name = parent.$options._componentTag;
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;
        if (parent) {
          name = parent.$options._componentTag;
        }
      }
      if (parent) {
          parent.$emit(eventName, value);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>