import type { Meta, StoryFn } from '@storybook/vue3'
import { ASwiper } from '.'

const meta: Meta = {
  title: 'UI/Swiper',
  component: ASwiper,
}

export default meta

export const Swiper: StoryFn = (props) => (<ASwiper {...props} />)
