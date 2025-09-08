import { useState } from 'react'
import { Fragment } from 'react'

export default function ParentComponent() {

    function greetings() {
        return "Hellow WOrlds"
    }

    const [name, setName] = useState('Dan')

    return (
        <>
            <UserComponent name="Dan" /> 

            <ProfileComponent 
            name="Dan"
            age="21"
            dream="Fullstack Web Developer" />

            <FeedComponent greetings={greetings} />

            <UserComponent name={name} setName={setName} />
        </>
    )
}

function UserComponent(user) {

    if(user.setName){
    return(
        <>
            <h1> User Component: {user.name} </h1>
            <button onClick={() => user.setName('Hindi si Dan')}>Change name</button>
            <button onClick={() => user.setName('Dan')}>Change back</button>
        </>
    ) 
    }

    return(
        <>
            <h1> User Component: {user.name} </h1>
        </>
    )

}

function ProfileComponent(user) {
  return (
    <>
    <h1>Profile Component:</h1>
    <p>Name: {user.name} Age: {user.age} Dream: {user.dream} </p>
    </>
  )
}

function FeedComponent(props) {
  return <h1> Feed Component: {props.greetings()} </h1>
}




