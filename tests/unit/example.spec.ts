import {shallowMount} from '@vue/test-utils'
import Document from '../../src/components/Document/Document.vue'

describe('Document.vue', () => {
  it('renders props.modelValue when passed', () => {
    const modelValue = 'new message'
    const wrapper = shallowMount(Document, {
      props: {modelValue}
    })
    expect(wrapper.html()).toContain(modelValue)
  })
})
