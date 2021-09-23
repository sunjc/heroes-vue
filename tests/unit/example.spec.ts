import {shallowMount} from '@vue/test-utils'
import HelloWorld from '../../src/components/HelloWorld/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: {msg}
    })
    expect(wrapper.text()).toContain(msg)
  })
})
