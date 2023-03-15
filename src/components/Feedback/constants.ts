import { PATTERN_EMAIL } from '../../utils/constants';

const INPUT_NAME_ATTRIBUTES = {
  minLength: 2,
  maxLength: 40,
  required: true
};
const INPUT_MOBILE_ATTRIBUTES = {
  required: true
};

const INPUT_EMAIL_ATTRIBUTES = {
  pattern: PATTERN_EMAIL,
  required: true
};

export { INPUT_NAME_ATTRIBUTES, INPUT_MOBILE_ATTRIBUTES, INPUT_EMAIL_ATTRIBUTES };
