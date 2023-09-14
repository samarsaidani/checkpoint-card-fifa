import Playcard from "./plays"
const Playlist = ({jouer})=>{
console.log(jouer)
    return(
        <div className="playCa">
            {jouer.map((element,index)=>{
                return <Playcard joueur={element} key={index}/>
            })}
            
        </div>
    )
}
export default Playlist ;