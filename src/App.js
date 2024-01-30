import './App.css';
import { Testimonium } from './components/Testimonium';

function App() {
  return (
    <div className="App">
      <h1>DLC Team</h1>
      <div class= "principal-container">
      <Testimonium 
      name='Nehemías Mosqueda'
      university='UNRaf'
      work='Programmer'
      image='Sarah'
      text="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify." 
      />
      <Testimonium 
      name='Camila Renna'
      university='UNRaf'
      work='2D Artist'
      image='Emma'
      text="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify." 
      />
      <Testimonium 
      name='Luka Martina'
      university='UNRaf'
      work='Game Designer'
      image='Shawn'
      text="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify." 
      />

      </div>
    </div>
  );
}

export default App;
