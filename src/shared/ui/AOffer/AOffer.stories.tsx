import type { Meta, StoryFn } from '@storybook/vue3'
import { AOffer } from '.'

const meta: Meta = {
  title: 'UI/Offer',
  component: AOffer,
}

export default meta

export const Offer: StoryFn = (props) => (<AOffer {...props} />)
