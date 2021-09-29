import { Button } from './Button'

export default {
  title: 'components/atoms/button',
  component: Button,
}

const Template = (args) => <Button {...args}>Add</Button>

export const Default = Template.bind({})

export const Big = Template.bind({})
Big.args = {
  isBig: true,
}
