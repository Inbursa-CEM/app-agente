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
        <h4> Número de llamadas mensuales: {numLlamadas} </h4>
        <div className="table-style">
          {listaLlamadas.map((llamada) => (
            <div className='elemLista'>
              <h5> {llamada.title} </h5>
              <h6> {llamada.description} </h6>
              <div className='calif'>
                {[...Array(5)].map((_, starIndex) => (
                    starIndex < llamada.stars ? <StarIcon style={{color: 'gold'}} /> : <StarBorderIcon />
                ))}
                <div className='fecha'> {llamada.date} </div>
              </div>
              <hr/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Llamadas;
