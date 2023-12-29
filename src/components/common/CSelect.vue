<template>
  <!-- Select -->
  <q-select :model-value="modelValue"
            :options="options"
            dense outlined options-dense map-options emit-value
            @update:model-value="updateModelValue">

    <!-- Icon Template -->
    <template v-slot:before v-if="icon">
      <!-- Icon -->
      <q-icon :name="icon" :size="iconSize"/>
    </template>

    <!-- Option Template -->
    <template v-slot:option="props">
      <!-- Option Slot -->
      <slot name="option" :props="props">
        <!-- Option Item -->
        <q-item dense clickable v-close-popup v-bind="props.itemProps">
          <!-- Item Section -->
          <q-item-section class="q-field">{{ props.opt.label }}</q-item-section>
        </q-item>
      </slot>
    </template>

  </q-select>
</template>

<script>
export default {
  /**
   * The name of this component.
   */
  name: "CSelect",

  /**
   * The public properties of this component.
   */
  props: {
    // The value of this select component.
    modelValue: {
      type: String
    },
    // The options array of the select component.
    options: {
      type: Array,
      required: true
    },
    // An optional icon shown on the left side of the select component.
    icon: {
      type: String
    },
    // The size of the icon
    iconSize: {
      type: String,
      default: "md"
    }
  },

  /**
   * The member methods of this component.
   */
  methods: {
    /**
     * Fires an event that the value of this select component was updated.
     * @param newValue The new value.
     */
    updateModelValue(newValue) {
      this.$emit("update:model-value", newValue);
    }
  },
}
</script>
