import { motivations, finalMessage } from '../data/motivations';

export const today = () => {
  const dateNow = new Date();
  let day = dateNow.getDate();
  let month = dateNow.getMonth() + 1;

  if (day < 10) {
    day = `0${dateNow.getDate()}`;
  }

  if (month < 10) {
    month = `0${dateNow.getMonth() + 1}`;
  }
  const todayDate = `${dateNow.getFullYear()}-${month}-${day}`;
  return todayDate;
};

export const yesterday = () => {
  const dateNow = new Date();
  dateNow.setDate(dateNow.getDate() - 1);
  let day = dateNow.getDate();
  let month = dateNow.getMonth() + 1;

  if (day < 10) {
    day = `0${dateNow.getDate()}`;
  }

  if (month < 10) {
    month = `0${dateNow.getMonth() + 1}`;
  }
  const todayDate = `${dateNow.getFullYear()}-${month}-${day}`;
  return todayDate;
};

// get clone progress bar color and text
export const cloneProgressBar = (trend) => {
  let hp;
  switch (trend) {
    case 0:
      hp = '+5 %';
      return hp;
    case 1:
      hp = '-5 %';
      return hp;
    default:
      hp = '-10';
      return hp;
  }
};

// get motivation text
export const motivationText = (data) => {
  let replicaText = '';
  if (data === 'start') {
    const [val] = motivations.start;
    replicaText = val;
  } else if (data !== '') {
    // denormalization data
    const [replicaId, ...rest] = data;
    const keyId = rest.join('');
    // get string from object
    replicaText = motivations[keyId][replicaId];
  }
  return replicaText;
};

export const getSortJournalData = (val) => {
  let dataArr = [];
  Object.keys(val).map((key) => {
    dataArr.push(
      [
        val[key]['date'],
        val[key]['sigarets'],
        key,
      ],
    );
    return dataArr;
  });
  dataArr = dataArr.sort().reverse();
  return dataArr;
};

export const sigaretsToString = (a) => {
  const b = a % 10;
  let total;
  switch (b) {
    case 1:
      total = `${a} СИГАРЕТА`;
      break;
    case 2:
    case 3:
    case 4:
      total = `${a} СИГАРЕТЫ`;
      break;
    case 11:
    case 12:
    case 13:
    case 14:
      total = `${a} СИГАРЕТ`;
      break;
    default:
      total = `${a} СИГАРЕТ`;
      break;
  }
  return total;
};
export const sigaretsToStringLine = (a) => {
  let total;

  if (a > 29) {
    total = '30+ сигарет';
  } else {
    const b = a % 10;
    switch (b) {
      case 1:
        total = `${a} сигарет`;
        break;
      case 2:
      case 3:
      case 4:
        total = `${a} сигареты`;
        break;
      case 11:
      case 12:
      case 13:
      case 14:
        total = `${a} сигарет`;
        break;
      default:
        total = `${a} сигарет`;
        break;
    }
  }
  return total;
};

export const sigaretsDifference = (a, b) => {
  let difference = 'как и за прошлый день';
  let x = 0;
  if (a < b) {
    x = b - a;
    difference = `на ${x} меньше, чем за прошлый день`;
  } else if (a > b) {
    x = a - b;
    difference = `на ${x} больше, чем за прошлый день`;
  }
  return difference;
};

export const newCloneTrend = (oldSigarets, newSigarets) => {
  let trend = 0;
  if (oldSigarets === newSigarets) {
    trend = 1;
  } else if (oldSigarets < newSigarets) {
    trend = 2;
  }
  return trend;
};

export const newCloneHealth = (trend, health) => {
  let newHealth;
  switch (trend) {
    case 0:
      newHealth = health + 5;
      newHealth = newHealth > 100 ? 100 : newHealth;
      break;
    case 1:
      newHealth = health - 5;
      newHealth = newHealth < 0 ? 0 : newHealth;
      break;
    case 2:
      newHealth = health - 10;
      newHealth = newHealth < 0 ? 0 : newHealth;
      break;
    default:
      newHealth = health;
      break;
  }
  return newHealth;
};

export const newCloneMotivation = (trend, health) => {
  let motivation;
  // get rand 0-1
  const rand = Math.floor(Math.random() * 2);
  if (trend === 0) {
    motivation = `${rand}g${health}`;
  } else {
    motivation = `${rand}b${health}`;
  }
  return motivation;
};

export const newCloneAvatar = (health, avatar) => {
  const splitAvatar = avatar.split('_');
  const newAvatar = `${splitAvatar[0]}_${splitAvatar[1]}_${health}`;
  return newAvatar;
};

export const cloneFinaleMessage = () => {
  // get random nuber in range is quality array length
  const rand = Math.floor(Math.random() * finalMessage.length);
  const final = finalMessage[rand];
  return final;
};

export const statisticLineWidth = (sigarets) => {
  const persent = 100 * sigarets / 30;
  const result = `${persent}%`;
  return result;
};

export const averageSig = (data) => {
  let summ = 0;
  let dataArr = [];
  if (data.length > 0 && data !== 'empty') {
    dataArr = data;
  }
  dataArr.map((item) => {
    summ += item[1];
    return summ;
  });
  return Math.round(summ / dataArr.length);
};

export const summSig = (data) => {
  let summ = 0;
  let dataArr = [];
  if (data.length > 0 && data !== 'empty') {
    dataArr = data;
  }
  dataArr.map((item) => {
    summ += item[1];
    return summ;
  });
  return summ;
};
