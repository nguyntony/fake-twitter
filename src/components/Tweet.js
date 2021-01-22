// this will be the blueprint for a single tweet

import React, {useEffect} from 'react'

export default function Tweet({textInput,setTextInput, tweets, setTweets, name, setName}) {

    const data = [
        {
            name: 'michelle',
            textInput: 'react is annoying'
        },
        {
            name: 'misty',
            textInput: 'made a yummy dinner tonight #livinglife'
        },
        {
            name: 'tyler',
            textInput: 'studying react right now #grinding'
        },
        {
            name: 'elvis',
            textInput: 'going to stream later tonight @ 5'
        },
    ]

    useEffect(() => {
        // for (let d in data) {
        //     setTweets([...tweets], {
        //         name: d.personName,
        //         textInput: d.personTextInput
        //     })
        // }
        // setTweets([{name: 'tony', textInput: 'I wrote this myself'}])

        setTweets([...data])

    }, []);

    return (
        <>
        {
            tweets.map((t, idx) => (
                <div key={idx}>
                    <h2>{t.name}</h2>
                    <p>{t.textInput}</p>
                </div>
            ))
        }
        </>
    )
}