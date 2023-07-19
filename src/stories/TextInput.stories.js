import InputText from "./TextInput";

export default {
  title:"TextInput",
  component: InputText,
  tags: ['autodocs'],

};

export const Default = () => <InputText />;


export const Large = {
  args: {
    size: 'large',
  },
};

export const Small = {
  args: {
    size: 'small',
  },
};