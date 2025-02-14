import type { Locale } from '../types'
import formatDistance from './_lib/formatDistance/index';
import formatLong from './_lib/formatLong/index';
import formatRelative from './_lib/formatRelative/index';
import localize from './_lib/localize/index';
import match from './_lib/match/index';

/**
 * @type {Locale}
 * @category Locales
 * @summary Māori locale (New Zealand).
 * @language Māori
 * @iso-639-2 mao
 * @author Giovanni Poliko [@gpoliko]{@link https://github.com/gpoliko}
 */
const locale: Locale = {
  code: 'mi-NZ',
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 1 /* Monday */,
    firstWeekContainsDate: 4,
  },
}

export default locale
