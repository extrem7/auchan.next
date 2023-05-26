import type { Meta, StoryFn } from '@storybook/vue3'
import { AButton } from '.'
import Category from './category.svg'

const meta: Meta = {
  title: 'UI/Button',
  component: AButton,
}

export default meta

export const Button: StoryFn = (props) => (
  <AButton {...props}>
    {{
      default: 'Каталог товарів',
      icon: <Category class="mr-2 h-6 w-10 text-white" />,
    }}

  </AButton>)
