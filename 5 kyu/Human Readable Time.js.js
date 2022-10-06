function humanReadable (seconds) {
  const countSecondsFormula = seconds % 60
  const secondss = countSecondsFormula > 9 ? countSecondsFormula : `0${countSecondsFormula}`

  const secondsToMinutes = Math.floor(seconds / 60);

  const countHoursFormula = Math.floor(secondsToMinutes / 60);
  const hours = countHoursFormula > 9 ? countHoursFormula : `0${countHoursFormula}`

  const countMinutesFormula = secondsToMinutes - 60 * hours;
  const minutes = countMinutesFormula > 9 ? countMinutesFormula : `0${countMinutesFormula}`

  return `${hours}:${minutes}:${secondss}`;
}

console.log(humanReadable(60)); // '00:01:00'
// console.log(humanReadable(45296)); // '12:34:56'