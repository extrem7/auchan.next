import type { Meta, StoryFn } from '@storybook/vue3'
import { AMenuItem } from '.'
import Percent from './percent.svg'

const meta: Meta = {
  title: 'UI/AMenuItem',
  component: AMenuItem,
}

export default meta

export const MenuItem: StoryFn = (props) => (
  <AMenuItem {...props}>
    {{
      default: 'Акції',
      icon: <Percent class='mr-2 w-[11px] text-white' />,
    }}

  </AMenuItem>)
