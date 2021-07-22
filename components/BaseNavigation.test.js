import { mount } from '@vue/test-utils'
import BaseNavigation from '@/components/BaseNavigation.vue'

describe('BaseNavigation', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(BaseNavigation)
    expect(wrapper.vm).toBeTruthy()
  })
})
