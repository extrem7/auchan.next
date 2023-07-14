import type { Meta, StoryFn } from '@storybook/vue3'
import { AGoods } from '.'

const meta: Meta = {
  title: 'UI/AGoods',
  component: AGoods,
  args: {
    icon: 'https://img3.zakaz.ua/src.1614846520.ad72436478c_2021-03-04_Tatyana/src.1614846520.SNCPSG10.obj.0.1.jpg.oe.jpg.pf.jpg.350nowm.jpg.350x.jpg',
    price: '20.30 грн',
    text: 'Вода мінеральна Моршинська негазована 1,5л',
    liters: '1,5 л',
    isActive: false,
  },
}

export default meta

export const Goods: StoryFn = (props) => (<AGoods {...props} />)

export const IsActive = Goods.bind({})
IsActive.args = { isActive: true }
