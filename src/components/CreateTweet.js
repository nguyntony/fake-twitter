// this will be the form that will accept the content of the tweet.

// this is like the manager in a dept, and it will have some forms, it report back to its boss whenever its done with whatever it needs to do.
import React, {useState} from 'react'

export default function CreateTweet({tweets, setTweets}) {

    // initializting state hooks for the name and textinput, this data is what makes up a 'tweet'
    const [name, setName] = useState('')
    const [textInput, setTextInput] = useState('')


    // fns that will handle the data and extract the values from the form.
    const textInputHandler = e => {
        setTextInput(e.target.value)
    }

    const nameHandler = e => {
        setName(e.target.value)
    }

    const submitTweetHandler = e => {
        // I need to use prevent default here, bc the default action of submitting of form is a page refresh, however...react already takes care of that for you. 
        e.preventDefault()
        setTweets([...tweets, {name, textInput}])
        setName('')
        setTextInput('')
    }


    // in this return statement this is where you will actually pass the handler fns as callback functions, we are using two different kinds of event, onsubmit and onchange. 
    // furthermore, I needed to pass the value 'name' and 'textinput' bc that is how I link the two, there is a connection there. 

    return (
        <>
            <form onSubmit={submitTweetHandler}>
                <input type="text" placeholder='Name' value={name} onChange={nameHandler} required/>
                <textarea cols="30" rows="10" value={textInput} onChange={textInputHandler} required></textarea>
                <button type="submit">Post</button>
            </form>
        </>
    )
}