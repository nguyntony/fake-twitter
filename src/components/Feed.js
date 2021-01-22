// this will be the feed 
import React from 'react'
import Tweet from './Tweet'
import {useEffect} from 'react'

export default function Feed({textInput, setTextInput, tweets, setTweets, name, setName}) {

    // if I wanted to preload some data I could do it here? 

    return (
        <>
        <section>
            <Tweet textInput={textInput} setTextInput={setTextInput} tweets={tweets} setTweets={setTweets} name={name} setName={setName}/>
        </section>
        </>
    )
}