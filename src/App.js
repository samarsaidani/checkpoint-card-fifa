



import Playlist from './component/playlist'
import './component/play.css'

function App() {
  const jouer = [{name:"Lionel Messi",age:"36 ans",nationality:"Argentine/Espagnole",team:" Inter Miami CF",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/250px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg"},
  {name:"Emiliano Martínez",age:"31 ans ",nationality:" Argentine",team:"Aston Villa",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Damian_Martinez.jpg/250px-Damian_Martinez.jpg"},
  {name:"Kylian Mbappé",age:"24 ans ",nationality:"Française",team:"Paris Saint-Germain",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/2022_FIFA_World_Cup_France_4%E2%80%931_Australia_-_%287%29_%28cropped%29.jpg/250px-2022_FIFA_World_Cup_France_4%E2%80%931_Australia_-_%287%29_%28cropped%29.jpg"},
  {name:"Hannibal Mejbri ",age:"20 ans ",nationality:"Française/Tunisienne",team:"Manchester United",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Manchester_United_v_Norwich_City%2C_16_April_2022_%2802%29.jpg/280px-Manchester_United_v_Norwich_City%2C_16_April_2022_%2802%29.jpg"}]
  return (
    <div >

<Playlist jouer={jouer}/>
    </div>);
     
}

export default App;
