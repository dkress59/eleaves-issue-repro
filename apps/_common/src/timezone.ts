// eslint-disable-next-line no-restricted-imports
import momentTimezone from 'moment-timezone'

momentTimezone.tz.setDefault('Europe/Berlin')
export const moment = momentTimezone
