<template>
  <div>
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <p v-if="errorMessage" class="error">{{errorMessage}}</p>
  </div>
</template>

<script>
import schema from "async-validator";
export default {
  inject: ["form"],
  props: {
    label: {
      type: String,
      default: ""
    },
    prop: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      errorMessage: ""
    };
  },
  created() {
    this.$on("validate", this.validate);
  },
  mounted() {
    if (this.prop) {
      this.$parent.$emit("formItemAdd", this);
    }
  },
  methods: {
    validate() {
      return new Promise(resolve => {
        // 依赖async-validator
        if (this.prop) {
          const descriptor = { [this.prop]: this.form.rules[this.prop] };
          const validator = new schema(descriptor);
          validator.validate(
            { [this.prop]: this.form.model[this.prop] },
            errors => {
              if (errors) {
                this.errorMessage = errors[0].message;
              } else {
                this.errorMessage = "";
              }
              resolve(this.errorMessage);
            }
          );
        } else {
          resolve("");
        }
      });
    }
  }
};
</script>

<style lang="css" scoped>
.error {
  color: red;
}
</style>