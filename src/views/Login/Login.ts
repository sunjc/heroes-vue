import {defineComponent} from 'vue';
import {NButton, NForm, NFormItem, NIcon, NInput} from 'naive-ui';
import {LockClosedOutline, Person} from '@vicons/ionicons5';
import {Credentials} from '../../model/Credentials';
import * as authService from '../../service/AuthService';

export default defineComponent({
  name: 'Login',

  components: {
    LockClosedOutline,
    Person,
    NButton,
    NForm,
    NFormItem,
    NIcon,
    NInput
  },

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

      await authService.login(this.user);
      await this.$router.push('/dashboard');
    }
  }
})