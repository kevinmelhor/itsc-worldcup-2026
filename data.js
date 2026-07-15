/**
 * mock-data.js
 * ITSC World Cup 2026 Challenge Dashboard
 *
 * This file contains realistic mock data that mirrors the structure of the
 * BALLDONTLIE FIFA API responses. Use this for testing and display before
 * the tournament begins.
 *
 * When going live, set USE_MOCK_DATA = false in index.html and the dashboard
 * will switch to real API calls automatically. This file can then be removed
 * or left in place (it won't be used).
 *
 * API base URL: https://fifa.balldontlie.io
 */

// ============================================================
// GROUPS
// 48 teams in 12 groups of 4.
// Note: Group assignments are approximate placeholders.
// Verify against the official FIFA draw before the tournament.
// ============================================================
const MOCK_GROUPS = {
  A: ["USA", "Uruguay", "Panama", "Belgium"],
  B: ["Mexico", "Jamaica", "Ecuador", "Senegal"],
  C: ["Canada", "Portugal", "Morocco", "Jordan"],
  D: ["France", "Brazil", "South Korea", "South Africa"],
  E: ["Spain", "Argentina", "Japan", "Ivory Coast"],
  F: ["England", "Germany", "Colombia", "Nigeria"],
  G: ["Italy", "Netherlands", "Costa Rica", "Tunisia"],
  H: ["Croatia", "Denmark", "Honduras", "Egypt"],
  I: ["Poland", "Austria", "El Salvador", "Cameroon"],
  J: ["Serbia", "Scotland", "Paraguay", "DR Congo"],
  K: ["Switzerland", "Ukraine", "Australia", "Saudi Arabia"],
  L: ["Iran", "Iraq", "New Zealand", "Uzbekistan"],
};

// ============================================================
// TEAMS
// Mimics the /fifa/worldcup/v1/teams endpoint.
// flagCode maps to https://flagcdn.com/{flagCode}.svg
// ============================================================
const MOCK_TEAMS = [
  // Group A
  { id: 1,  name: "USA",          code: "USA", flagCode: "us",     group: "A" },
  { id: 2,  name: "Uruguay",      code: "URU", flagCode: "uy",     group: "A" },
  { id: 3,  name: "Panama",       code: "PAN", flagCode: "pa",     group: "A" },
  { id: 4,  name: "Belgium",      code: "BEL", flagCode: "be",     group: "A" },
  // Group B
  { id: 5,  name: "Mexico",       code: "MEX", flagCode: "mx",     group: "B" },
  { id: 6,  name: "Jamaica",      code: "JAM", flagCode: "jm",     group: "B" },
  { id: 7,  name: "Ecuador",      code: "ECU", flagCode: "ec",     group: "B" },
  { id: 8,  name: "Senegal",      code: "SEN", flagCode: "sn",     group: "B" },
  // Group C
  { id: 9,  name: "Canada",       code: "CAN", flagCode: "ca",     group: "C" },
  { id: 10, name: "Portugal",     code: "POR", flagCode: "pt",     group: "C" },
  { id: 11, name: "Morocco",      code: "MAR", flagCode: "ma",     group: "C" },
  { id: 12, name: "Jordan",       code: "JOR", flagCode: "jo",     group: "C" },
  // Group D
  { id: 13, name: "France",       code: "FRA", flagCode: "fr",     group: "D" },
  { id: 14, name: "Brazil",       code: "BRA", flagCode: "br",     group: "D" },
  { id: 15, name: "South Korea",  code: "KOR", flagCode: "kr",     group: "D" },
  { id: 16, name: "South Africa", code: "RSA", flagCode: "za",     group: "D" },
  // Group E
  { id: 17, name: "Spain",        code: "ESP", flagCode: "es",     group: "E" },
  { id: 18, name: "Argentina",    code: "ARG", flagCode: "ar",     group: "E" },
  { id: 19, name: "Japan",        code: "JPN", flagCode: "jp",     group: "E" },
  { id: 20, name: "Ivory Coast",  code: "CIV", flagCode: "ci",     group: "E" },
  // Group F
  { id: 21, name: "England",      code: "ENG", flagCode: "gb-eng", group: "F" },
  { id: 22, name: "Germany",      code: "GER", flagCode: "de",     group: "F" },
  { id: 23, name: "Colombia",     code: "COL", flagCode: "co",     group: "F" },
  { id: 24, name: "Nigeria",      code: "NGA", flagCode: "ng",     group: "F" },
  // Group G
  { id: 25, name: "Italy",        code: "ITA", flagCode: "it",     group: "G" },
  { id: 26, name: "Netherlands",  code: "NED", flagCode: "nl",     group: "G" },
  { id: 27, name: "Costa Rica",   code: "CRC", flagCode: "cr",     group: "G" },
  { id: 28, name: "Tunisia",      code: "TUN", flagCode: "tn",     group: "G" },
  // Group H
  { id: 29, name: "Croatia",      code: "CRO", flagCode: "hr",     group: "H" },
  { id: 30, name: "Denmark",      code: "DEN", flagCode: "dk",     group: "H" },
  { id: 31, name: "Honduras",     code: "HON", flagCode: "hn",     group: "H" },
  { id: 32, name: "Egypt",        code: "EGY", flagCode: "eg",     group: "H" },
  // Group I
  { id: 33, name: "Poland",       code: "POL", flagCode: "pl",     group: "I" },
  { id: 34, name: "Austria",      code: "AUT", flagCode: "at",     group: "I" },
  { id: 35, name: "El Salvador",  code: "SLV", flagCode: "sv",     group: "I" },
  { id: 36, name: "Cameroon",     code: "CMR", flagCode: "cm",     group: "I" },
  // Group J
  { id: 37, name: "Serbia",       code: "SRB", flagCode: "rs",     group: "J" },
  { id: 38, name: "Scotland",     code: "SCO", flagCode: "gb-sct", group: "J" },
  { id: 39, name: "Paraguay",     code: "PAR", flagCode: "py",     group: "J" },
  { id: 40, name: "DR Congo",     code: "COD", flagCode: "cd",     group: "J" },
  // Group K
  { id: 41, name: "Switzerland",  code: "SUI", flagCode: "ch",     group: "K" },
  { id: 42, name: "Ukraine",      code: "UKR", flagCode: "ua",     group: "K" },
  { id: 43, name: "Australia",    code: "AUS", flagCode: "au",     group: "K" },
  { id: 44, name: "Saudi Arabia", code: "KSA", flagCode: "sa",     group: "K" },
  // Group L
  { id: 45, name: "Iran",         code: "IRN", flagCode: "ir",     group: "L" },
  { id: 46, name: "Iraq",         code: "IRQ", flagCode: "iq",     group: "L" },
  { id: 47, name: "New Zealand",  code: "NZL", flagCode: "nz",     group: "L" },
  { id: 48, name: "Uzbekistan",   code: "UZB", flagCode: "uz",     group: "L" },
  // Türkiye: added for staff pick. Group TBD by real API on tournament day.
  { id: 49, name: "Türkiye",      code: "TUR", flagCode: "tr",     group: "F" },
  // Sweden: picked by Jonathan Clark. Group TBD by real API on tournament day.
  { id: 50, name: "Sweden",       code: "SWE", flagCode: "se",     group: "?" },
];

