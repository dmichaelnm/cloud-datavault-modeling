<template>

  <!-- The row of the card section -->
  <div class="row card-section" :class="classAttr">
    <!-- The column of the card section -->
    <div class="col">
      <!-- Card Section Slot -->
      <slot/>
    </div>
  </div>

  <!-- The separator of the card section -->
  <div class="row" v-show="separator">
    <!-- The separator column -->
    <div class="col card-separator"/>
  </div>

</template>

<style lang="scss">

.card-section {
  padding: 8px;
}

.body--light .card-separator {
  height: 0.5px;
  background-color: #D0D7DE;
}

.body--dark .card-separator {
  height: 1px;
  background-color: #30363D;
}

</style>

<script>
export default {
  /**
   * The name of this component.
   */
  name: "CardSection",

  /**
   * The public properties of this component.
   */
  props: {
    // Flag controlling the appearance of a separator below the section.
    separator: {
      type: Boolean,
      default: false
    },
    // Attribute containing the class styles of the component.
    class: {
      type: String
    }
  },

  /**
   * Computed values of this component.
   */
  computed: {
    /**
     * Returns the value of the class attribute.
     * @return {string} The value of the specified class attribute.
     */
    classAttr() {
      return this.class;
    }
  }
}
</script>
