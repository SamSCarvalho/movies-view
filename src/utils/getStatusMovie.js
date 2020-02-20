import {
  RELEASED,
  RELEASED_PT_BR,
  IN_PRODUCTION,
  IN_PRODUCTION_PT_BR,
  NOT_INFORMATION_PT_BR,
  POST_PRODUCTION,
  POST_PRODUCTION_PT_BR,
} from '../constants/statusMovie';

const getStatus = (status) => {
  switch (status) {
    case RELEASED:
      return RELEASED_PT_BR;
    case IN_PRODUCTION:
      return IN_PRODUCTION_PT_BR;
    case POST_PRODUCTION:
      return POST_PRODUCTION_PT_BR;
    default:
      return NOT_INFORMATION_PT_BR;
  }
}

export default getStatus;