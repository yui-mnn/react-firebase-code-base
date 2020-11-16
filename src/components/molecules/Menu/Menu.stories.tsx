import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';

import Component, { Props } from './Menu';

export default {
  title: 'molecules/Menu',
  component: Component,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story<Props> = (args) => <Component {...args} />;

export const Primary = Template.bind({});