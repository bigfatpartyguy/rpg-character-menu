import characterData from './data';
const downloadAsJSON = (obj: Object): void => {
  const dataURI = `data:text/json;chatset=utf-8,${encodeURIComponent(
    JSON.stringify(obj)
  )}`;

  const link = document.createElement('a');
  link.href = dataURI;
  link.download = 'data.json';
  link.click();
};

const checkData = (data: typeof characterData): boolean => {
  console.log('checking data');
  const schema = JSON.stringify(Object.keys(characterData));
  const loadedDataSchema = JSON.stringify(Object.keys(data));
  const attributeDeps = {
    strength: ['attack'],
    dexterity: ['stealth', 'archery'],
    intelligence: ['learnability', 'survival', 'medicine'],
    charisma: ['appearance', 'manipulation', 'insight', 'intimidation'],
  };
  if (schema !== loadedDataSchema) {
    console.log('schemas dont match');
    return false;
  }
  Object.keys(attributeDeps).forEach((mainAttribute) => {
    attributeDeps[mainAttribute as keyof typeof attributeDeps].forEach(
      (dep) => {
        if (
          data[dep as keyof typeof data] >
          data[mainAttribute as keyof typeof data]
        )
          return false;
      }
    );
  });
  return true;
};

const getSubAttributes = (attribute: string): string[] => {
  const subAttributes = {
    strength: ['attack'],
    dexterity: ['stealth', 'archery'],
    intelligence: ['learnability', 'survival', 'medicine'],
    charisma: ['appearance', 'manipulation', 'insight', 'intimidation'],
  };
  return subAttributes[attribute as keyof typeof subAttributes];
};

/**
 *
 * @param stats - array of stats
 * @returns  \{level, progress\}
 */
const calculateLevel = (stats: number[]): {level: number; progress: number} => {
  const sum = stats.reduce((sum, cur) => sum + cur, 0);
  const progress = Math.floor((sum / 20) * 100) % 100;
  switch (true) {
    case sum < 20:
      return {level: 0, progress};
    case sum < 40:
      return {level: 1, progress};
    case sum < 60:
      return {level: 2, progress};
    case sum < 80:
      return {level: 3, progress};
    case sum < 100:
      return {level: 4, progress};
    case sum < 120:
      return {level: 5, progress};
    case sum >= 120:
      return {level: 5, progress: 100};
    default:
      throw new Error();
  }
};

const getLevelRank = (level: number): string => {
  const ranks = [
    '??????????????????????????????',
    '??????????????',
    '????????????',
    '??????????',
    '??????????????',
    '????????????',
  ];
  return ranks[level];
};

const getBaseStats = (
  strength: number,
  dexterity: number,
  intelligence: number,
  damage: number
): {health: number; dodge: number; energy: number} => {
  return {
    health: strength + 3 - damage,
    dodge: dexterity + 10,
    energy: dexterity + intelligence,
  };
};

export {
  downloadAsJSON,
  checkData,
  calculateLevel,
  getLevelRank,
  getBaseStats,
  getSubAttributes,
};
