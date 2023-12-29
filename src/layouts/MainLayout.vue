<template>
  <q-layout>

  </q-layout>
</template>

<script>
import {Account} from "src/scripts/core/Account";
import BaseMixin from "components/mixins/BaseMixin.vue";

export default {
  /**
   * The name of this layout.
   */
  name: "MainLayout",

  /**
   * The used mixins by this layout.
   */
  mixins: [
    BaseMixin
  ],

  /**
   * This method is called before this layout is created.
   */
  beforeCreate() {
    // Registers the event if the Firebase account state has changed.
    Account.registerEventAccountStateChanged((account) => {
      if (account === null) {
        // There is no authenticated Firebase account, redirect to the login page.
        // noinspection JSUnresolvedReference
        this.$router.push({path: "/auth/login"});
      }
    });
  },

  beforeMount() {
    this.quasar.dark.set(true);
  }
}
</script>
