import React from 'react';
import { auth, database } from '../config/firebase';

// create journal record whis user id
export const fbCreateJournal = (uid, sigarets) => {
  const dateNow = new Date();
  const date = `${dateNow.getFullYear()}-${dateNow.getMonth() + 1}-${dateNow.getDate()}`;
  database.ref(`journal/${uid}`).push({ date: date, sigarets: sigarets });
};
// creact clone
export const fbCreateClone = (uid, sigarets, gender) => {
  let health = '';

  switch (sigarets) {
    case '25':
      health = 50;
      break;
    case '20':
      health = 55;
      break;
    case '15':
      health = 60;
      break;
    case '10':
      health = 65;
      break;
    case '5':
      health = 70;
      break;
    default:
      health = 50;
  }

  const rand = Math.floor(Math.random() * 11);
  const randAvatar = Math.floor(Math.random() * 3) + 1;
  const startMotivation = 11;
  let name = '';
  const maleNames = ['Валера', 'Алёша', 'Егорка', 'Серёжа', 'Ваня', 'Саня', 'Павлик', 'Вадик', 'Женя', 'Вовчик', 'Коля']
  const femaleNames = ['Галя', 'Света', 'Маруся', 'Маша', 'Настя', 'Марина', 'Таня', 'Наташа', 'Вера', 'Даша', 'Вика']

  if (gender === 'male') {
    name = maleNames[rand];
  } else {
    name = femaleNames[rand];
  }
  const avatar = `${randAvatar}_${gender}_${health}.png`;

  database.ref(`clone/${uid}`).push({
    health: health,
    name: name,
    trend: 0,
    motivation: startMotivation,
    avatar: avatar,
  });
};
