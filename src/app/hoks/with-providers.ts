import compose from 'compose-function'

import { withI18 } from 'app/hoks/with-i18'
import { withTheme } from 'app/hoks/with-theme'

export const withProviders = compose(withTheme, withI18)
