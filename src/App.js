import logo from './logo.svg';
import './App.css';
import CreateTweet from './components/CreateTweet'
import Feed from './components/Feed'
import {useState} from 'react'

function App() {
  // I want to pass down state and props to two different children, so I need to have the that initialized here so that I can pass it down. 

  // initialized tweets here because both the feed and createtweet component needs to be able to access this data.
  const [tweets, setTweets] = useState([])
  // this is lowkey like a global variable and the kids have access to this data to it bc the parent has this value. 

  return (
    <>
      <h1>Fake Twitter.con</h1>
      <CreateTweet tweets={tweets} setTweets={setTweets}/>
      <Feed tweets={tweets} setTweets={setTweets}/>
    </>
  );
}

export default App;
