//Quotes Credit: https://type.fit/api/quotes

import '../App.css';
import React,{useState} from 'react';

function Quote(){
    let initialState={
        quote:" Not everyone can become a great artist, but a great artist can come from anywhere." ,
        author:<a class="an" href="https://pixar.fandom.com/wiki/Anton_Ego" >Anton Ego</a>
        }
      const [quote, setQuote] = useState(initialState);
      let quotes=[
        {
          quote:"Genius is one percent inspiration and ninety-nine percent perspiration.",
          author:<a class="an" href="https://en.wikipedia.org/wiki/Thomas_Edison" >Thomas Edison</a>
        },
        {
          "quote": "You can observe a lot just by watching.",
          "author": <a class="an" href="https://en.wikipedia.org/wiki/Yogi_Berra" >Yogi Berra</a>
        },
        {
          "quote": "A house divided against itself cannot stand.",
          "author": <a class="an" href="https://en.wikipedia.org/wiki/Abraham_Lincoln" >Abraham Lincoln</a>
        },
        {
          "quote": "Difficulties increase the nearer we get to the goal.",
          "author":<a class="an" href="https://en.wikipedia.org/wiki/Johann_Wolfgang_von_Goethe" >Johann Wolfgang von Goethe</a>
        },
        {
          "quote": "Fate is in your hands and no one elses",
          "author": <a class="an" href="https://www.wow4u.com/byron-pulsifer/" >Byron Pulsifer</a>
        },
        {
          "quote": "Be the chief but never the lord.",
          "author": <a class="an" href="https://en.wikipedia.org/wiki/Laozi" >Lao Tzu</a>
        },
        {
          "quote": "Nothing happens unless first we dream.",
          "author": <a class="an" href="https://en.wikipedia.org/wiki/Carl_Sandburg" >Carl Sandburg</a>
        },
        {
          "quote": "Well begun is half done.",
          "author": <a class="an" href="https://en.wikipedia.org/wiki/Aristotle" >Aristotle</a>
        },
        {
          "quote": "Life is a learning experience, only if you learn.",
          "author": <a class="an" href="https://en.wikipedia.org/wiki/Yogi_Berra" >Yogi Berra</a>
        },
        {
          "quote": "Self-complacency is fatal to progress.",
          "author":<a class="an" href="https://en.wikipedia.org/wiki/Margaret_Elizabeth_Sangster" >Margaret Sangster</a> 
        },
        {
          "quote": "Peace comes from within. Do not seek it without.",
          "author": <a class="an" href="https://en.wikipedia.org/wiki/Buddha" >Buddha</a>
        },
        {
          "quote": "What you give is what you get.",
          "author": <a class="an" href="https://www.wow4u.com/byron-pulsifer/" >Byron Pulsifer</a>
        },
        {
          "quote": "We can only learn to love by loving.",
          "author": <a class="an" href="https://en.wikipedia.org/wiki/Iris_Murdoch" >Iris Murdoch</a>
        },
        {
        "quote": "Life is change. Growth is optional. Choose wisely.",
        "author": <a class="an" href="https://premierespeakers.com/karen-kaiser-clark" >Karen Kaiser Clark
        </a>
        },
        {
        "quote": "You'll see it when you believe it.",
        "author": <a class="an" href="https://en.wikipedia.org/wiki/Wayne_Dyer" >Wayne Dyer</a>
        },
        {
        "quote": "To lead people walk behind them.",
        "author": <a class="an" href="https://en.wikipedia.org/wiki/Laozi" >Lao Tzu</a>
        },
        {
        "quote": "Having nothing, nothing can he lose.",
        "author": <a class="an" href="https://en.wikipedia.org/wiki/William_Shakespeare" >William Shakespeare</a>
        },
        {
        "quote": "Trouble is only opportunity in work clothes.",
        "author": <a class="an" href="https://en.wikipedia.org/wiki/Henry_J._Kaiser" >Henry J. Kaiser</a>
        },
        {
        "quote": "A rolling stone gathers no moss.",
        "author": <a class="an" href="https://en.wikipedia.org/wiki/Publilius_Syrus" >Publilius Syrus</a>
        },
        {
        "quote": "Ideas are the beginning points of all fortunes.",
        "author": <a class="an" href="https://en.wikipedia.org/wiki/Napoleon_Hill" >Napoleon Hill</a>
        },
        {
        "quote": "Everything in life is luck.",
        "author": <a class="an" href="https://en.wikipedia.org/wiki/Donald_Trump" >"Donald Trump</a>
        },
        {
        "quote": "Doing nothing is better than being busy doing nothing.",
        "author": <a class="an" href="https://en.wikipedia.org/wiki/Laozi" >Lao Tzu</a>
        },
        {
        "quote": "Trust yourself. You know more than you think you do.",
        "author": <a class="an" href="https://en.wikipedia.org/wiki/Benjamin_Spock" >Benjamin Spock</a>
        },
        {
        "quote": "Study the past, if you would divine the future.",
        "author": <a class="an" href="https://en.wikipedia.org/wiki/Confucius" >Confucius</a>
        },
        {
        "quote": "Well done is better than well said.",
        "author": <a class="an" href="https://en.wikipedia.org/wiki/Benjamin_Franklin" >Benjamin Franklin</a>
        },
        {
        "quote": "Bite off more than you can chew, then chew it.",
        "author": <a class="an" href="https://en.wikipedia.org/wiki/Ella_Williams" >Ella Williams</a>
   
        },
        {
        "quote": "Work out your own salvation. Do not depend on others.",
        "author": <a class="an" href="https://en.wikipedia.org/wiki/Buddha" >Buddha</a>
        },
        {
        "quote": "One today is worth two tomorrows.",
        "author": <a class="an" href="https://en.wikipedia.org/wiki/Benjamin_Franklin" >Benjamin Franklin</a>
        },
        {
        "quote": "Once you choose hope, anythings possible.",
        "author": <a class="an" href="https://en.wikipedia.org/wiki/Christopher_Reeve" >Christopher Reeve</a>
        },
        {
        "quote": "God always takes the simplest way.",
        "author": <a class="an" href="https://en.wikipedia.org/wiki/Albert_Einstein" >Albert Einstein</a>
        },
        {
        "quote": "One fails forward toward success.",
        "author": <a class="an" href="https://en.wikipedia.org/wiki/Charles_F._Kettering" >Charles Kettering</a>
        },
      
        {
        "quote": "Be as you wish to seem.",
        "author": <a class="an" href="https://en.wikipedia.org/wiki/Socrates" >Socrates</a>
        },
        {
          "quote": "Deep listening is miraculous for both listener and speaker.When someone receives us with open-hearted, non-judging, intensely interested listening, our spirits expand.",
          "author": <a class="an" href="https://www.suepattonthoele.com" >Sue Patton Thoele</a>
        },
        {
          "quote": "You may be deceived if you trust too much, but you will live in torment if you don't trust enough.",
          "author": <a class="an" href="https://en.wikiquote.org/wiki/Frank_Crane" >Frank Crane</a>
        },
        {
          "quote": "Great indeed is the sublimity of the Creative, to which all beings owe their beginning and which permeates all heaven.",
          "author": <a class="an" href="https://en.wikipedia.org/wiki/Laozi" >Lao Tzu</a>
        },
        {
          "quote": "All that is necessary is to accept the impossible, do without the indispensable, and bear the intolerable.",
          "author": <a class="an" href="https://en.wikipedia.org/wiki/Kathleen_Norris" >Kathleen Norris</a>
        },
        {
          "quote": "Choose a job you love, and you will never have to work a day in your life.",
          "author": <a class="an" href="https://en.wikipedia.org/wiki/Confucius" >Confucius</a>
        },
        {
          "quote": "You cannot find yourself by going into the past. You can find yourself by coming into the present.",
          "author": <a class="an" href="https://en.wikipedia.org/wiki/Eckhart_Tolle" >Eckhart Tolle</a>
        },
        {
          "quote": "All our talents increase in the using, and the every faculty, both good and bad, strengthen by exercise.",
          "author": <a class="an" href="https://en.wikipedia.org/wiki/Anne_Bront%C3%AB" >Anne Bronte</a>
        },
        {
          "quote": "In order to live free and happily you must sacrifice boredom. It is not always an easy sacrifice.",
          "author": <a class="an" href="https://en.wikipedia.org/wiki/Richard_Bach" >Richard Bach</a>
        },
        {
          "quote": "The fox has many tricks. The hedgehog has but one. But that is the best of all.",
          "author": <a class="an" href="https://en.wikipedia.org/wiki/Erasmus" >Desiderius Erasmus</a>
        },
        {
          "quote": "Of course there is no formula for success except perhaps an unconditional acceptance of life and what it brings.",
          "author": <a class="an" href="https://en.wikipedia.org/wiki/Arthur_Rubinstein" >
          Arthur Rubinstein</a>
        },
        {
          "quote": "Let me tell you the secret that has led me to my goal: my strength lies solely in my tenacity",
          "author": <a class="an" href="https://en.wikipedia.org/wiki/Louis_Pasteur" >Louis Pasteur</a>
        },
        {
          "quote": "Something opens our wings. Something makes boredom and hurt disappear. Someone fills the cup in front of us: We taste only sacredness.",
          "author": <a class="an" href="https://en.wikipedia.org/wiki/Rumi" >Rumi</a>
        },
        {
          "quote": "We must never forget that it is through our actions, words, and thoughts that we have a choice.",
          "author": <a class="an" href="https://en.wikipedia.org/wiki/Sogyal_Rinpoche" >Sogyal Rinpoche</a>
        },
        {
          "quote": "We see things not as they are, but as we are. Our perception is shaped by our previous experiences.",
          "author": <a class="an" href="https://denniskimbrospeaks.com/about-dr-kimbro" >Dennis Kimbro</a>
        },
        {
          "quote": "True silence is the rest of the mind; it is to the spirit what sleep is to the body, nourishment and refreshment.",
          "author": <a class="an" href="https://en.wikipedia.org/wiki/William_Penn" >William Penn</a>
        },
        {
          "quote": "All our knowledge begins with the senses, proceeds then to the understanding, and ends with reason. There is nothing higher than reason.",
          "author": <a class="an" href="https://en.wikipedia.org/wiki/Immanuel_Kant" >Immanuel Kant</a>
        },
        {
          "quote": "The thought manifests as the word. The word manifests as the deed. The deed develops into habit. And the habit hardens into character.",
          "author": <a class="an" href="https://en.wikipedia.org/wiki/Buddha" >Buddha</a>
        },
        {
          "quote": "Patience is a virtue but you will never ever accomplish anything if you don't exercise action over patience.",
          "author": <a class="an" href="https://www.wow4u.com/byron-pulsifer/" >Byron Pulsifer</a>
        },
        {
          "quote": "Any of us can achieve virtue, if by virtue we merely mean the avoidance of the vices that do not attract us.",
          "author": <a class="an" href="https://en.wikipedia.org/wiki/Yogi_Berra" >Yogi Berra</a>
        },
        {
          "quote": "If the single man plant himself indomitably on his instincts, and there abide, the huge world will come round to him.",
          "author": <a class="an" href="https://en.wikipedia.org/wiki/Ralph_Waldo_Emerson" >Ralph Emerson</a>
        },
        {
          "quote": "Money was never a big motivation for me, except as a way to keep score. The real excitement is playing the game.",
          "author": <a class="an" href="https://en.wikipedia.org/wiki/Donald_Trump" >Donald Trump</a>
        },
        {
          "quote": "Friendship with oneself is all important because without it one cannot be friends with anybody else in the world.",
          "author": <a class="an" href="https://en.wikipedia.org/wiki/Eleanor_Roosevelt" >Eleanor Roosevelt</a>
        },
        {
          "quote": "Peace is not something you wish for. It's something you make, something you do, something you are, and something you give away.",
          "author": <a class="an" href="https://en.wikipedia.org/wiki/Robert_Fulghum" >Robert Fulghum</a>
        },
        {
          "quote": "A wise man can learn more from a foolish question than a fool can learn from a wise answer.",
          "author": <a class="an" href="https://en.wikipedia.org/wiki/Bruce_Lee" >Bruce Lee</a>
        },
        {
          "quote": "Every man takes the limits of his own field of vision for the limits of the world.",
          "author": <a class="an" href="https://en.wikipedia.org/wiki/Arthur_Schopenhauer" >Arthur Schopenhauer</a>
        },
        {
          "quote": "One does not discover new lands without consenting to lose sight of the shore for a very long time.",
          "author": <a class="an" href="https://en.wikipedia.org/wiki/André_Gide" >André Gide</a>
        },
        {
          "quote": "What is new in the world? Nothing. What is old in the world? Nothing. Everything has always been and will always be.",
          "author": <a class="an" href="https://en.wikipedia.org/wiki/Sai_Baba" >Sai Baba</a>
        },
        {
          "quote": "Genuine love should first be directed at oneself if we do not love ourselves, how can we love others?",
          "author": <a class="an" href="https://en.wikipedia.org/wiki/Dalai_Lama" >Dalai Lama</a>
        },
        {
          "quote": "Life is like a sewer. What you get out of it depends on what you put into it.",
          "author": <a class="an" href="https://en.wikipedia.org/wiki/Tom_Lehrer" >Tom Lehrer</a>
        },
        {
          "quote": "Notice that the stiffest tree is most easily cracked, while the bamboo or willow survives by bending with the wind.",
          "author": <a class="an" href="https://en.wikipedia.org/wiki/Bruce_Lee" >Bruce Lee</a>
        },
        {
          "quote": "Learn all you can from the mistakes of others. You won't have time to make them all yourself.",
          "author": <a class="an" href="https://en.wikipedia.org/wiki/Alfred_Sheinwold" >Alfred Sheinwold</a>
        },
        {
          "quote": "Judge nothing, you will be happy. Forgive everything, you will be happier. Love everything, you will be happiest.",
          "author": <a class="an" href="https://en.wikipedia.org/wiki/Sri_Chinmoy" >Sri Chinmoy</a>
        },
        {
          "quote": "People are so constituted that everybody would rather undertake what they see others do, whether they have an aptitude for it or not.",
          "author": <a class="an" href="https://en.wikipedia.org/wiki/Johann_Wolfgang_von_Goethe" >Johann Wolfgang von Goethe</a>
        },
        {
          "quote": "We are either progressing or retrograding all the while. There is no such thing as remaining stationary in this life.",
          "author":<a class="an" href="https://en.wikipedia.org/wiki/James_Freeman_Clarke" >James Freeman Clarke</a>
        },
        {
          "quote": "The possession of knowledge does not kill the sense of wonder and mystery. There is always more mystery.",
          "author": <a class="an" href="https://en.wikipedia.org/wiki/Anaïs Nin" >Anaïs Nin</a>
        },
        {
          "quote": "Everything that happens happens as it should, and if you observe carefully, you will find this to be so.",
          "author": <a class="an" href="https://en.wikipedia.org/wiki/Marcus_Aurelius" >Marcus Aurelius</a>
        },
        {
          "quote": "What we think determines what happens to us, so if we want to change our lives, we need to stretch our minds.",
          "author": <a class="an" href="https://en.wikipedia.org/wiki/Wayne_Dyer" >Wayne Dyer</a>
        },
        {
          "quote": "In a controversy the instant we feel anger we have already ceased striving for the truth, and have begun striving for ourselves.",
          "author": <a class="an" href="https://en.wikipedia.org/wiki/Buddha" >Buddha</a>
        },
        {
          "quote": "It is the greatest of all mistakes to do nothing because you can only do little do what you can.",
          "author": <a class="an" href="https://en.wikipedia.org/wiki/Sydney_Smith" >Sydney Smith</a>
        },
        {
          "quote": "When you see a man of worth, think of how you may emulate him. When you see one who is unworthy, examine yourself.",
          "author": <a class="an" href="https://en.wikipedia.org/wiki/Confucius" >Confucius</a>
        },
        {
          "quote": "Sometimes the cards we are dealt are not always fair. However you must keep smiling and moving on.",
          "author": <a class="an" href="https://en.wikipedia.org/wiki/Tom_Jackson" >Tom Jackson</a>
        }
      ]
      let generateQuote=()=>{
        console.log(quotes.length);
        var random = Math.floor(Math.random() * (quotes.length - 0) ) + 0;
        console.log(random);
        setQuote(quotes[random]);
      };
    
      return (
          <div className="container" onLoad={()=>{generateQuote()}}>
            <h2 id="tittle">❝ Welcome to Two cents of Wisdom ❞</h2>
            <header class="header">❝ Powered by a custom-built API ❞</header>
            
            <div className="wrapper" id="quote-box">
            <h2 id="text">{quote.quote}</h2>
            <br />
            <div>
            <h3 id="author">{quote.author}</h3>
            </div>
            <div> 
            <button id="new-quote" onClick={generateQuote}>Next Quote</button>
            </div>
            </div>
            <footer class="footer">Credit to the base API: <a href="https://type.fit/api/quotes ">\_API_/</a></footer>
            
          </div>
        )
}

export default Quote