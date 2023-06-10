import { shallowMount } from '@vue/test-utils'
import StartStopBtn from '@/components/StartStopBtn.vue'

describe('StartStopBtn.vue', () => {
  it('renders props.text when passed', () => {
    const text = 'StartBtn'
    const wrapper = shallowMount(StartStopBtn, {
      props: { text }
    })
    expect(wrapper.text()).toMatch(text)
  })
})
