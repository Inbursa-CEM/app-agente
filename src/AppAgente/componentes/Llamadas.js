// Componente que muestra las últimas llamadas realizadas por el cliente
// Autor: Alan Alcántara Ávila

import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import "../styles/infoCliente.css";

const Llamadas = ({numLlamadas, listaLlamadas}) => {
  return (
    <div className="grupo">
      <div className="titulo"> Llamadas </div>
      <div className="objetoLlamadas">
        <div className="texto">
          Número de llamadas mensuales: {numLlamadas}
        </div>
        <scroll-container>
          {listaLlamadas.map((llamada, index) => (
            <scroll-page key={index}>

            <div className='elemLista' key={llamada.id}>
              <h5> {llamada.tema} </h5>
              <h6> {llamada.motivo} </h6>
              <div className='calif'>
                {[...Array(5)].map((_, starIndex) => (
                    starIndex < llamada.stars ? <StarIcon key={starIndex} style={{color: 'gold'}} /> : <StarBorderIcon key={starIndex}/>
                ))}
                <div className='fecha'> {llamada.fecha} </div>
              </div>
            </div>
            </scroll-page>
          ))}

        </scroll-container>

      </div>
    </div>
  );
};

export default Llamadas;
