// this will be the feed 
import React from 'react'
import Tweet from './Tweet'


export default function Feed({tweets, setTweets}) {

    return (
        <>
        <section>
            <Tweet tweets={tweets} setTweets={setTweets}/>
        </section>
        </>
    )
}