// ============================================================
// STAFF PICKS
// Real responses from the ITSC World Cup Challenge sign-up form.
// Last synced: June 10, 2026
//
// NOTE: All picks are valid. Sweden did qualify for 2026.
// ============================================================
const STAFF_PICKS = [
  { name: "Nawal Qaiser",              country: "Mexico",    countryCode: "mx" },
  { name: "Christian Chica",           country: "Portugal",  countryCode: "pt" },
  { name: "Jessica Gonzalez Serrano",  country: "Mexico",    countryCode: "mx" },
  { name: "Kevin Cordeiro",            country: "Portugal",  countryCode: "pt" },
  { name: "Jonathan Clark",            country: "Sweden",    countryCode: "se" },
  { name: "Joel Pitman",               country: "Spain",     countryCode: "es" },
  { name: "Gopi Patel",                country: "Portugal",  countryCode: "pt" },
  { name: "Eren Kahyaoglu",            country: "Türkiye",   countryCode: "tr" },
  { name: "Richard Zbeda",             country: "Iraq",      countryCode: "iq" },
  { name: "Oluwatosin Koyaolu Salami",  country: "Spain",     countryCode: "es" },
  { name: "Tomiwa Jinadu",             country: "France",    countryCode: "fr" },
  { name: "Dayanna Maldonado",         country: "Spain",     countryCode: "es" },
  { name: "Alpha Barry",               country: "France",    countryCode: "fr" },
  { name: "Owen Oviedo",               country: "France",    countryCode: "fr" },
  { name: "Jorge Ceballos",             country: "France",    countryCode: "fr" },
  { name: "Jamie Benavides",           country: "Ecuador",   countryCode: "ec" },
  { name: "Francis Jegede",            country: "France",    countryCode: "fr" },
  { name: "Arely Ciliezar",            country: "Brazil",    countryCode: "br" },
  { name: "Nick Zaster",           country: "Argentina", countryCode: "ar" },
  { name: "Samantha Bautista",         country: "Colombia",  countryCode: "co" },
  { name: "Abhi Tamboli",              country: "Spain",     countryCode: "es" },
  { name: "Esma Bartu",                country: "Türkiye",   countryCode: "tr" },
  { name: "Nick Berdzenishvili",       country: "Argentina", countryCode: "ar" },
  { name: "Kevana Dupree",             country: "Brazil",    countryCode: "br" },
  { name: "Nimra Azhar",               country: "Portugal",  countryCode: "pt" },
  { name: "Jeremias Colon",            country: "Argentina", countryCode: "ar" },
  { name: "Ismail Williams",           country: "France",    countryCode: "fr" },
  { name: "Om Pradhan",                country: "Argentina", countryCode: "ar" },
];

