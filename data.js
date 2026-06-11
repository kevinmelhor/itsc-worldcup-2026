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
const MOCK_STAFF_PICKS = [
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
];

// ============================================================
// MATCHES
// Mimics the /fifa/worldcup/v1/games endpoint.
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
  // ---- COMPLETED MATCHES ----

  {
    id: 1,
    group: "A",
    matchday: 1,
    homeTeam: { id: 1,  name: "USA",     code: "USA", flagCode: "us"  },
    awayTeam: { id: 2,  name: "Uruguay", code: "URU", flagCode: "uy"  },
    homeScore: 2,
    awayScore: 1,
    status: "completed",
    datetime: "2026-06-11T17:00:00Z",
    venue: "SoFi Stadium, Los Angeles",
    events: [
      { type: "goal",        team: "home", player: "C. Pulisic",  minute: 23 },
      { type: "goal",        team: "away", player: "D. Nunez",    minute: 55 },
      { type: "goal",        team: "home", player: "F. Weah",     minute: 82 },
    ],
  },

  {
    id: 2,
    group: "B",
    matchday: 1,
    homeTeam: { id: 5,  name: "Mexico",  code: "MEX", flagCode: "mx"  },
    awayTeam: { id: 8,  name: "Senegal", code: "SEN", flagCode: "sn"  },
    homeScore: 3,
    awayScore: 0,
    status: "completed",
    datetime: "2026-06-11T20:00:00Z",
    venue: "Estadio Azteca, Mexico City",
    events: [
      { type: "goal",        team: "home", player: "H. Lozano",   minute: 12 },
      { type: "goal",        team: "home", player: "R. Jimenez",  minute: 35 },
      { type: "goal",        team: "home", player: "A. Vega",     minute: 78 },
    ],
  },

  {
    id: 3,
    group: "D",
    matchday: 1,
    homeTeam: { id: 13, name: "France",  code: "FRA", flagCode: "fr"  },
    awayTeam: { id: 14, name: "Brazil",  code: "BRA", flagCode: "br"  },
    homeScore: 1,
    awayScore: 1,
    status: "completed",
    datetime: "2026-06-12T16:00:00Z",
    venue: "MetLife Stadium, New Jersey",
    events: [
      { type: "goal",        team: "home", player: "K. Mbappe",   minute: 44 },
      { type: "goal",        team: "away", player: "Vinicius Jr", minute: 73 },
    ],
  },

  {
    id: 4,
    group: "E",
    matchday: 1,
    homeTeam: { id: 17, name: "Spain",       code: "ESP", flagCode: "es"  },
    awayTeam: { id: 20, name: "Ivory Coast", code: "CIV", flagCode: "ci"  },
    homeScore: 2,
    awayScore: 0,
    status: "completed",
    datetime: "2026-06-12T19:00:00Z",
    venue: "AT&T Stadium, Dallas",
    events: [
      { type: "goal",        team: "home", player: "L. Yamal",    minute: 28 },
      { type: "yellow_card", team: "home", player: "R. Le Normand", minute: 55 },
      { type: "goal",        team: "home", player: "A. Morata",   minute: 80 },
    ],
  },

  {
    id: 5,
    group: "F",
    matchday: 1,
    homeTeam: { id: 21, name: "England", code: "ENG", flagCode: "gb-eng" },
    awayTeam: { id: 22, name: "Germany", code: "GER", flagCode: "de"     },
    homeScore: 1,
    awayScore: 0,
    status: "completed",
    datetime: "2026-06-13T14:00:00Z",
    venue: "Lumen Field, Seattle",
    events: [
      { type: "goal",        team: "home", player: "J. Bellingham", minute: 34 },
    ],
  },

  {
    id: 6,
    group: "C",
    matchday: 1,
    homeTeam: { id: 9,  name: "Canada",   code: "CAN", flagCode: "ca"  },
    awayTeam: { id: 10, name: "Portugal", code: "POR", flagCode: "pt"  },
    homeScore: 0,
    awayScore: 0,
    status: "completed",
    datetime: "2026-06-13T19:00:00Z",
    venue: "BMO Field, Toronto",
    events: [],
  },

  // ---- LIVE MATCH ----

  {
    id: 7,
    group: "G",
    matchday: 1,
    homeTeam: { id: 25, name: "Italy",       code: "ITA", flagCode: "it"  },
    awayTeam: { id: 26, name: "Netherlands", code: "NED", flagCode: "nl"  },
    homeScore: 1,
    awayScore: 1,
    status: "live",
    liveMinute: 67,
    datetime: "2026-06-14T13:00:00Z",
    venue: "Hard Rock Stadium, Miami",
    events: [
      { type: "goal",        team: "home", player: "F. Chiesa",    minute: 23 },
      { type: "yellow_card", team: "away", player: "V. van Dijk",  minute: 45 },
      { type: "goal",        team: "away", player: "M. Depay",     minute: 58 },
    ],
  },

  // ---- SCHEDULED (upcoming today) ----

  {
    id: 8,
    group: "H",
    matchday: 1,
    homeTeam: { id: 29, name: "Croatia", code: "CRO", flagCode: "hr"  },
    awayTeam: { id: 32, name: "Egypt",   code: "EGY", flagCode: "eg"  },
    homeScore: null,
    awayScore: null,
    status: "scheduled",
    datetime: "2026-06-14T19:00:00Z",
    venue: "NRG Stadium, Houston",
    events: [],
  },

  {
    id: 9,
    group: "E",
    matchday: 1,
    homeTeam: { id: 18, name: "Argentina", code: "ARG", flagCode: "ar"  },
    awayTeam: { id: 19, name: "Japan",     code: "JPN", flagCode: "jp"  },
    homeScore: null,
    awayScore: null,
    status: "scheduled",
    datetime: "2026-06-14T22:00:00Z",
    venue: "Rose Bowl, Pasadena",
    events: [],
  },

  {
    id: 10,
    group: "I",
    matchday: 1,
    homeTeam: { id: 33, name: "Poland",      code: "POL", flagCode: "pl"  },
    awayTeam: { id: 35, name: "El Salvador", code: "SLV", flagCode: "sv"  },
    homeScore: null,
    awayScore: null,
    status: "scheduled",
    datetime: "2026-06-15T01:00:00Z",
    venue: "Lincoln Financial Field, Philadelphia",
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
// Built by combining MOCK_STAFF_PICKS with MOCK_COUNTRY_POINTS.
// In production, this comes from the Apps Script output tab.
// ============================================================
function buildMockLeaderboard() {
  // Build leaderboard entries from staff picks and country points
  const entries = MOCK_STAFF_PICKS.map((staff) => {
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
  return MOCK_STAFF_PICKS
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
