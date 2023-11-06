const darkThemeColor = "rgb(48, 49, 49)";
const lightThemeColor = "rgba(255,255,255,0.5)";

export function getThemeColor(theme: string, isText: boolean): string {
  let themeColor = "";
  if (!isText) themeColor = theme == "dark" ? darkThemeColor : lightThemeColor;
  else themeColor = theme == "dark" ? lightThemeColor : darkThemeColor;

  return themeColor;
}
