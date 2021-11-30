import {computed, defineComponent, onMounted, ref} from 'vue'
import {useRouter} from 'vue-router'
import {useI18n} from 'vue-i18n'
import {Lock, User} from '@element-plus/icons'
import {Credentials} from '../../model/Credentials'
import * as authService from '../../service/AuthService'

export default defineComponent({
  name: 'Login',

  setup() {
    const {t} = useI18n()
    const router = useRouter()
    const loginForm = ref<any>(null)
    const user = ref<Credentials>({} as Credentials)
    const rules = computed(() => ({
      username: [
        {required: true, message: t('message.usernameError'), trigger: 'blur'}
      ],
      password: [
        {required: true, message: t('message.passwordError'), trigger: 'blur'}
      ]
    }))

    async function login(): Promise<void> {
      try {
        await loginForm.value.validate()
      } catch (error) {
        return
      }

      await authService.login(user.value)
      await router.push('/dashboard')
    }

    onMounted(() => {
      authService.logout()
    })

    return {
      t,
      loginForm,
      user,
      rules,
      login,
      User,
      Lock
    }
  }
})
