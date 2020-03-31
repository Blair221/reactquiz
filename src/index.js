import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Quiz from './Quiz';
import * as serviceWorker from './serviceWorker';

const cosplays = [
    {
        name: "Luffy",
        imageUrl: "images/cosplays/luffy.jpg",
        imageSource: "Wikimedia Commons",
        animes: ["Dragonball Z", "One Piece", "Lupin the 3rd", "Sailor Moon"],
        correctAnime: 'One Piece'
    }
]

const state = {
    turnData: {
        cosplay: cosplays[0],
        animes: cosplays[0].animes
    }
}

ReactDOM.render(<Quiz {...state} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
