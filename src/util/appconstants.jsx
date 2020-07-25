export const APPTITLE = "Python Games Beta 0.3";

export const SOUNDOPTIONID = 1;
export const TIMEROPTIONID = 2;
export const DEFAULTSOUNDOPTION = false;
export const DEFAULTTIMEROPTION = false;

export const DEFAULTGAMEINDEX = 0;
export const LOOPGAMEINDEX = 3;
export const LISTGAMEINDEX = 4;
export const STRINGGAMEINDEX = 0;
export const RELATIONALGAMEINDEX = 1;
export const BOOLEANGAMEINDEX = 2;
export const MIXEDGAMEINDEX = 5;

export const DISCLAIMER =
  "License: Creative Commons BY-NC 4.0: c.sarkar. For more games go to -->";

// following colors are used in both GridButton and Boolean Game
// any changes here must also be reflected in the color names array, below.
export const BUTTONCOLORS = [
  "btn-primary", // unselected=false (blue)
  // "btn-info",
  "btn-primary", // unselected-true
  "btn-success", // selected-true (green)
  "btn-danger", // selected-false (red)
  "btn-warning", // partially-correct (yellow)
  "btn-success", // green
  "btn-secondary", // grey
  "btn-info", // light blue
];

export const USABLECOLORS = 5; // must be kept in synch with arrays,below and above
export const COLORNAMES = [
  "blue",
  "blue",
  "green", // 1
  "red",
  "yellow",
  "green",
  "grey", // 5
  "blue",
];
