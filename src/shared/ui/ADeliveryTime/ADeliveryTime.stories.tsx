import type { Meta, StoryFn } from '@storybook/vue3'
import { ADeliveryTime } from '.'

const meta: Meta = {
  title: 'UI/DeliveryTime',
  component: ADeliveryTime,
}

export default meta

export const DeliveryTime: StoryFn = (props) => (
  <ADeliveryTime {...props}>
    {{
      time: 'Найближча доставка сьогодні з 19:00 до 22:00',
      delivery: 'Переглянути час доставки',
    }}

  </ADeliveryTime>)

