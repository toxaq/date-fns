import type { Quarter } from '../../../../types'
import type { Match } from '../../../types'
import buildMatchFn from '../../../_lib/buildMatchFn/index'
import buildMatchPatternFn from '../../../_lib/buildMatchPatternFn/index'

const matchOrdinalNumberPattern = /^(\d+)/i
const parseOrdinalNumberPattern = /\d+/i

const matchEraPatterns = {
  narrow: /^(BCE|CE)/i,
  abbreviated: /^(BCE|CE)/i,
  wide: /^(BCE|CE)/i,
}
const parseEraPatterns = {
  any: [/^BCE/i, /^CE/i] as const,
}

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^hw[1234]/i,
  wide: /^hauwh[aā] tua(?:tahi|rua|toru|wh[aā])/i,
}
const parseQuarterPatterns = {
  wide: [/tuatahi/, /tuarua/, /tuatoru/, /tuawh[aā]/] as const,
  any: [/1/i, /2/i, /3/i, /4/i] as const,
}

const matchMonthPatterns = {
  narrow: /^[khpmnr]/i,
  abbreviated: /^(kohi|hui|pou|pae|hara|pipi|hōngo|here|mahu|nuku|rangi|haki)/i,
  wide: /^(kohitātea|huitanguru|poutūterangi|paengawhāwhā|haratua|pipiri|hōngongoi|hereturik[oō]k[aā]|mahuru|whiringa-[aā]-nuku|whiringa-[aā]-rangi|hakihea)/i,
}
const parseMonthPatterns = {
  narrow: [
    /^k/i,
    /^h/i,
    /^p/i,
    /^p/i,
    /^h/i,
    /^p/i,
    /^h/i,
    /^h/i,
    /^m/i,
    /^n/i,
    /^r/i,
    /^h/i,
  ] as const,
  any: [
    /^kohi/i,
    /^hui/i,
    /^pou/i,
    /^pae/i,
    /^hara/i,
    /^pipi/i,
    /^hōngo/i,
    /^here/i,
    /^mahu/i,
    /nuku$/i,
    /rangi$/i,
    /^haki/i,
  ] as const,
}

const matchDayPatterns = {
  narrow: /^[tapmh]/i,
  short: /^(tap|hin|tū|apa|par|mer|hor)/i,
  abbreviated: /^(tap|hin|t[uū]|apa|par|mer|hor)\.?/i,
  wide: /^(rātapu|rāhina|rāt[uū]|rāapa|rāpare|rāmere|rāhoroi)/i,
}

const parseDayPatterns = {
  narrow: [/^t/i, /^h/i, /^t/i, /^a/i, /^p/i, /^m/i, /^h/i] as const,
  any: [/tap/i, /hin/i, /tū/i, /apa/i, /par/i, /mer/i, /hor/i] as const,
}

const matchDayPeriodPatterns = {
  narrow: /^(am|pm|i|o|te|ra|waenganui|po|ahiahi|ata)/i,
  any: /^([ap]\s?m|o|ra|waenganui|i te ahiahi|i te ata|i te po)/i,
}

const parseDayPeriodPatterns = {
  any: {
    am: /^am/i,
    pm: /^pm/i,
    midnight: /^waenganui po/i,
    noon: /^rānui/i,
    morning: /ata/i,
    afternoon: /ahiahi/i,
    evening: /ahiahi/i,
    night: /po/i,
  },
}

const match: Match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value),
  }),

  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any',
  }),

  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: (index) => (index + 1) as Quarter,
  }),

  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any',
  }),

  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any',
  }),

  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any',
  }),
}

export default match
