import { mount } from '@vue/test-utils'
import BaseTag from '@/components/base/Tag.vue'

describe('BaseTag', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(BaseTag)
    expect(wrapper.vm).toBeTruthy()
  })
})
