import contractJson from "utils/abis/MyEpicGame.json";

const CONTRACT = {
  MY_EPIC_GAME: {
    ADDRESS: "0x1Dd2d1F69d00D7d0c8Ce415E38995add958Aa261",
    ABI: contractJson.abi,
  },
};

export const transformCharacterData = (characterData) => {
  return {
    name: characterData.name,
    imageURI: characterData.imageURI,
    hp: characterData.hp.toNumber(),
    maxHp: characterData.maxHp.toNumber(),
    attackDamage: characterData.attackDamage.toNumber(),
    shield: characterData.shield.toNumber(),
  };
};

export const transformBossData = (bossData) => {
  return {
    name: bossData.name,
    imageURI: bossData.imageURI,
    hp: bossData.hp.toNumber(),
    maxHp: bossData.maxHp.toNumber(),
    attackDamage: bossData.attackDamage.toNumber(),
  };
};

export default CONTRACT;
