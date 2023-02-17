import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    exclude: configDefaults.exclude,
    testTimeout: 30000,
    reporters: [
      'verbose',
      'vitest-sonar-reporter'
    ],
    outputFile: 'coverage/sonar-report.xml',
    coverage: {
      enabled: true,
      reporter: ['lcov']
    }
  },
})