// ============================================================
// MATCHES
// Mimics the /fifa/worldcup/v1/games endpoint.
// Last synced: July 15, 2026 — Semi-finals complete.
// Remaining: 3rd Place Play-off + Final (both scheduled).
//
// status values:
//   "completed"  = final score, all events recorded
//   "live"       = in progress right now
//   "scheduled"  = not started yet
//
// Events embedded in each match:
//   type: "goal" | "own_goal" | "yellow_card" | "red_card"
//   team: "home" | "away"
//   player: name string
//   minute: integer
// ============================================================
const MOCK_MATCHES = [

  // ====================================================
  // GROUP STAGE — Group D: France, Brazil, South Korea, South Africa
  // Result: France 1st (W3D0L0), Brazil 2nd (W2D0L1)
  // ====================================================
  {
    id: 1, group: "D", matchday: 1,
    homeTeam: { id: 13, name: "France",       code: "FRA", flagCode: "fr" },
    awayTeam: { id: 16, name: "South Africa", code: "RSA", flagCode: "za" },
    homeScore: 2, awayScore: 0, status: "completed",
    datetime: "2026-06-11T17:00:00Z",
    events: [
      { type: "goal", team: "home", player: "K. Mbappé",   minute: 18 },
      { type: "goal", team: "home", player: "O. Dembélé",  minute: 67 },
    ],
  },
  {
    id: 2, group: "D", matchday: 1,
    homeTeam: { id: 14, name: "Brazil",      code: "BRA", flagCode: "br" },
    awayTeam: { id: 15, name: "South Korea", code: "KOR", flagCode: "kr" },
    homeScore: 3, awayScore: 0, status: "completed",
    datetime: "2026-06-11T20:00:00Z",
    events: [
      { type: "goal", team: "home", player: "Vinicius Jr.", minute: 23 },
      { type: "goal", team: "home", player: "Rodrygo",      minute: 45 },
      { type: "goal", team: "home", player: "L. Paquetá",   minute: 78 },
    ],
  },
  {
    id: 3, group: "D", matchday: 2,
    homeTeam: { id: 13, name: "France", code: "FRA", flagCode: "fr" },
    awayTeam: { id: 14, name: "Brazil", code: "BRA", flagCode: "br" },
    homeScore: 3, awayScore: 1, status: "completed",
    datetime: "2026-06-15T20:00:00Z",
    events: [
      { type: "goal", team: "home", player: "K. Mbappé",     minute: 12 },
      { type: "goal", team: "away", player: "Vinicius Jr.",  minute: 38 },
      { type: "goal", team: "home", player: "O. Dembélé",    minute: 55 },
      { type: "goal", team: "home", player: "A. Tchouaméni", minute: 82 },
    ],
  },
  {
    id: 4, group: "D", matchday: 2,
    homeTeam: { id: 16, name: "South Africa", code: "RSA", flagCode: "za" },
    awayTeam: { id: 15, name: "South Korea",  code: "KOR", flagCode: "kr" },
    homeScore: 1, awayScore: 1, status: "completed",
    datetime: "2026-06-15T17:00:00Z",
    events: [
      { type: "goal", team: "home", player: "P. Motsepe",    minute: 33 },
      { type: "goal", team: "away", player: "S. Min-Hyeok",  minute: 71 },
    ],
  },
  {
    id: 5, group: "D", matchday: 3,
    homeTeam: { id: 13, name: "France",      code: "FRA", flagCode: "fr" },
    awayTeam: { id: 15, name: "South Korea", code: "KOR", flagCode: "kr" },
    homeScore: 1, awayScore: 0, status: "completed",
    datetime: "2026-06-19T20:00:00Z",
    events: [
      { type: "goal", team: "home", player: "K. Mbappé", minute: 59 },
    ],
  },
  {
    id: 6, group: "D", matchday: 3,
    homeTeam: { id: 14, name: "Brazil",       code: "BRA", flagCode: "br" },
    awayTeam: { id: 16, name: "South Africa", code: "RSA", flagCode: "za" },
    homeScore: 2, awayScore: 0, status: "completed",
    datetime: "2026-06-19T20:00:00Z",
    events: [
      { type: "goal", team: "home", player: "Raphinha",     minute: 27 },
      { type: "goal", team: "home", player: "Vinicius Jr.", minute: 80 },
    ],
  },

  // ====================================================
  // GROUP STAGE — Group E: Spain, Argentina, Japan, Ivory Coast
  // Result: Spain 1st (W2D1L0), Argentina 2nd (W2D1L0)
  // ====================================================
  {
    id: 7, group: "E", matchday: 1,
    homeTeam: { id: 17, name: "Spain",       code: "ESP", flagCode: "es" },
    awayTeam: { id: 20, name: "Ivory Coast", code: "CIV", flagCode: "ci" },
    homeScore: 2, awayScore: 0, status: "completed",
    datetime: "2026-06-12T19:00:00Z",
    events: [
      { type: "goal", team: "home", player: "L. Yamal",  minute: 28 },
      { type: "goal", team: "home", player: "A. Morata", minute: 80 },
    ],
  },
  {
    id: 8, group: "E", matchday: 1,
    homeTeam: { id: 18, name: "Argentina", code: "ARG", flagCode: "ar" },
    awayTeam: { id: 19, name: "Japan",     code: "JPN", flagCode: "jp" },
    homeScore: 2, awayScore: 1, status: "completed",
    datetime: "2026-06-12T22:00:00Z",
    events: [
      { type: "goal", team: "home", player: "L. Messi",   minute: 17 },
      { type: "goal", team: "away", player: "A. Ueda",    minute: 44 },
      { type: "goal", team: "home", player: "J. Álvarez", minute: 76 },
    ],
  },
  {
    id: 9, group: "E", matchday: 2,
    homeTeam: { id: 17, name: "Spain",     code: "ESP", flagCode: "es" },
    awayTeam: { id: 18, name: "Argentina", code: "ARG", flagCode: "ar" },
    homeScore: 1, awayScore: 1, status: "completed",
    datetime: "2026-06-16T20:00:00Z",
    events: [
      { type: "goal",        team: "home", player: "D. Olmo",         minute: 35 },
      { type: "goal",        team: "away", player: "L. Messi",        minute: 68 },
      { type: "yellow_card", team: "home", player: "R. Le Normand",   minute: 45 },
    ],
  },
  {
    id: 10, group: "E", matchday: 2,
    homeTeam: { id: 19, name: "Japan",       code: "JPN", flagCode: "jp" },
    awayTeam: { id: 20, name: "Ivory Coast", code: "CIV", flagCode: "ci" },
    homeScore: 2, awayScore: 0, status: "completed",
    datetime: "2026-06-16T17:00:00Z",
    events: [
      { type: "goal", team: "home", player: "K. Mitoma", minute: 29 },
      { type: "goal", team: "home", player: "A. Ueda",   minute: 71 },
    ],
  },
  {
    id: 11, group: "E", matchday: 3,
    homeTeam: { id: 17, name: "Spain", code: "ESP", flagCode: "es" },
    awayTeam: { id: 19, name: "Japan", code: "JPN", flagCode: "jp" },
    homeScore: 3, awayScore: 0, status: "completed",
    datetime: "2026-06-20T20:00:00Z",
    events: [
      { type: "goal", team: "home", player: "L. Yamal",  minute: 11 },
      { type: "goal", team: "home", player: "A. Morata", minute: 43 },
      { type: "goal", team: "home", player: "D. Olmo",   minute: 88 },
    ],
  },
  {
    id: 12, group: "E", matchday: 3,
    homeTeam: { id: 18, name: "Argentina",   code: "ARG", flagCode: "ar" },
    awayTeam: { id: 20, name: "Ivory Coast", code: "CIV", flagCode: "ci" },
    homeScore: 3, awayScore: 0, status: "completed",
    datetime: "2026-06-20T20:00:00Z",
    events: [
      { type: "goal", team: "home", player: "L. Messi",        minute: 22 },
      { type: "goal", team: "home", player: "J. Álvarez",      minute: 56 },
      { type: "goal", team: "home", player: "A. Mac Allister", minute: 79 },
    ],
  },

  // ====================================================
  // GROUP STAGE — Group B: Mexico, Jamaica, Ecuador, Senegal
  // Result: Mexico 1st (W2D1L0), Ecuador 2nd (W2D1L0)
  // ====================================================
  {
    id: 13, group: "B", matchday: 1,
    homeTeam: { id: 5, name: "Mexico",  code: "MEX", flagCode: "mx" },
    awayTeam: { id: 8, name: "Senegal", code: "SEN", flagCode: "sn" },
    homeScore: 3, awayScore: 0, status: "completed",
    datetime: "2026-06-11T22:00:00Z",
    events: [
      { type: "goal", team: "home", player: "H. Lozano",  minute: 12 },
      { type: "goal", team: "home", player: "R. Jiménez", minute: 35 },
      { type: "goal", team: "home", player: "A. Vega",    minute: 78 },
    ],
  },
  {
    id: 14, group: "B", matchday: 1,
    homeTeam: { id: 7, name: "Ecuador", code: "ECU", flagCode: "ec" },
    awayTeam: { id: 6, name: "Jamaica", code: "JAM", flagCode: "jm" },
    homeScore: 2, awayScore: 0, status: "completed",
    datetime: "2026-06-11T19:00:00Z",
    events: [
      { type: "goal", team: "home", player: "E. Valencia", minute: 31 },
      { type: "goal", team: "home", player: "M. Caicedo",  minute: 72 },
    ],
  },
  {
    id: 15, group: "B", matchday: 2,
    homeTeam: { id: 5, name: "Mexico",  code: "MEX", flagCode: "mx" },
    awayTeam: { id: 7, name: "Ecuador", code: "ECU", flagCode: "ec" },
    homeScore: 1, awayScore: 1, status: "completed",
    datetime: "2026-06-15T22:00:00Z",
    events: [
      { type: "goal", team: "home", player: "R. Jiménez",  minute: 44 },
      { type: "goal", team: "away", player: "E. Valencia", minute: 77 },
    ],
  },
  {
    id: 16, group: "B", matchday: 3,
    homeTeam: { id: 5, name: "Mexico",  code: "MEX", flagCode: "mx" },
    awayTeam: { id: 6, name: "Jamaica", code: "JAM", flagCode: "jm" },
    homeScore: 3, awayScore: 0, status: "completed",
    datetime: "2026-06-19T22:00:00Z",
    events: [
      { type: "goal", team: "home", player: "H. Lozano",  minute: 14 },
      { type: "goal", team: "home", player: "A. Vega",    minute: 50 },
      { type: "goal", team: "home", player: "R. Jiménez", minute: 85 },
    ],
  },
  {
    id: 17, group: "B", matchday: 3,
    homeTeam: { id: 7, name: "Ecuador", code: "ECU", flagCode: "ec" },
    awayTeam: { id: 8, name: "Senegal", code: "SEN", flagCode: "sn" },
    homeScore: 2, awayScore: 0, status: "completed",
    datetime: "2026-06-19T22:00:00Z",
    events: [
      { type: "goal", team: "home", player: "M. Caicedo",  minute: 38 },
      { type: "goal", team: "home", player: "E. Valencia", minute: 66 },
    ],
  },

  // ====================================================
  // GROUP STAGE — Group C: Canada, Portugal, Morocco, Jordan
  // Result: Portugal 1st (W2D1L0)
  // ====================================================
  {
    id: 18, group: "C", matchday: 1,
    homeTeam: { id: 9,  name: "Canada",   code: "CAN", flagCode: "ca" },
    awayTeam: { id: 10, name: "Portugal", code: "POR", flagCode: "pt" },
    homeScore: 0, awayScore: 0, status: "completed",
    datetime: "2026-06-13T19:00:00Z",
    events: [],
  },
  {
    id: 19, group: "C", matchday: 2,
    homeTeam: { id: 10, name: "Portugal", code: "POR", flagCode: "pt" },
    awayTeam: { id: 12, name: "Jordan",   code: "JOR", flagCode: "jo" },
    homeScore: 2, awayScore: 0, status: "completed",
    datetime: "2026-06-17T17:00:00Z",
    events: [
      { type: "goal", team: "home", player: "C. Ronaldo",   minute: 28 },
      { type: "goal", team: "home", player: "B. Fernandes", minute: 74 },
    ],
  },
  {
    id: 20, group: "C", matchday: 3,
    homeTeam: { id: 10, name: "Portugal", code: "POR", flagCode: "pt" },
    awayTeam: { id: 11, name: "Morocco",  code: "MAR", flagCode: "ma" },
    homeScore: 2, awayScore: 0, status: "completed",
    datetime: "2026-06-21T20:00:00Z",
    events: [
      { type: "goal", team: "home", player: "B. Fernandes", minute: 33 },
      { type: "goal", team: "home", player: "R. Leão",      minute: 81 },
    ],
  },

  // ====================================================
  // GROUP STAGE — Group F: England, Germany, Colombia, Nigeria
  // Result: England 1st, Colombia 2nd, Germany 3rd (best 3rd)
  // ====================================================
  {
    id: 21, group: "F", matchday: 1,
    homeTeam: { id: 23, name: "Colombia", code: "COL", flagCode: "co" },
    awayTeam: { id: 22, name: "Germany",  code: "GER", flagCode: "de" },
    homeScore: 1, awayScore: 0, status: "completed",
    datetime: "2026-06-12T17:00:00Z",
    events: [
      { type: "goal", team: "home", player: "L. Díaz", minute: 55 },
    ],
  },
  {
    id: 22, group: "F", matchday: 2,
    homeTeam: { id: 21, name: "England", code: "ENG", flagCode: "gb-eng" },
    awayTeam: { id: 22, name: "Germany", code: "GER", flagCode: "de" },
    homeScore: 1, awayScore: 0, status: "completed",
    datetime: "2026-06-16T14:00:00Z",
    events: [
      { type: "goal", team: "home", player: "J. Bellingham", minute: 34 },
    ],
  },
  {
    id: 23, group: "F", matchday: 3,
    homeTeam: { id: 21, name: "England",  code: "ENG", flagCode: "gb-eng" },
    awayTeam: { id: 23, name: "Colombia", code: "COL", flagCode: "co" },
    homeScore: 2, awayScore: 1, status: "completed",
    datetime: "2026-06-20T17:00:00Z",
    events: [
      { type: "goal", team: "home", player: "B. Saka",        minute: 25 },
      { type: "goal", team: "away", player: "L. Díaz",        minute: 63 },
      { type: "goal", team: "home", player: "J. Bellingham",  minute: 87 },
    ],
  },

  // ====================================================
  // GROUP STAGE — Group K: Sweden (showing their advancement)
  // Result: Sweden 1st (W2D1L0)
  // ====================================================
  {
    id: 24, group: "K", matchday: 1,
    homeTeam: { id: 50, name: "Sweden",  code: "SWE", flagCode: "se" },
    awayTeam: { id: 42, name: "Ukraine", code: "UKR", flagCode: "ua" },
    homeScore: 2, awayScore: 0, status: "completed",
    datetime: "2026-06-13T14:00:00Z",
    events: [
      { type: "goal", team: "home", player: "A. Isak",       minute: 31 },
      { type: "goal", team: "home", player: "D. Kulusevski", minute: 78 },
    ],
  },
  {
    id: 25, group: "K", matchday: 2,
    homeTeam: { id: 50, name: "Sweden",    code: "SWE", flagCode: "se" },
    awayTeam: { id: 43, name: "Australia", code: "AUS", flagCode: "au" },
    homeScore: 1, awayScore: 0, status: "completed",
    datetime: "2026-06-17T14:00:00Z",
    events: [
      { type: "goal", team: "home", player: "A. Isak", minute: 61 },
    ],
  },
  {
    id: 26, group: "K", matchday: 3,
    homeTeam: { id: 50, name: "Sweden",      code: "SWE", flagCode: "se" },
    awayTeam: { id: 41, name: "Switzerland", code: "SUI", flagCode: "ch" },
    homeScore: 1, awayScore: 1, status: "completed",
    datetime: "2026-06-21T14:00:00Z",
    events: [
      { type: "goal", team: "home", player: "A. Isak",  minute: 44 },
      { type: "goal", team: "away", player: "G. Xhaka", minute: 88 },
    ],
  },

  // ====================================================
  // GROUP STAGE — Group L: Iraq (eliminated in groups)
  // ====================================================
  {
    id: 27, group: "L", matchday: 1,
    homeTeam: { id: 45, name: "Iran", code: "IRN", flagCode: "ir" },
    awayTeam: { id: 46, name: "Iraq", code: "IRQ", flagCode: "iq" },
    homeScore: 3, awayScore: 0, status: "completed",
    datetime: "2026-06-12T14:00:00Z",
    events: [
      { type: "goal", team: "home", player: "M. Taremi",       minute: 20 },
      { type: "goal", team: "home", player: "A. Jahanbakhsh",  minute: 44 },
      { type: "goal", team: "home", player: "M. Taremi",       minute: 77 },
    ],
  },
  {
    id: 28, group: "L", matchday: 2,
    homeTeam: { id: 47, name: "New Zealand", code: "NZL", flagCode: "nz" },
    awayTeam: { id: 46, name: "Iraq",        code: "IRQ", flagCode: "iq" },
    homeScore: 2, awayScore: 0, status: "completed",
    datetime: "2026-06-16T14:00:00Z",
    events: [
      { type: "goal", team: "home", player: "C. Wood", minute: 38 },
      { type: "goal", team: "home", player: "C. Wood", minute: 71 },
    ],
  },
  {
    id: 29, group: "L", matchday: 3,
    homeTeam: { id: 46, name: "Iraq",       code: "IRQ", flagCode: "iq" },
    awayTeam: { id: 48, name: "Uzbekistan", code: "UZB", flagCode: "uz" },
    homeScore: 0, awayScore: 0, status: "completed",
    datetime: "2026-06-20T14:00:00Z",
    events: [],
  },

  // ====================================================
  // ROUND OF 32 — all completed
  // ====================================================
  {
    id: 30, round: "Round of 32",
    homeTeam: { id: 13, name: "France", code: "FRA", flagCode: "fr" },
    awayTeam: { id: 50, name: "Sweden", code: "SWE", flagCode: "se" },
    homeScore: 3, awayScore: 0, status: "completed",
    datetime: "2026-07-03T20:00:00Z",
    events: [
      { type: "goal", team: "home", player: "K. Mbappé",     minute: 14 },
      { type: "goal", team: "home", player: "A. Tchouaméni", minute: 53 },
      { type: "goal", team: "home", player: "O. Dembélé",    minute: 89 },
    ],
  },
  {
    id: 31, round: "Round of 32",
    homeTeam: { id: 14, name: "Brazil", code: "BRA", flagCode: "br" },
    awayTeam: { id: 19, name: "Japan",  code: "JPN", flagCode: "jp" },
    homeScore: 2, awayScore: 1, status: "completed",
    datetime: "2026-07-04T17:00:00Z",
    events: [
      { type: "goal", team: "home", player: "Vinicius Jr.", minute: 22 },
      { type: "goal", team: "away", player: "K. Mitoma",   minute: 55 },
      { type: "goal", team: "home", player: "Raphinha",    minute: 79 },
    ],
  },
  {
    id: 32, round: "Round of 32",
    homeTeam: { id: 10, name: "Portugal", code: "POR", flagCode: "pt" },
    awayTeam: { id: 9,  name: "Canada",   code: "CAN", flagCode: "ca" },
    homeScore: 2, awayScore: 1, status: "completed",
    datetime: "2026-07-04T20:00:00Z",
    events: [
      { type: "goal", team: "away", player: "A. David",     minute: 28 },
      { type: "goal", team: "home", player: "C. Ronaldo",   minute: 47 },
      { type: "goal", team: "home", player: "B. Fernandes", minute: 83 },
    ],
  },
  {
    id: 33, round: "Round of 32",
    homeTeam: { id: 11, name: "Morocco",      code: "MAR", flagCode: "ma" },
    awayTeam: { id: 16, name: "South Africa", code: "RSA", flagCode: "za" },
    homeScore: 1, awayScore: 0, status: "completed",
    datetime: "2026-07-05T17:00:00Z",
    events: [
      { type: "goal", team: "home", player: "A. Hakimi", minute: 61 },
    ],
  },
  {
    id: 34, round: "Round of 32",
    homeTeam: { id: 18, name: "Argentina", code: "ARG", flagCode: "ar" },
    awayTeam: { id: 23, name: "Colombia",  code: "COL", flagCode: "co" },
    homeScore: 2, awayScore: 0, status: "completed",
    datetime: "2026-07-05T20:00:00Z",
    events: [
      { type: "goal", team: "home", player: "L. Messi",   minute: 31 },
      { type: "goal", team: "home", player: "J. Álvarez", minute: 74 },
    ],
  },
  {
    id: 35, round: "Round of 32",
    homeTeam: { id: 39, name: "Paraguay", code: "PAR", flagCode: "py" },
    awayTeam: { id: 22, name: "Germany",  code: "GER", flagCode: "de" },
    homeScore: 1, awayScore: 1, homePenalties: 4, awayPenalties: 3,
    status: "completed",
    datetime: "2026-07-05T23:00:00Z",
    events: [
      { type: "goal", team: "home", player: "M. Almirón", minute: 45 },
      { type: "goal", team: "away", player: "L. Wirtz",   minute: 68 },
    ],
  },
  {
    id: 36, round: "Round of 32",
    homeTeam: { id: 17, name: "Spain", code: "ESP", flagCode: "es" },
    awayTeam: { id: 1,  name: "USA",   code: "USA", flagCode: "us" },
    homeScore: 1, awayScore: 0, status: "completed",
    datetime: "2026-07-06T17:00:00Z",
    events: [
      { type: "goal", team: "home", player: "D. Olmo", minute: 52 },
    ],
  },
  {
    id: 37, round: "Round of 32",
    homeTeam: { id: 21, name: "England", code: "ENG", flagCode: "gb-eng" },
    awayTeam: { id: 24, name: "Nigeria", code: "NGA", flagCode: "ng" },
    homeScore: 2, awayScore: 0, status: "completed",
    datetime: "2026-07-06T20:00:00Z",
    events: [
      { type: "goal", team: "home", player: "B. Saka",       minute: 33 },
      { type: "goal", team: "home", player: "J. Bellingham", minute: 72 },
    ],
  },
  {
    id: 38, round: "Round of 32",
    homeTeam: { id: 5,  name: "Mexico",  code: "MEX", flagCode: "mx" },
    awayTeam: { id: 2,  name: "Uruguay", code: "URU", flagCode: "uy" },
    homeScore: 2, awayScore: 1, status: "completed",
    datetime: "2026-07-07T17:00:00Z",
    events: [
      { type: "goal", team: "home", player: "H. Lozano",  minute: 19 },
      { type: "goal", team: "away", player: "D. Núñez",   minute: 47 },
      { type: "goal", team: "home", player: "R. Jiménez", minute: 81 },
    ],
  },
  {
    id: 39, round: "Round of 32",
    homeTeam: { id: 7,  name: "Ecuador", code: "ECU", flagCode: "ec" },
    awayTeam: { id: 29, name: "Croatia", code: "CRO", flagCode: "hr" },
    homeScore: 1, awayScore: 0, status: "completed",
    datetime: "2026-07-07T20:00:00Z",
    events: [
      { type: "goal", team: "home", player: "E. Valencia", minute: 65 },
    ],
  },
  {
    id: 40, round: "Round of 32",
    homeTeam: { id: 26, name: "Netherlands", code: "NED", flagCode: "nl" },
    awayTeam: { id: 8,  name: "Senegal",     code: "SEN", flagCode: "sn" },
    homeScore: 2, awayScore: 0, status: "completed",
    datetime: "2026-07-07T23:00:00Z",
    events: [
      { type: "goal", team: "home", player: "V. van Dijk", minute: 41 },
      { type: "goal", team: "home", player: "M. Depay",    minute: 88 },
    ],
  },
  {
    id: 41, round: "Round of 32",
    homeTeam: { id: 15, name: "South Korea", code: "KOR", flagCode: "kr" },
    awayTeam: { id: 37, name: "Serbia",      code: "SRB", flagCode: "rs" },
    homeScore: 2, awayScore: 1, status: "completed",
    datetime: "2026-07-08T14:00:00Z",
    events: [
      { type: "goal", team: "home", player: "S. Min-Hyeok", minute: 23 },
      { type: "goal", team: "away", player: "D. Vlahović",  minute: 55 },
      { type: "goal", team: "home", player: "H. Chan-gue",  minute: 90 },
    ],
  },
  {
    id: 42, round: "Round of 32",
    homeTeam: { id: 43, name: "Australia", code: "AUS", flagCode: "au" },
    awayTeam: { id: 33, name: "Poland",    code: "POL", flagCode: "pl" },
    homeScore: 1, awayScore: 0, status: "completed",
    datetime: "2026-07-08T17:00:00Z",
    events: [
      { type: "goal", team: "home", player: "M. Leckie", minute: 78 },
    ],
  },
  {
    id: 43, round: "Round of 32",
    homeTeam: { id: 30, name: "Denmark", code: "DEN", flagCode: "dk" },
    awayTeam: { id: 45, name: "Iran",    code: "IRN", flagCode: "ir" },
    homeScore: 2, awayScore: 0, status: "completed",
    datetime: "2026-07-08T20:00:00Z",
    events: [
      { type: "goal", team: "home", player: "C. Eriksen", minute: 36 },
      { type: "goal", team: "home", player: "R. Højlund", minute: 67 },
    ],
  },
  {
    id: 44, round: "Round of 32",
    homeTeam: { id: 41, name: "Switzerland", code: "SUI", flagCode: "ch" },
    awayTeam: { id: 3,  name: "Panama",      code: "PAN", flagCode: "pa" },
    homeScore: 1, awayScore: 0, status: "completed",
    datetime: "2026-07-08T23:00:00Z",
    events: [
      { type: "goal", team: "home", player: "G. Xhaka", minute: 54 },
    ],
  },
  {
    id: 45, round: "Round of 32",
    homeTeam: { id: 38, name: "Scotland", code: "SCO", flagCode: "gb-sct" },
    awayTeam: { id: 4,  name: "Belgium",  code: "BEL", flagCode: "be" },
    homeScore: 1, awayScore: 0, status: "completed",
    datetime: "2026-07-09T14:00:00Z",
    events: [
      { type: "goal", team: "home", player: "L. McGregor", minute: 80 },
    ],
  },

  // ====================================================
  // ROUND OF 16 — all completed
  // ====================================================
  {
    id: 46, round: "Round of 16",
    homeTeam: { id: 13, name: "France",  code: "FRA", flagCode: "fr" },
    awayTeam: { id: 11, name: "Morocco", code: "MAR", flagCode: "ma" },
    homeScore: 2, awayScore: 0, status: "completed",
    datetime: "2026-07-09T20:00:00Z",
    events: [
      { type: "goal", team: "home", player: "K. Mbappé",    minute: 27 },
      { type: "goal", team: "home", player: "A. Griezmann", minute: 73 },
    ],
  },
  {
    id: 47, round: "Round of 16",
    homeTeam: { id: 14, name: "Brazil",  code: "BRA", flagCode: "br" },
    awayTeam: { id: 7,  name: "Ecuador", code: "ECU", flagCode: "ec" },
    homeScore: 3, awayScore: 1, status: "completed",
    datetime: "2026-07-09T23:00:00Z",
    events: [
      { type: "goal", team: "home", player: "Vinicius Jr.", minute: 18 },
      { type: "goal", team: "home", player: "Raphinha",     minute: 44 },
      { type: "goal", team: "away", player: "E. Valencia",  minute: 60 },
      { type: "goal", team: "home", player: "Rodrygo",      minute: 87 },
    ],
  },
  {
    id: 48, round: "Round of 16",
    homeTeam: { id: 18, name: "Argentina", code: "ARG", flagCode: "ar" },
    awayTeam: { id: 39, name: "Paraguay",  code: "PAR", flagCode: "py" },
    homeScore: 2, awayScore: 1, status: "completed",
    datetime: "2026-07-10T20:00:00Z",
    events: [
      { type: "goal", team: "home", player: "L. Messi",   minute: 11 },
      { type: "goal", team: "away", player: "M. Almirón", minute: 49 },
      { type: "goal", team: "home", player: "J. Álvarez", minute: 92 },
    ],
  },
  {
    id: 49, round: "Round of 16",
    homeTeam: { id: 17, name: "Spain",       code: "ESP", flagCode: "es" },
    awayTeam: { id: 15, name: "South Korea", code: "KOR", flagCode: "kr" },
    homeScore: 3, awayScore: 0, status: "completed",
    datetime: "2026-07-10T23:00:00Z",
    events: [
      { type: "goal", team: "home", player: "L. Yamal",  minute: 22 },
      { type: "goal", team: "home", player: "A. Morata", minute: 57 },
      { type: "goal", team: "home", player: "D. Olmo",   minute: 84 },
    ],
  },
  {
    id: 50, round: "Round of 16",
    homeTeam: { id: 10, name: "Portugal",    code: "POR", flagCode: "pt" },
    awayTeam: { id: 41, name: "Switzerland", code: "SUI", flagCode: "ch" },
    homeScore: 2, awayScore: 0, status: "completed",
    datetime: "2026-07-11T17:00:00Z",
    events: [
      { type: "goal", team: "home", player: "B. Fernandes", minute: 33 },
      { type: "goal", team: "home", player: "C. Ronaldo",   minute: 78 },
    ],
  },
  {
    id: 51, round: "Round of 16",
    homeTeam: { id: 26, name: "Netherlands", code: "NED", flagCode: "nl" },
    awayTeam: { id: 38, name: "Scotland",    code: "SCO", flagCode: "gb-sct" },
    homeScore: 1, awayScore: 0, status: "completed",
    datetime: "2026-07-11T20:00:00Z",
    events: [
      { type: "goal", team: "home", player: "M. Depay", minute: 64 },
    ],
  },
  {
    id: 52, round: "Round of 16",
    homeTeam: { id: 5,  name: "Mexico",    code: "MEX", flagCode: "mx" },
    awayTeam: { id: 43, name: "Australia", code: "AUS", flagCode: "au" },
    homeScore: 1, awayScore: 0, status: "completed",
    datetime: "2026-07-12T17:00:00Z",
    events: [
      { type: "goal", team: "home", player: "H. Lozano", minute: 51 },
    ],
  },
  {
    id: 53, round: "Round of 16",
    homeTeam: { id: 21, name: "England", code: "ENG", flagCode: "gb-eng" },
    awayTeam: { id: 30, name: "Denmark", code: "DEN", flagCode: "dk" },
    homeScore: 2, awayScore: 0, status: "completed",
    datetime: "2026-07-12T20:00:00Z",
    events: [
      { type: "goal", team: "home", player: "J. Bellingham", minute: 38 },
      { type: "goal", team: "home", player: "B. Saka",       minute: 75 },
    ],
  },

  // ====================================================
  // QUARTER-FINALS — all completed
  // France beats Portugal, Brazil beats Netherlands,
  // Argentina beats Mexico, Spain beats England
  // ====================================================
  {
    id: 54, round: "Quarter-finals",
    homeTeam: { id: 13, name: "France",   code: "FRA", flagCode: "fr" },
    awayTeam: { id: 10, name: "Portugal", code: "POR", flagCode: "pt" },
    homeScore: 3, awayScore: 1, status: "completed",
    datetime: "2026-07-13T20:00:00Z",
    events: [
      { type: "goal", team: "home", player: "K. Mbappé",    minute: 8  },
      { type: "goal", team: "home", player: "A. Griezmann", minute: 34 },
      { type: "goal", team: "away", player: "C. Ronaldo",   minute: 52 },
      { type: "goal", team: "home", player: "O. Dembélé",   minute: 80 },
    ],
  },
  {
    id: 55, round: "Quarter-finals",
    homeTeam: { id: 14, name: "Brazil",      code: "BRA", flagCode: "br" },
    awayTeam: { id: 26, name: "Netherlands", code: "NED", flagCode: "nl" },
    homeScore: 2, awayScore: 1, status: "completed",
    datetime: "2026-07-13T23:00:00Z",
    events: [
      { type: "goal", team: "home", player: "Raphinha",     minute: 21 },
      { type: "goal", team: "away", player: "V. van Dijk",  minute: 66 },
      { type: "goal", team: "home", player: "Vinicius Jr.", minute: 86 },
    ],
  },
  {
    id: 56, round: "Quarter-finals",
    homeTeam: { id: 18, name: "Argentina", code: "ARG", flagCode: "ar" },
    awayTeam: { id: 5,  name: "Mexico",    code: "MEX", flagCode: "mx" },
    homeScore: 2, awayScore: 0, status: "completed",
    datetime: "2026-07-14T20:00:00Z",
    events: [
      { type: "goal", team: "home", player: "L. Messi",        minute: 15 },
      { type: "goal", team: "home", player: "A. Mac Allister", minute: 70 },
    ],
  },
  {
    id: 57, round: "Quarter-finals",
    homeTeam: { id: 17, name: "Spain",   code: "ESP", flagCode: "es" },
    awayTeam: { id: 21, name: "England", code: "ENG", flagCode: "gb-eng" },
    homeScore: 1, awayScore: 0, status: "completed",
    datetime: "2026-07-14T23:00:00Z",
    events: [
      { type: "goal", team: "home", player: "L. Yamal", minute: 77 },
    ],
  },

  // ====================================================
  // SEMI-FINALS — both completed
  // France beats Brazil 2-0, Argentina beats Spain 1-0
  // ====================================================
  {
    id: 58, round: "Semi-finals",
    homeTeam: { id: 13, name: "France", code: "FRA", flagCode: "fr" },
    awayTeam: { id: 14, name: "Brazil", code: "BRA", flagCode: "br" },
    homeScore: 2, awayScore: 0, status: "completed",
    datetime: "2026-07-16T20:00:00Z",
    events: [
      { type: "goal", team: "home", player: "K. Mbappé",    minute: 47 },
      { type: "goal", team: "home", player: "A. Griezmann", minute: 83 },
    ],
  },
  {
    id: 59, round: "Semi-finals",
    homeTeam: { id: 18, name: "Argentina", code: "ARG", flagCode: "ar" },
    awayTeam: { id: 17, name: "Spain",     code: "ESP", flagCode: "es" },
    homeScore: 1, awayScore: 0, status: "completed",
    datetime: "2026-07-17T20:00:00Z",
    events: [
      { type: "goal", team: "home", player: "L. Messi", minute: 63 },
    ],
  },

  // ====================================================
  // 3rd PLACE PLAY-OFF — scheduled
  // Brazil vs Spain
  // ====================================================
  {
    id: 60, round: "Third Place Play-off",
    homeTeam: { id: 14, name: "Brazil", code: "BRA", flagCode: "br" },
    awayTeam: { id: 17, name: "Spain",  code: "ESP", flagCode: "es" },
    homeScore: null, awayScore: null, status: "scheduled",
    datetime: "2026-07-21T20:00:00Z",
    events: [],
  },

  // ====================================================
  // FINAL — scheduled
  // France vs Argentina (2022 WC Final rematch!)
  // ====================================================
  {
    id: 61, round: "Final",
    homeTeam: { id: 13, name: "France",    code: "FRA", flagCode: "fr" },
    awayTeam: { id: 18, name: "Argentina", code: "ARG", flagCode: "ar" },
    homeScore: null, awayScore: null, status: "scheduled",
    datetime: "2026-07-22T20:00:00Z",
    events: [],
  },
];

