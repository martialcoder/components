import sampleSize from "lodash/sampleSize";
// From https://www.w3schools.com/colors/colors_trends.asp
export const COLORS = {
  livingCoral: "#FF6F61",
  ultraViolet: "#6B5B95",
  greenery: "#88B04B",
  roseQuartz: "#F7CAC9",
  serenity: "#92A8D1",
  marsala: "#955251",
  radiantOrchid: "#B565A7",
  emerald: "#009B77",
  tangerineTango: "#DD4124",
  honeysucle: "#D65076",
  turquoise: "#45B8AC",
  mimosa: "#EFC050",
  blueIzis: "#5B5EA6",
  chiliPepper: "#9B2335",
  sandDollar: "#DFCFBE",
  blueTurquoise: "#55B4B0",
  tigerlily: "#E15D44",
  aquaSky: "#7FCDCD",
  trueRed: "#BC243C",
  fuchsiaRose: "#C3447A",
  ceruleanBlue: "#98B4D4",
  burntSienna: "#EE7752",
  cerise: "#e73c7e",
  curiousBlue: "#23a6d5",
};
#ee7752, #e73c7e, #23a6d5, #23d5ab
export const getRandomColors = (size = 1) =>
  sampleSize(Object.values(COLORS), size);
