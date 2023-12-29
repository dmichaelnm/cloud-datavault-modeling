<template xmlns:template="http://www.w3.org/1999/html">

  <!-- Card Frame -->
  <div :class="'card ' + classAttr">
    <!-- Slot for child components -->
    <slot/>
  </div>

</template>

<style lang="scss">

.card {
  border-radius: 8px;
}

.body--light .card {
  background-color: #FFFFFF;
  border: 1px solid #D0D7DE;
  box-shadow: 5px 5px 15px 0 rgba(0, 0, 0, 0.15);
}

.body--dark .card {
  background-color: #0D1117;
  border: 1px solid #30363D;
  box-shadow: 5px 5px 15px 0 rgba(0, 0, 0, 0.85);
}

</style>

<script>
export default {
  /**
   * The name of this component.
   */
  name: "CardContainer",

  /**
   * The public properties of this component.
   */
  props: {
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
