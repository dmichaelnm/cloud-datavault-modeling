<template>
  <!-- Authentication Frame -->
  <authentication-frame :message="$t('authentication.message.login')"
                        :submit="onSubmit">

    <!-- Form Container -->
    <div class="q-col-gutter-y-md">

      <!-- Email Row -->
      <div class="row">
        <!-- Email Column -->
        <div class="col">
          <!-- Email Input Component -->
          <c-input v-model="emailAddress" :label="$t('inputLabel.emailAddress')" :auto-focus="emailAddress===''"/>
        </div>
      </div>

      <!-- Password Row -->
      <div class="row">
        <!-- Password Column -->
        <div class="col">
          <!-- Password Input Component -->
          <c-input v-model="password" :label="$t('inputLabel.password')" type="password"
                   :auto-focus="emailAddress !== ''"/>
        </div>
      </div>

      <!-- Button Row -->
      <div class="row">
        <!-- Button Column -->
        <div class="col login-button">
          <!-- Login Button -->
          <c-button :label="$t('buttonLabel.login')"/>
        </div>
      </div>

      <!-- Link Row -->
      <div class="row">
        <!-- Link Column -->
        <div class="col link-button">
          <!-- Register Account Link -->
          <c-button look="link" :label="$t('buttonLabel.registerAccount')"/>
          <!-- Forgot Password Link -->
          <c-button look="link" :label="$t('buttonLabel.forgotPassword')"/>
        </div>
      </div>

    </div>

  </authentication-frame>
</template>

<style lang="scss">

.login-button {
  text-align: center;
}

.link-button {
  text-align: center;
}

</style>

<script>
import AuthenticationFrame from "components/authentication/AuthenticationFrame.vue";
import CInput from "components/common/CInput.vue";
import CButton from "components/common/CButton.vue";
import BaseMixin from "components/mixins/BaseMixin.vue";

export default {
  /**
   * The name of this page.
   */
  name: "LoginPage",

  /**
   * The used components by this page.
   */
  components: {
    CButton,
    CInput,
    AuthenticationFrame
  },

  /**
   * The used mixins by this page.
   */
  mixins: [
    BaseMixin
  ],

  /**
   * The member variables of this component.
   */
  data() {
    return {
      // Email Address
      emailAddress: "",
      // Password
      password: ""
    }
  },

  /**
   * Event method that is called before this component is mounted.
   */
  beforeMount() {
    // Get email address from cookie
    this.emailAddress = this.quasar.cookies.get("email");
  },

  /**
   * The member methods of this component.
   */
  methods: {
    /**
     * This event method is called when the user submits the form of this page.
     */
    onSubmit() {

    }
  },
}
</script>
