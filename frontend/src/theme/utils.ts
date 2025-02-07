import { theme } from './index';

export const getGradient = () => 
  `bg-gradient-to-br from-[${theme.colors.primary.start}] to-[${theme.colors.primary.end}]`;

export const getWhiteOpacity = (opacity: 5 | 10 | 20 | 80) =>
  `bg-white bg-opacity-${opacity}`; 