// Componente que controla el cambio de color del semaforo dependiento del tiempo de la llamada
// Autor: Rosa Itzel Figueroa Rosas
import '../styles/semaforo.css';

const Semaforo = ({tiempo}) => {
    
    //Funcion que encarga de cambiar el color del semáforo dependiendo de la duración de la llamada
    const obtenerClaseSemaforo = () => {
        if (tiempo < 46000) {
            return 'circuloVerdeON'; // Iniciar en verde
        } else if (tiempo >= 46000 && tiempo < 60000) {
            return 'circuloAmarilloON';
        } else {
            return 'circuloRojoON';
        }
    };    

    return (
        <div>
            <div className='semaforo'>
                <div className={`circuloRojo ${obtenerClaseSemaforo() === 'circuloRojoON' ? 'circuloRojoON' : ''}`}></div>
                <div className={`circuloAmarillo ${obtenerClaseSemaforo() === 'circuloAmarilloON' ? 'circuloAmarilloON' : ''}`}></div>
                <div className={`circuloVerde ${obtenerClaseSemaforo() === 'circuloVerdeON' ? 'circuloVerdeON' : ''}`}></div>
            </div>
        </div>
    );
}

export default Semaforo;

 