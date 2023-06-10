import { shallowMount } from '@vue/test-utils'
import StartStopBtn from '@/components/StartStopBtn.vue'

describe('StartStopBtn.vue', () => {
  it('renders when passed', () => {
    // just checks to see if the component renders
    const wrapper = shallowMount(StartStopBtn)
    expect(wrapper.exists()).toBe(true)
  })
})
