import type { Meta, StoryFn } from '@storybook/vue3'
import { AListItem } from '.'
import Price from './price.svg'

const meta: Meta = {
  title: 'UI/AListItem',
  component: AListItem,
}

export default meta

export const ListItem: StoryFn = (props) => (
  <AListItem {...props}>
    {{
      default: 'Ціни як у магазині',
      icon: <Price class='mb-1 mr-3 w-[17px] text-red-800' />,
    }}

  </AListItem>)
