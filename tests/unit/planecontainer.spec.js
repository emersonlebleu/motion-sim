import { shallowMount } from '@vue/test-utils'
import PlaneContainer from '@/components/PlaneContainer.vue'

describe('PlaneContainer.vue', () => {
  it('renders when passed', () => {
    // just checks to see if the component renders
    const wrapper = shallowMount(PlaneContainer)
    expect(wrapper.exists()).toBe(true)
  })
})