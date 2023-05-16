import type { Meta, StoryFn } from '@storybook/vue3'
import { AHeader } from '.'
 
const meta: Meta = {
  title: 'UI/Header',
  component: AHeader,
}

export default meta

export const Header: StoryFn = (props) => (
  <div class="w-[100rem]">
    <AHeader {...props} />
  </div>
)
