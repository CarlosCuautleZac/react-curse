import PropTypes from 'prop-types';

export function Button({text, name="usuario"}){
if(!text){
    console.error("El texto es requerido")
}

    console.log(text)
    return <button onClick={function(){
        console.log('Hola mundo');
    }}>
        {text} - {name}
    </button>
}

Button.propTypes={
    text: PropTypes.string.isRequired
}

