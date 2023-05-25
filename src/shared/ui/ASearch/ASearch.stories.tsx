import type { Meta, StoryFn } from '@storybook/vue3'
import { ASearch } from '.'

const meta: Meta = {
  title: 'UI/Search',
  component: ASearch,
}

export default meta

export const Search: StoryFn = (props) => (<ASearch {...props} />)
