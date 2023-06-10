import { shallowMount } from '@vue/test-utils'
import AddSphereBtn from '@/components/AddSphereBtn.vue'

describe('AddSphereBtn.vue', () => {
  it('renders when passed', () => {
    // just checks to see if the component renders
    const wrapper = shallowMount(AddSphereBtn)
    expect(wrapper.exists()).toBe(true)
  })
})