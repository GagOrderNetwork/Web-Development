const SPACES = /\s+/g;

function classMap(arg) {
  return Object.keys(arg || {})
    .filter(c => Boolean(arg[c]))
    .join(" ")
    .replace(SPACES, " ")
    .trim();
}

export { classMap };
