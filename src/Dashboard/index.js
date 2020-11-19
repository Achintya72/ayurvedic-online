import React, { useContext } from 'react';
import { UserContext } from '../Utils';

export default function Dashboard() {
    const { user, pushData } = useContext(UserContext);
    return (
        <>
            {user.hasFilledOutForms ? 
            <DashboardBase user={user} />:
            <DetailsForm user={user} handleSubmit={pushData}/>               
        }
        </>
    )
}

const DashboardBase = (props) => (
    <h1>Hello {props.user.name}!</h1>
)

const DetailsForm = (props) => (
    <h1>Please fill out the forms</h1>
)