<template>
  <!-- Main Page -->
  <q-page class="flex flex-center">

    <!-- Authentication Frame -->
    <card-container class="auth-frame">

      <!-- Authentication Header -->
      <card-section class="auth-section">
        <!-- Title -->
        <div class="auth-header-title">{{ $t('application.title') }}</div>
        <!-- Copyright & Version -->
        <!--suppress JSCheckFunctionSignatures -->
        <div class="auth-header-version" v-html="$t('application.copyrightVersion', {v: versionStr})"/>
      </card-section>

      <!-- Authentication Page -->
      <card-section separator class="auth-section">
        <!-- Message Row -->
        <div class="row">
          <!-- Message Column -->
          <div class="col auth-message">{{ message }}</div>
        </div>

        <q-form @submit="submit">
          <slot/>
        </q-form>
      </card-section>

      <!-- Authentication Footer -->
      <card-section>
        <div class="row">
          <div class="col auth-language">
            <!-- Language Select -->
            <c-select v-model="currentLanguage" :options="languageOptions" style="width: 175px" icon="language"
                      icon-size="sm" @update:model-value="switchLanguage"/>
          </div>
          <!-- Dark Mode Column -->
          <div class="col auth-darkmode">
            <!-- Dark Mode Button -->
            <c-button look="icon" :icon="darkMode ? 'light_mode' : 'dark_mode'" :tooltip="darkModeLabel"
                      @click="toggleDarkMode"/>
          </div>
        </div>
      </card-section>
    </card-container>

  </q-page>
</template>

<style lang="scss">

.auth-frame {
  width: 500px;
  max-width: 500px;
}

.auth-section {
  padding: 24px;
}

.auth-header-title {
  text-align: center;
  font-size: 2rem;
}

.auth-header-version {
  text-align: center;
  font-size: 0.75rem;
}

.auth-message {
  font-size: 0.75rem;
  margin-bottom: 16px;
  height: 80px;
}

.auth-darkmode {
  text-align: right;
}

.auth-language {
  text-align: left;
}

</style>

<script>
import BaseMixin from "components/mixins/BaseMixin.vue";
import CardContainer from "components/common/CardContainer.vue";
import CardSection from "components/common/CardSection.vue";
import CButton from "components/common/CButton.vue";
import {version} from "src/config/version";
import {getLanguageOptions} from "src/scripts/options";
import CSelect from "components/common/CSelect.vue";

export default {
  /**
   * The name of this component.
   */
  name: "AuthenticationFrame",

  /**
   * The used components by this component.
   */
  components: {
    CSelect,
    CButton,
    CardSection,
    CardContainer
  },

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
    // A message shown above the content of the authentication frame.
    message: {
      type: String
    },
    // A function that is called when the form is submitted.
    submit: {
      type: Function,
      required: true
    }
  },

  /**
   * The member variables of this component.
   */
  data() {
    return {
      // Dark Mode
      darkMode: false,
      // Version
      versionStr: version.major + "." + version.minor + " (" + version.build + ")",
      // Language Options
      languageOptions: [],
      // Current Language
      currentLanguage: ""
    }
  },

  /**
   * Event method that is called before this component is mounted.
   */
  beforeMount() {
    // Get current dark mode from cookie
    this.darkMode = this.quasar.cookies.get("darkMode") === "true";
    // Switch the dark mode
    this.switchDarkMode();

    // Get current language from cookie
    this.currentLanguage = this.quasar.cookies.get("language");
    if (!this.currentLanguage)
      // If there is no cookie get it from browser
      this.currentLanguage = navigator.language;
    if (!this.currentLanguage)
      // If the browser have no language use english as default
      this.currentLanguage = "en-US";
    // Switch to current language
    this.switchLanguage();
  },

  /**
   * The member methods of this component.
   */
  methods: {
    /**
     * This method is called when user wants to change the dark mode.
     */
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      this.switchDarkMode();
    },
    /**
     * This method is called when the dark mode has changed.
     */
    switchDarkMode() {
      // Set dark mode
      this.quasar.dark.set(this.darkMode);
      // Store dark mode flag in cookie
      this.quasar.cookies.set("darkMode", this.darkMode ? "true" : "false", {expires: 365});
    },
    /**
     * This method is called when the user has changed the language.
     */
    switchLanguage() {
      // Set the new language
      this.$i18n.locale = this.currentLanguage;
      // Reload the language options
      this.languageOptions = getLanguageOptions(this.$t);
      // Set language cookie
      this.quasar.cookies.set("language", this.currentLanguage, {expires: 365});
    }
  },

  /**
   * Computed values of this component.
   */
  computed: {
    /**
     * Returns the tooltip for the dark mode button.
     * @return {string} Tooltip text.
     */
    darkModeLabel() {
      return this.darkMode ? this.$t("tooltip.toLightMode") : this.$t("tooltip.toDarkMode");
    }
  },
}
</script>
