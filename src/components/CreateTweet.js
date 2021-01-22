// this will be the form that will accept the content of the tweet.
import React from 'react'

export default function CreateTweet({textInput, setTextInput, tweets, setTweets, name, setName}) {

    const textInputHandler = e => {
        setTextInput(e.target.value)
    }

    const nameHandler = e => {
        setName(e.target.value)
    }

    const submitTweetHandler = e => {
        e.preventDefault()
        setTweets([...tweets, {name, textInput}])
        setName('')
        setTextInput('')
    }

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