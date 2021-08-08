import {defineComponent} from "vue";
import {Credentials} from "@/model/Credentials";
import * as authService from "@/service/AuthService"

export default defineComponent({
  data() {
    return {
      user: {} as Credentials,
      rules: {
        username: [
          {required: true, message: 'Please input your Username!', trigger: 'blur'}
        ],
        password: [
          {required: true, message: 'Please input your Password!', trigger: 'blur'}
        ]
      }
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
        this.$router.push('/dashboard');
      } catch (error) {
        this.$message('错误的用户名或密码!');
      }
    },
  }
})