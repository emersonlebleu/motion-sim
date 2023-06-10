import { shallowMount } from '@vue/test-utils'
import InfoSection from '@/components/InfoSection.vue'

describe('InfoSection.vue', () => {
  it('renders when passed', () => {
    // just checks to see if the component renders
    const wrapper = shallowMount(InfoSection)
    expect(wrapper.exists()).toBe(true)
  })
})