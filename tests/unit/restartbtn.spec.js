import { shallowMount } from '@vue/test-utils'
import RestartBtn from '@/components/RestartBtn.vue'

describe('RestartBtn.vue', () => {
  it('renders when passed', () => {
    // just checks to see if the component renders
    const wrapper = shallowMount(RestartBtn)
    expect(wrapper.exists()).toBe(true)
  })
})