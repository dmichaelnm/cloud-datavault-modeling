<script>
import {useQuasar} from "quasar";

export default {
  /**
   * The name of this mixin.
   */
  name: "BaseMixin",

  /**
   * The member attributes of this mixin.
   */
  data() {
    return {
      // Quasar instance
      quasar: useQuasar()
    }
  }
}
</script>
