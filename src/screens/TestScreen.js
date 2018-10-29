import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { firebaseConnect, isLoaded, isEmpty, set, auth } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { compose } from 'redux'

//SET, UPDATE AND PUSH DATA WORK
//SET - insert new data to directory and delite old data/structure()
//PUSH - create new item whis unique id
//UPDATE - rewrite data
// class TestScreen extends React.Component {

//     render(){
//         return(
//         <View style={{marginTop: 50}}>
//             <Button 
//             onPress={() => this.props.firebase.update('test3', { heres: 'is a val' })} 
//             title='Set To Firebase' />
//         </View>
//         )
//     }

// }
// export default firebaseConnect()(TestScreen)


// LOGIN USER IS WORK, GET UID IS WORK
class TestScreen extends React.Component {
    render() {
        // use this.props.firebase
        // this.props.firebase.login({
        //     email: 'test@test.com',
        //     password: 'testest'
        //   })

        // console.log(this.props.profile)
        // console.log(this.props.auth)

        var e = 'test2@test.com'
        var p = 'testest2'
        return (
            <View>
                <Text style={{ marginTop: 50 }}>Some Text</Text>
                <Button
                    title='auth'
                    onPress={() => this.props.firebase.auth().signInWithEmailAndPassword(
                        e, p
                    ).then(() => console.log(this.props.firebase.auth()))} />

                <Button
                    title='user'
                    onPress={() => console.log(this.props.firebase.auth().currentUser.uid)}
                />

            </View>
        )

    }
}
export default compose(

    firebaseConnect(),

    connect((state) => ({
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }))

)(TestScreen)

//CREATE USER IS WORK

// class TestScreen extends React.Component {
//     render(){
//         // use this.props.firebase
//         const createNewUser = ({ email, password, username, gender }) => {
//             this.props.firebase.createUser(
//               { email, password },
//               { username, email, gender}
//             )
//           }

//           // Call with info
//           createNewUser({
//             email: 'tes3@test.com',
//             password: 'testest',
//             username: 'tester3',
//             gender: 'male',
//           })
//         return(
//             <Text style={{marginTop: 50}}>Some Text</Text>
//         )
//     }
// }
// export default firebaseConnect()(TestScreen)


// class TestScreen extends React.Component {

//     componentDidMount(){

//     }

//     render() {

//         const x = this.props.users
//         if(isEmpty(x) || !isLoaded(x)) {
//             return(<Text>Loading...</Text>)
//         }else{
//             var y = x.test2
//         console.log(this.props.firebase.auth.uid)
//         return(
//         <View style={{marginTop: 100, marginLeft: 50}}>
//             <Text>Some text </Text>
//             {/* {Object.keys(y).map(cityId => (
//                 <Text key={cityId}>{y[cityId]}</Text>
//             ))} */}
//         </View>
//         )}


// }
// };

// export default compose(

//     firebaseConnect(() => [
//       { path: 'test2' },
//     ]),

//     connect((state) => ({
//       users: state.firebase.data,
//     }))

//   )(TestScreen)
