export default {
  title: 'Components/Base/Tag',
  argTypes: {
    slotContent: {
      control: 'text',
      defaultValue: 'Tag'
    }
  }
}

export const Default = (arg, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<BaseTag v-bind="$props">{{ slotContent }}</BaseTag>'
})
