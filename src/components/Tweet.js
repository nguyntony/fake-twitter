// this will be the blueprint for a single tweet

import React, {useEffect} from 'react'

export default function Tweet({tweets, setTweets}) {

    const data2 = [
        // when this component gets re render, this variable is a new memory address and that is how react determines if it is a new variable or not
        {
            name: 'michelle',
            textInput: 'react is ...'
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

    const fetchData = async () => {
        const dataPromise = fetch('https://rickandmortyapi.com/api/character', {
            headers: {Accept: 'application/json'}
        })
        const res = await dataPromise
        const data = await res.json()
        const characters = data.results
        console.log(characters)
        const rickTweets = characters.map(c => {
            return {
                name: c.name,
                textInput: `Hi my name is ${c.name} and I am ${c.species}`
            }
        })

        setTweets([...data2, ...rickTweets])

    }

    useEffect(() => {
        fetchData()
    }, []);

    // this empty array acts as a limiter, this will limit the side effect and how often it will run, it tells react 'everytime that there is a change you should not run the side effect'. you should only run the se only once
    // you will see a warning ignore for now.

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