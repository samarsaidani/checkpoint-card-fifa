
import Card from 'react-bootstrap/Card';

function Playcard({joueur}) {
  return (
    <div className='play'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={joueur.image} />
      <Card.Body>
        <Card.Title>{joueur.name}</Card.Title>
        <Card.Text>
         {joueur.age} <br/>
          <h3>nationalité :</h3>{ joueur.nationality}<br/>
         <h3>équipe :</h3>{joueur.team}<br/>
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
  );
}

export default Playcard;