import React, { useState, createContext, useContext, useEffect } from 'react';
import { FirebaseContext } from './Firebase';

const UserContext = createContext(null);

const UserContextProvider = (props) => {
    const firebase = useContext(FirebaseContext);
    const [userDetails, userDetailsHandler] = useState({
        name: null,
        email: null,
        hasFilledOutForms: true,
        role: null
    });

    useEffect(() => {
        firebase.auth.onAuthStateChanged(user => {
            if (user) {
                firebase.firestore.collection('Providers').where("email", "==", `${user.email}`).get()
                    .then(docSnapshot => {
                        if (docSnapshot.empty) {

                            firebase.firestore.collection('Consumers').where("email", "==", `${user.email}`).get()
                                .then(docSnapshot => {

                                    if (docSnapshot.empty) {
                                        const initial_state = {
                                            name: user.dsiplayName,
                                            email: user.email,
                                            hasFilledOutForms: false,
                                            role: null
                                        };
                                        userDetailsHandler(initial_state);
                                    }

                                    else {
                                        userDetailsHandler(docSnapshot.docs[0].data());
                                    }
                                })
                        }
                        else {
                            userDetailsHandler(docSnapshot.docs[0].data());
                        }
                    })
            }
            else {
                userDetailsHandler({
                    name: null,
                    email: null,
                    hasFilledOutForms: true,
                    role: null
                })
            }
        })
    }, [])
    const getUpdatedInfo = () => {
        console.log(userDetails);
    }
    const pushData = (data) => {
        firebase.firstore.collection('Users').where("email", "==", `${firebase.auth.currentUser.email}`).set({
            ...data
        }, { merge: true });
    }
    const value = {
        user: userDetails,
        getUpdatedInfo,
        pushData
    }
    return (

        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    )

}

export { UserContext, UserContextProvider };