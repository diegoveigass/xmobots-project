function DMSToLatLong(hour, minutes, seconds, indicator) {
  const hourNumber = Number(hour);
  const minutesNumber = Number(minutes);
  const secondsNumber = Number(seconds);

  const decimal = hourNumber + (minutesNumber / 60 + secondsNumber) / 3600;

  if (indicator === 'S' || indicator === 'W') {
    return -decimal;
  }
  return decimal;
}

export function parseLatLong(dms) {
  const latReg = /0?(\d{2})(\d{2})(\d{2}([,.]\d{2})?)([S])/i;
  const latResult = latReg.exec(dms);

  const latValue = DMSToLatLong(
    latResult[1],
    latResult[2],
    latResult[3].replace(',', '.'),
    latResult[5],
  );

  const longReg = /0?(\d{2})(\d{2})(\d{2}([,.]\d{2})?)([W])/i;
  const longResult = longReg.exec(dms);

  const longValue = DMSToLatLong(
    longResult[1],
    longResult[2],
    longResult[3].replace(',', '.'),
    latResult[5],
  );

  return [latValue, longValue];
}
