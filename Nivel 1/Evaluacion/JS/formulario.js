document.addEventListener('DOMContentLoaded', () => {
    const datos = {
        nombre: document.querySelector('#nombre'),
        segundo: document.querySelector('#segundo'),
        paterno: document.querySelector('#paterno'),
        materno: document.querySelector('#materno'),
        telefono: document.querySelector('#telefono'),
        direccion: document.querySelector('#direccion'),
        postal: document.querySelector('#postal')
    };

    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,30}$/,
        paterno: /^[a-zA-ZÀ-ÿ\s]{1,30}$/,
        materno: /^[a-zA-ZÀ-ÿ\s]{1,30}$/,
        telefono: /^\d{8,10}$/,
        postal: /^\d{5}$/

    }

    const banderita = {
        nombre: false,
        paterno: false,
        materno: false,
        telefono: false,
        postal: false
    }
    const formulario = document.querySelector("#registrar")
    const inputs = document.querySelectorAll('#formulario input')
    
    const validacion = (e) =>{
        switch (e.target.name){
            case "nombre":
                validarInput(expresiones.nombre,e.target,'nombre');
            break;
            case "paterno":
                validarInput(expresiones.paterno,e.target,'paterno');
            break;
            case "materno":
                validarInput(expresiones.materno,e.target,'materno');
            break;
            case "telefono":
                validarInput(expresiones.telefono,e.target,'telefono');
            break;
            case "postal":
                validarInput(expresiones.postal,e.target,'postal');
            break;
        }
    }


    inputs.forEach((input) =>{
        input-addEventListener('keyup', validacion)
        input-addEventListener('blur', validacion)
    })

    formulario.addEventListener('submit', (e) => {
        document.querySelector('final').classList.remove('validacion_final_incorrecta');
        if(banderita.nombre && banderita.paterno && banderita.materno && banderita.telefono && banderita.postal){
            formulario.reset();
        }
        else{
            console.log("Estamos aca");
            document.querySelector('final').classList.add('validacion_final_incorrecta');
        }


        const peticion = Object.keys(datos).reduce((obj, element) => {
            obj[element] = form[element].value;
            return obj;
        }, {});

        axios.post('https://demo7460034.mockable.io/users', peticion)
            .then(({peticion}) => {
                mensajeExitoso(peticion);
            })
    })

    function mensajeExitoso() {
        alert("Registro Existoso");
    }

    const validarInput = (expresion, input, campo) =>{
        if(expresion.test(input.value)){
            document.querySelector(`#div${campo}`).classList.remove('incorrecto');
            document.querySelector(`#div${campo}`).classList.add('correcto');
            document.querySelector(`#div${campo} .validacion`).classList.remove('validacion_incorrecta')
            banderita[campo] = true;
        } else{
            document.querySelector(`#div${campo}`).classList.remove('correcto');
            document.querySelector(`#div${campo}`).classList.add('incorrecto');
            document.querySelector(`#div${campo} .validacion`).classList.add('validacion_incorrecta')
            banderita[campo] = false;
        }
    }

    

});


