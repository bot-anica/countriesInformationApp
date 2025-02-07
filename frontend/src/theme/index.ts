export const theme = {
  colors: {
    primary: {
      start: '#9C1AB1',
      end: '#3B0764',
    },
    white: {
      DEFAULT: '#FFFFFF',
      opacity: {
        5: 'rgba(255, 255, 255, 0.05)',
        10: 'rgba(255, 255, 255, 0.1)',
        20: 'rgba(255, 255, 255, 0.2)',
        80: 'rgba(255, 255, 255, 0.8)',
      },
    },
  },
  spacing: {
    container: {
      px: {
        sm: '1rem',
        md: '1.5rem',
        lg: '4rem',
      },
      py: {
        sm: '2rem',
        md: '3rem',
      },
    },
  },
  borderRadius: {
    DEFAULT: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
  },
  fontSize: {
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '4xl': '2.25rem',
    '6xl': '4rem',
  },
  transitions: {
    DEFAULT: '200ms',
  },
};

export type Theme = typeof theme; 