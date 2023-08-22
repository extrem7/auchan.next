import type { Meta, StoryFn } from '@storybook/vue3'
import { ADeliveryTime } from '.'

const meta: Meta = {
  title: 'UI/DeliveryTime',
  component: ADeliveryTime,
  args: {
    delivery: 'Переглянути час доставки',
    time: 'Найближча доставка сьогодні з 19:00 до 22:00',
  },
}

export default meta

export const DeliveryTime: StoryFn = (props) => (<ADeliveryTime {...props} />)

