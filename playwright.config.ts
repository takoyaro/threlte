import type { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  use: {
    viewport: {
      width: 1280,
      height: 720
    }
  },
  webServer: {
    command: 'npm run build && npm run preview',
    port: 3000
  }
}

export default config
