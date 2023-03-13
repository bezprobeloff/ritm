const PATTERN_EMAIL: string =
  '^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@' +
  '[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$';

const DESKTOP_WIDTH: number = 1440;
const MOBILE_WIDTH: number = 375;
const PAD_WIDTH: number = 768;

export { PATTERN_EMAIL, DESKTOP_WIDTH, PAD_WIDTH, MOBILE_WIDTH };
