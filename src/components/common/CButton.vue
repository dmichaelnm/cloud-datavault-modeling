<template>
  <!-- Button -->
  <q-btn :flat="flat"
         :round="round"
         :icon="icon"
         :color="color"
         :label="label"
         :type="type"
         :size="size"
         no-caps>
    <!-- Tooltip -->
    <q-tooltip v-if="tooltip">
      {{ tooltip }}
    </q-tooltip>
  </q-btn>
</template>

<script>
export default {
  /**
   * The name of this component.
   */
  name: "CButton",

  /**
   * The public properties of this component.
   */
  props: {
    // The label of the button
    label: {
      type: String
    },
    // The icon of the button.
    icon: {
      type: String
    },
    // The tooltip of the button.
    tooltip: {
      type: String
    },
    // The type of the button.
    type: {
      type: String,
      default: "button"
    },
    // The style of the button.
    look: {
      type: String,
      default: "button"
    },
    // The size of the button
    size: {
      type: String,
      default: "sm"
    }
  },

  /**
   * Computed values of this component.
   */
  computed: {
    /**
     * The computed "flat" attribute depending on the style of the button.
     * @return {boolean} Value for "flat" attribute.
     */
    flat() {
      return this.look !== "button";
    },
    /**
     * The computed "round" attribute depending on the style of the button.
     * @return {boolean} Value for "round" attribute.
     */
    round() {
      return this.look === "icon";
    },
    /**
     * The computed "color" attribute depending on the style of the button.
     * @return {string} Value for "color" attribute.
     */
    color() {
      return this.look === "button" ? "secondary" : "primary";
    }
  },
}
</script>
