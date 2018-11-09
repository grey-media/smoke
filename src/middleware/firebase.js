import React from 'react'
import { auth, database } from '../config/firebase'

// autorization whis email and password
// export const fbLogin = ( email, password ) => {
//     auth.signInWithEmailAndPassword(email, password).catch(error => {
//         const errorMessage = error.message
//         throw error
//     })
// };

// export const fbRegistrationUser = (email, password, gender, sigarets) => {
//     auth.createUserWithEmailAndPassword(email, password).then(() => {
//         fbCreateJournal(auth.currentUser.uid, sigarets)
//     }).then(() => {
//         fbCreateClone(auth.currentUser.uid, sigarets, gender)
//     });
// };

// create journal record whis user id
export const fbCreateJournal = (uid, sigarets) => {
  const dateNow = new Date();
  const date = `${dateNow.getFullYear()}-${dateNow.getMonth() + 1}-${dateNow.getDate()}`;
  database.ref(`journal/${uid}`).push({ date: date, sigarets: sigarets });
}

//creact clone
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
  }

  let rand = Math.floor(Math.random() * 11);
  let rand_avatar = Math.floor(Math.random() * 3) + 1;
  let rand_motivation = Math.floor(Math.random() * 11) + 1;
  let name = ''
  const male_names = ['Валера', 'Алёша', 'Егорка', 'Серёжа', 'Ваня', 'Саня', 'Павлик', 'Вадик', 'Женя', 'Вовчик', 'Коля']
  const female_names = ['Галя', 'Света', 'Маруся', 'Маша', 'Настя', 'Марина', 'Таня', 'Наташа', 'Вера', 'Даша', 'Вика']

  if (gender === 'male') {
    name = male_names[rand]
  } else {
    name = female_names[rand]
  }
  const avatar = `${rand_avatar}_${gender}_${health}.png`

  database.ref(`clone/${uid}`).push({
    health: health,
    name: name,
    trend: 0,
    motivation: rand_motivation,
    avatar: avatar,
  });

}