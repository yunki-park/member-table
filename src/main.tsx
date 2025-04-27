import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import App from './App';

import { designTokens } from '@/styles/design-tokens';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: designTokens.colorPrimaryBase,
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>,
);
