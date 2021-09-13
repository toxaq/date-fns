import type { FormatDistanceFn, FormatDistanceLocale } from '../../../types'

type FormatDistanceTokenForm = { one: string; other: string } | string

const formatDistanceLocale: FormatDistanceLocale<FormatDistanceTokenForm> = {
  lessThanXSeconds: {
    one: 'iti iho i te hēkona kotahi',
    other: 'iti iho i te {{count}} hēkona',
  },

  xSeconds: {
    one: 'te hēkona kotahi',
    other: 'e {{count}} hēkona',
  },

  halfAMinute: 'hawhe meneti',

  lessThanXMinutes: {
    one: 'iti iho i te meneti kotahi',
    other: 'iti iho i te {{count}} meneti',
  },

  xMinutes: {
    one: 'te meneti kotahi',
    other: 'e {{count}} meneti',
  },

  aboutXHours: {
    one: 'kotahi hāora pea',
    other: 'tata ki te {{count}} hāora',
  },

  xHours: {
    one: 'te hāora kotahi',
    other: 'e {{count}} hāora',
  },

  xDays: {
    one: 'te rā kotahi',
    other: 'e {{count}} ngā rā',
  },

  aboutXWeeks: {
    one: 'tata ki te wiki kotahi',
    other: 'tata ki te {{count}} wiki',
  },

  xWeeks: {
    one: 'te wiki kotahi',
    other: 'e {{count}} wiki',
  },

  aboutXMonths: {
    one: 'kotahi marama pea',
    other: 'tata ki te {{count}} marama',
  },

  xMonths: {
    one: 'te marama kotahi',
    other: 'e {{count}} ngā marama',
  },

  aboutXYears: {
    one: 'tata ki te tau kotahi',
    other: 'tata ki te {{count}} tau',
  },

  xYears: {
    one: 'te tau kotahi',
    other: 'e {{count}} ngā tau',
  },

  overXYears: {
    one: 'neke atu i te tau kotahi',
    other: 'neke atu i te {{count}} tau',
  },

  almostXYears: {
    one: 'tata ki te tau kotahi',
    other: 'tata ki te {{count}} tau',
  },
}

const formatDistance: FormatDistanceFn = (token, count, options) => {
  let result
  const form = formatDistanceLocale[token]
  if (typeof form === 'string') {
    result = form
  } else if (count === 1) {
    result = form.one
  } else {
    result = form.other.replace('{{count}}', String(count))
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'i roto i ' + result
    } else {
      return result + ' i mua'
    }
  }

  return result
}

export default formatDistance
