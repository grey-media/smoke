import { database } from '../config/firebase';
import { today, yesterday } from './source';

// create journal record whis user id
export const fbCreateJournal = (uid, sigarets, day) => {
  if (day === 0) {
    const dateNow = today();
    database.ref(`journal/${uid}`).push({ date: dateNow, sigarets: 0 });
  } else {
    const dateNow = yesterday();
    database.ref(`journal/${uid}`).push({ date: dateNow, sigarets: sigarets });
  }
};
// create profile
export const fbCreateProfile = (uid, userSigarets, userGender, userEmail) => {
  database.ref(`profile/${uid}`).push({
    email: userEmail,
    gender: userGender,
    name: '',
    sigarets: userSigarets,
  });
};
// creact clone
export const fbCreateClone = (uid, sigarets, gender) => {
  let cloneHealth = '';
  // select default clone hp
  switch (sigarets) {
    case '25':
      cloneHealth = 50;
      break;
    case '20':
      cloneHealth = 55;
      break;
    case '15':
      cloneHealth = 60;
      break;
    case '10':
      cloneHealth = 65;
      break;
    case '5':
      cloneHealth = 70;
      break;
    default:
      cloneHealth = 50;
  }
  // get rand number to the select clone name
  const rand = Math.floor(Math.random() * 11);
  const randAvatar = Math.floor(Math.random() * 2) + 1;
  const startMotivation = 'start';
  let cloneName = '';
  const maleNames = ['Валера', 'Алёша', 'Егорка', 'Серёжа', 'Ваня', 'Саня', 'Павлик', 'Вадик', 'Женя', 'Вовчик', 'Коля']
  const femaleNames = ['Галя', 'Света', 'Маруся', 'Маша', 'Настя', 'Марина', 'Таня', 'Наташа', 'Вера', 'Даша', 'Вика']

  if (gender === 'male') {
    cloneName = maleNames[rand];
  } else {
    cloneName = femaleNames[rand];
  }
  const cloneAvatar = `${gender}_${randAvatar}_${cloneHealth}`;

  database.ref(`clone/${uid}`).push({
    health: cloneHealth,
    days: 1,
    name: cloneName,
    trend: 0,
    motivation: startMotivation,
    avatar: cloneAvatar,
    final: '',
  });
};

export const fbRemoveSigarets = (sigarets, uid, key) => {
  if (sigarets > 0) {
    const newSigarets = sigarets - 1;
    database.ref(`journal/${uid}/${key}`).update({ sigarets: newSigarets });
  }
};

export const fbAddSigarets = (sigarets, uid, key) => {
  if (sigarets < 30) {
    const newSigarets = sigarets + 1;
    database.ref(`journal/${uid}/${key}`).update({ sigarets: newSigarets });
  }
};