// ============================================================
// POINT VALUES
// Mirrors the scoring rules from the challenge spec.
// The Apps Script uses the same constants.
// ============================================================
const POINT_VALUES = {
  GOAL:           4,
  OWN_GOAL:      -1,
  YELLOW_CARD:   -1,
  RED_CARD:      -3,
  CLEAN_SHEET:    2,
  WIN:            3,
  DRAW:           1,
  ADVANCE_R16:    5,
  ADVANCE_QF:    10,
  ADVANCE_SF:    20,
  ADVANCE_FINAL: 35,
  WIN_FINAL:     50,
};

// ============================================================
// PRE-CALCULATED COUNTRY POINTS
// In production, this is written by the Apps Script to the
// Google Sheet Leaderboard tab. For mock purposes, we
// calculate it here manually.
//
// Breakdown by country from completed matches:
//
// USA:         2 goals (+8), Win (+3)              = +11
// Uruguay:     1 goal (+4)                         = +4
// Mexico:      3 goals (+12), Win (+3), CS (+2)    = +17
// Senegal:     no goals, loss                      = 0
// France:      1 goal (+4), Draw (+1)              = +5
// Brazil:      1 goal (+4), Draw (+1)              = +5
// Spain:       2 goals (+8), Win (+3), CS (+2),
//              1 yellow (-1)                       = +12
// Ivory Coast: no goals, loss                      = 0
// England:     1 goal (+4), Win (+3), CS (+2)      = +9
// Germany:     no goals, loss                      = 0
// Canada:      Draw (+1), CS (+2)                  = +3
// Portugal:    Draw (+1), CS (+2)                  = +3
//
// Italy:       1 goal (+4) [LIVE]                  = +4 (pending)
// Netherlands: 1 goal (+4), 1 yellow (-1) [LIVE]  = +3 (pending)
// ============================================================
const MOCK_COUNTRY_POINTS = {
  "USA":         { points: 11, isLive: false },
  "Uruguay":     { points: 4,  isLive: false },
  "Mexico":      { points: 17, isLive: false },
  "Senegal":     { points: 0,  isLive: false },
  "France":      { points: 5,  isLive: false },
  "Brazil":      { points: 5,  isLive: false },
  "Spain":       { points: 12, isLive: false },
  "Ivory Coast": { points: 0,  isLive: false },
  "England":     { points: 9,  isLive: false },
  "Germany":     { points: 0,  isLive: false },
  "Canada":      { points: 3,  isLive: false },
  "Portugal":    { points: 3,  isLive: false },
  "Italy":       { points: 4,  isLive: true  },
  "Netherlands": { points: 3,  isLive: true  },
  // Countries with no matches played yet
  "Panama":      { points: 0,  isLive: false },
  "Belgium":     { points: 0,  isLive: false },
  "Jamaica":     { points: 0,  isLive: false },
  "Ecuador":     { points: 0,  isLive: false },
  "Morocco":     { points: 0,  isLive: false },
  "Jordan":      { points: 0,  isLive: false },
  "South Korea": { points: 0,  isLive: false },
  "South Africa":{ points: 0,  isLive: false },
  "Argentina":   { points: 0,  isLive: false },
  "Japan":       { points: 0,  isLive: false },
  "Colombia":    { points: 0,  isLive: false },
  "Nigeria":     { points: 0,  isLive: false },
  "Costa Rica":  { points: 0,  isLive: false },
  "Tunisia":     { points: 0,  isLive: false },
  "Croatia":     { points: 0,  isLive: false },
  "Denmark":     { points: 0,  isLive: false },
  "Honduras":    { points: 0,  isLive: false },
  "Egypt":       { points: 0,  isLive: false },
  "Poland":      { points: 0,  isLive: false },
  "Austria":     { points: 0,  isLive: false },
  "El Salvador": { points: 0,  isLive: false },
  "Cameroon":    { points: 0,  isLive: false },
  "Serbia":      { points: 0,  isLive: false },
  "Scotland":    { points: 0,  isLive: false },
  "Paraguay":    { points: 0,  isLive: false },
  "DR Congo":    { points: 0,  isLive: false },
  "Switzerland": { points: 0,  isLive: false },
  "Ukraine":     { points: 0,  isLive: false },
  "Australia":   { points: 0,  isLive: false },
  "Saudi Arabia":{ points: 0,  isLive: false },
  "Iran":        { points: 0,  isLive: false },
  "Iraq":        { points: 0,  isLive: false },
  "New Zealand": { points: 0,  isLive: false },
  "Uzbekistan":  { points: 0,  isLive: false },
  // Staff-picked countries not in original mock list
  "Türkiye":     { points: 0,  isLive: false },
  "Colombia":    { points: 0,  isLive: false },
  "Sweden":      { points: 0,  isLive: false },
};

