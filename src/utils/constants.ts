export const BASE_URL_TEST = 'https://api.publicapis.org/entries';
const BASE_URL_API_RITM = 'https://api.ritm.studio';
const PATTERN_EMAIL: string =
  '^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@' +
  '[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$';

const DESKTOP_WIDTH = 1440;
const MOBILE_WIDTH = 320;
const PAD_WIDTH = 768;
const PAD_WIDTH_WITHOUT = PAD_WIDTH - 1;

export {
  PATTERN_EMAIL,
  DESKTOP_WIDTH,
  PAD_WIDTH,
  PAD_WIDTH_WITHOUT,
  MOBILE_WIDTH,
  BASE_URL_API_RITM
};
