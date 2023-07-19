import { Alertcomponent } from "./Alert";

export default {
  title:"Alert ",
  component: Alertcomponent,
  tags: ['autodocs'],

};

// export const Default = ();

export const Primary = {
    args: {
      variant: 'primary',
    },
  };
  
  export const Danger = {
    args: {
        variant: 'danger',
    },
  };