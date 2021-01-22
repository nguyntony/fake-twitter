import logo from './logo.svg';
import './App.css';
import CreateTweet from './components/CreateTweet'
import Feed from './components/Feed'
import {useState} from 'react'

function App() {
  // I want to pass down state and props to two different children, so I need to have the that initialized here so that I can pass it down. 

  const [name, setName] = useState('')
  const [textInput, setTextInput] = useState('')
  const [tweets, setTweets] = useState([])

  return (
    <>
      <h1>Fake Twitter.con</h1>
      <CreateTweet textInput={textInput} setTextInput={setTextInput} tweets={tweets} setTweets={setTweets} name={name} setName={setName}/>
      <Feed textInput={textInput} setTextInput={setTextInput} tweets={tweets} setTweets={setTweets} name={name} setName={setName}/>
    </>
  );
}

export default App;
