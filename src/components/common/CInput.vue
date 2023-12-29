<template>
  <!--suppress JSValidateTypes -->
  <q-input :model-value="modelValue"
           dense
           outlined
           :autofocus="autoFocus"
           :placeholder="label"
           :type="type"
           @update:model-value="updateModelValue"/>
</template>

<style lang="scss">


</style>

<script>
import BaseMixin from "components/mixins/BaseMixin.vue";

export default {
  /**
   * The name of this component.
   */
  name: "CInput",

  /**
   * The used mixins by this component.
   */
  mixins: [
    BaseMixin
  ],

  /**
   * The public properties of this component.
   */
  props: {
    // The value of the input component.
    modelValue: {
      type: String
    },
    // The label of the input component.
    label: {
      type: String
    },
    // The type of the input component.
    type: {
      type: String,
      default: "text"
    },
    // Flag controlling whether this input component has focus.
    autoFocus: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    /**
     * Update the value of this input component and emits an update event.
     * @param newValue The new value of the input component.
     */
    updateModelValue(newValue) {
      this.$emit("update:model-value", newValue);
    }
  }
}
</script>