// ============================================================
// LEADERBOARD
// Built by combining STAFF_PICKS with MOCK_COUNTRY_POINTS.
// In production, this comes from the Apps Script output tab.
// ============================================================
function buildMockLeaderboard() {
  // Build leaderboard entries from staff picks and country points
  const entries = STAFF_PICKS.map((staff) => {
    const countryData = MOCK_COUNTRY_POINTS[staff.country] || { points: 0, isLive: false };
    const team = MOCK_TEAMS.find((t) => t.name === staff.country);
    return {
      name:        staff.name,
      country:     staff.country,
      countryCode: staff.countryCode,
      group:       team ? team.group : "?",
      points:      countryData.points,
      todayPoints: countryData.points, // All points are from today in this mock scenario
      isLive:      countryData.isLive,
    };
  });

  // Sort by points descending, then alphabetically by name for ties
  entries.sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    return a.name.localeCompare(b.name);
  });

  // Assign ranks (tied entries share the same rank)
  let rank = 1;
  entries.forEach((entry, index) => {
    if (index > 0 && entries[index].points < entries[index - 1].points) {
      rank = index + 1;
    }
    entry.rank = rank;
  });

  return entries;
}

const MOCK_LEADERBOARD = buildMockLeaderboard();

// ============================================================
// HELPER FUNCTIONS
// ============================================================

// Returns all staff members who picked a given country name.
function getStaffForCountry(countryName) {
  return STAFF_PICKS
    .filter((s) => s.country === countryName)
    .map((s) => s.name);
}

// Returns a team object by name (case-insensitive).
function getTeamByName(name) {
  return MOCK_TEAMS.find(
    (t) => t.name.toLowerCase() === name.toLowerCase()
  );
}

// Returns a flag image URL for a given flagCode.
// Uses flagcdn.com, which hosts SVG flags for all nations.
function getFlagUrl(flagCode, width = 32) {
  return `https://flagcdn.com/${width}x${Math.round(width * 0.75)}/${flagCode}.png`;
}

// Tournament start date for day-counter calculation.
const TOURNAMENT_START = new Date("2026-06-11T00:00:00Z");

// Returns how many days into the tournament we are (1-indexed).
function getTournamentDay() {
  const now = new Date();
  const diffMs = now - TOURNAMENT_START;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  return Math.max(1, diffDays + 1);
}
