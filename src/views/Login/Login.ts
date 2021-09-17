import {defineComponent, onMounted, ref} from 'vue';
import {useRouter} from 'vue-router';
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
    const loginForm = ref<any>(null);
    const user = ref<Credentials>({} as Credentials)

    const login = async (): Promise<void> => {
      try {
        await loginForm.value.validate()
      } catch (error) {
        return
      }

      await authService.login(user.value)
      await useRouter().push('/dashboard')
    }

    onMounted(() => {
      authService.logout()
    })

    return {
      user,
      login
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
  }
})