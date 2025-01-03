import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
      'ex_borderInput':'#66686D',
      'ex_dark-100':'rgba(3, 17, 29, 1)',
      'ex_dark-90':'rgba(3, 17, 29, 0.9)',
      'ex_dark-80':'rgba(3, 17, 29, 0.8)',
      'ex_dark-70':'rgba(3, 17, 29, 0.7)',
      'ex_dark-60':'rgba(3, 17, 29, 0.6)',
      'ex_dark-50':'rgba(3, 17, 29, 0.5)',
      'ex_dark-40':'rgba(3, 17, 29, 0.4)',
      'ex_dark-30':'rgba(3, 17, 29, 0.3)',
      'ex_dark-20':'rgba(3, 17, 29, 0.2)',
      'ex_dark-10':'rgba(3, 17, 29, 0.1)',
      'ex_dark-5':'rgba(3, 17, 29, 0.05)',
      'ex_error-100':'rgba(255, 53, 45, 1)',
      'ex_error-90':'rgba(255, 53, 45, 0.9)',
      'ex_error-80':'rgba(255, 53, 45, 0.8)',
      'ex_error-70':'rgba(255, 53, 45, 0.7)',
      'ex_error-60':'rgba(255, 53, 45, 0.6)',
      'ex_error-50':'rgba(255, 53, 45, 0.5)',
      'ex_error-40':'rgba(255, 53, 45, 0.4)',
      'ex_error-30':'rgba(255, 53, 45, 0.3)',
      'ex_error-20':'rgba(255, 53, 45, 0.2)',
      'ex_error-10':'rgba(255, 53, 45, 0.1)',
      'ex_error-5':'rgba(255, 53, 45, 0.05)',
      'ex_primary-100':'rgba(249, 165, 29, 1)',
      'ex_primary-90':'rgba(249, 165, 29, 0.9)',
      'ex_primary-80':'rgba(249, 165, 29, 0.8)',
      'ex_primary-70':'rgba(249, 165, 29, 0.7)',
      'ex_primary-60':'rgba(249, 165, 29, 0.6)',
      'ex_primary-50':'rgba(249, 165, 29, 0.5)',
      'ex_primary-40':'rgba(249, 165, 29, 0.4)',
      'ex_primary-30':'rgba(249, 165, 29, 0.3)',
      'ex_primary-20':'rgba(249, 165, 29, 0.2)',
      'ex_primary-0.90':'rgba(249, 165, 29, 0.1)',
      'ex_primary-5':'rgba(249, 165, 29, 0.05)',
      'ex_secondary-100':'rgba(0, 4, 12, 1)',
      'ex_secondary-90':'rgba(0, 4, 12, 0.9)',
      'ex_secondary-80':'rgba(0, 4, 12, 0.8)',
      'ex_secondary-70':'rgba(0, 4, 12, 0.7)',
      'ex_secondary-60':'rgba(0, 4, 12, 0.6)',
      'ex_secondary-50':'rgba(0, 4, 12, 0.5)',
      'ex_secondary-40':'rgba(0, 4, 12, 0.4)',
      'ex_secondary-30':'rgba(0, 4, 12, 0.3)',
      'ex_secondary-20':'rgba(0, 4, 12, 0.2)',
      'ex_secondary-0.90':'rgba(0, 4, 12, 0.1)',
      'ex_secondary-5':'rgba(0, 4, 12, 0.05)',
      'ex_tertiary-100':'rgba(13, 34, 59, 1)',
      'ex_tertiary-90':'rgba(13, 34, 59, 0.9)',
      'ex_tertiary-80':'rgba(13, 34, 59, 0.8)',
      'ex_tertiary-70':'rgba(13, 34, 59, 0.7)',
      'ex_tertiary-60':'rgba(13, 34, 59, 0.6)',
      'ex_tertiary-50':'rgba(13, 34, 59, 0.5)',
      'ex_tertiary-40':'rgba(13, 34, 59, 0.4)',
      'ex_tertiary-30':'rgba(13, 34, 59, 0.3)',
      'ex_tertiary-20':'rgba(13, 34, 59, 0.2)',
      'ex_tertiary-0.90':'rgba(13, 34, 59, 0.1)',
      'ex_tertiary-5':'rgba(13, 34, 59, 0.05)',
      },
    },
  },
  plugins: [],
} satisfies Config;
