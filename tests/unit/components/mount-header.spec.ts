import { shallowMount } from '@vue/test-utils'
import CardComponent from '@/components/CardComponent.vue'

describe('CardComponent.vue', () => {
  it('renders props.moneyValue when passed', () => {
    const moneyValue = 10
    const wrapper = shallowMount(CardComponent, {
      props: { moneyValue }
    })
    expect(wrapper.text()).toMatch('R$ 10,00')
  })
})
