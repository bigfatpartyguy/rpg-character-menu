const downloadAsJSON = (obj: Object): void => {
  const dataURI = `data:text/json;chatset=utf-8,${encodeURIComponent(
    JSON.stringify(obj)
  )}`;

  const link = document.createElement('a');
  link.href = dataURI;
  link.download = 'data.json';
  link.click();
};

/**
 *
 * @param s - sthrength
 * @param d - dexterity
 * @param i - intelligence
 * @param c - charisma
 * @returns  \{level, progress\}
 */
const calculateLevel = (
  s: number,
  d: number,
  i: number,
  c: number
): {level: number; progress: number} => {
  const sum = s + d + i + c;
  const progress = (sum % 10) * 10;
  console.log(sum, progress);
  switch (true) {
    case sum < 10:
      return {level: 0, progress};
    case sum < 20:
      return {level: 1, progress};
    case sum < 30:
      return {level: 2, progress};
    case sum < 40:
      return {level: 3, progress};
    case sum < 50:
      return {level: 4, progress};
    case sum < 60:
      return {level: 5, progress};
    case sum >= 60:
      return {level: 5, progress: 100};
    default:
      throw new Error();
  }
};

const getLevelRank = (level: number): string => {
  const ranks = [
    'Нетренированный',
    'Новичок',
    'Ученик',
    'Адепт',
    'Эксперт',
    'Мастер',
  ];
  return ranks[level];
};

const getBaseStats = (
  s: number,
  d: number,
  i: number
): {health: number; dodge: number; energy: number} => {
  return {
    health: s + 3,
    dodge: d + 10,
    energy: d + i,
  };
};

export {downloadAsJSON, calculateLevel, getLevelRank, getBaseStats};
