import './App.css';
import Netflixheader from './Components/headerComponent';
import AdsBanner from './Components/customAdComponent'
import Netflixfooter from './Components/footerComponent';
import GetStarted from './Components/getStartedComponent';
import Faq from './Components/faqComponent'
import Card from './Components/cardComponent';
import TvImg from './ressources/tv.png';
import DevicesImg from './ressources/device-pile.png';
import ChildrensImg from './ressources/children.png';
import MobileImg from './ressources/mobile-0819.jpg';

/** Array of frequently asked questions to be used as a props  in the Faq componenent  */
const faq = [
  {
    title: 'What is Netflix?',
    content: "Netflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want – all for one low monthly price. There's always something new to discover, and new TV programmes and films are added every week!",
  },
  {
    title: 'How much does Netflix cost?',
    content: 'Watch Netflix on your smartphone, tablet, smart TV, laptop or streaming device, all for one fixed monthly fee. Plans range from £4.99 to £17.99 a month. No extra costs, no contracts.'
  },
  {
    title: 'Where can I watch?',
    content: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles." +
      "You can also download your favourite programmes with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
  },
  {
    title: 'How do I cancel?',
    content: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account at any time."
  },
  {
    title: 'What can I watch on Netflix?',
    content: "Netflix has an extensive library of feature films, documentaries, TV programmes, anime, award-winning Netflix originals, and more. Watch as much as you want, any time you want."
  },
  {
    title: 'Is Netflix good for children?',
    content: "The Netflix Children's experience is included in your membership to give parents control while children enjoy family-friendly TV programmes and films in their own space.Children's profiles come with PIN-protected parental controls that let you restrict the maturity rating of content children can watch and block specific titles you don’t want children to see."
  },
];

//Main app 
function App() {
  return (
    <div className="App" >
      <div id='headerAndGetStarted'>
        <Netflixheader />
        <GetStarted />
      </div>
      <AdsBanner />
      <Card header='Enjoy your TV' description='Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.' imgSource={TvImg}  imagePosition = 'left'/>
      <Card header='Watch everywhere' description='Stream unlimited films and TV programmes on your phone, tablet, laptop and TV.' imgSource={DevicesImg} imagePosition = 'right'/>
      <Card header='Create profiles for children' description='Send children on adventures with their favourite characters in a space made just for them – free with your membership.' imgSource={ChildrensImg} imagePosition = 'left' />
      <Card header='Download your programmes to watch offline' description='Watch on a plane, train or submarine...' imgSource={MobileImg} imagePosition = 'right'/>
      <div/>
      <Faq items={faq} />
      <Netflixfooter />
    </div>
  )
}

export default App;
