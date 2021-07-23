import { mount, RouterLinkStub } from '@vue/test-utils'
import AppNavigation from '@/components/app/Navigation.vue'

describe('AppNavigation component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(AppNavigation, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
