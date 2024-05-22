import type { Meta, StoryObj } from '@storybook/angular';
import { LibDomainComponent } from './lib-domain.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<LibDomainComponent> = {
  component: LibDomainComponent,
  title: 'LibDomainComponent',
};
export default meta;
type Story = StoryObj<LibDomainComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/lib-domain works!/gi)).toBeTruthy();
  },
};
