import {defineComponent} from "vue";
import {Credentials} from "@/model/Credentials";
import * as authService from "@/service/AuthService"

export default defineComponent({
  data() {
    return {
      user: {} as Credentials,
    }
  },

  computed: {
    rules() {
      return {
        username: [
          {required: true, message: this.$t('message.usernameError'), trigger: 'blur'}
        ],
        password: [
          {required: true, message: this.$t('message.passwordError'), trigger: 'blur'}
        ]
      };
    }
  },

  mounted() {
    authService.logout();
  },

  methods: {
    async login(): Promise<void> {
      const loginForm = this.$refs.loginForm as any;
      try {
        await loginForm.validate();
      } catch (error) {
        return;
      }

      try {
        await authService.login(this.user);
        await this.$router.push('/dashboard');
      } catch (error) {
        this.$message(this.$t('message.userInvalidated'));
      }
    },
  }
})