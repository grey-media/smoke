import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'

// autorization whis email and password
export const fbLogin = (props, email, password) => {
    props.firebase.auth().signInWithEmailAndPassword(
        email, password
    )
}

// create journal record whis user id
export const fbCreateJournal = (props, uid, sigarets) => {
    const dateNow = new Date();
    const date = `${dateNow.getFullYear()}-${dateNow.getMonth() + 1}-${dateNow.getDate()}`;
    props.firebase.push(`journal/${uid}`, { date: date, sigarets: sigarets })
}

//creact clone
export const fbCreateClone = (props, uid, sigarets, gender) => {
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

    if (gender === 'male'){
        name = male_names[rand]
    }else{
        name = female_names[rand] 
    }
    const avatar = `${rand_avatar}_${gender}_${health}.png`

    props.firebase.push(`clone/${uid}`, {
        health: health,
        name: name,
        trend: 0,
        motivation: rand_motivation,
        avatar: avatar,
    })
    
}