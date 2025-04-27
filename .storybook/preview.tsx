import React from 'react';
import { ConfigProvider } from 'antd';
import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#4a7cfe',
          },
        }}
      >
        <Story />
      </ConfigProvider>
    ),
  ],
};

export default preview;
