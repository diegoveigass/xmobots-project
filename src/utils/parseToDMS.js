export default function parseDMS(input) {
  const p1 = /\d{6}S\/\d{7}W/i;
  const p2 = /\d{6}\.\d{2}S\/\d{7}\.\d{2}W/i;
  const p3 = /\d{6},\d{2}S\/\d{7},\d{2}W/i;

  const regex = new RegExp(`${p1.source}|${p2.source}|${p3.source}`);
  return regex.exec(input);
}
