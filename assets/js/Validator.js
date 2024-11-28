import {inputMap} from './inputMap.js';
export class Validator{
    #mappedInputs = [];

    constructor(forms){//Obtengo los formularios del html
        //Recorro los formularios que me llegan y obtengo de cada uno todos los inputs
        console.log(typeof forms);
        forms.forEach(form => {
            /*
                1º) Recorro los formularios que me pasan por el constructor
                2º) Con el form.querySelectorAll('input') obtengo todos los inputs de cada formulario
                3º) El form.querySelectorAll('input') me devuelve un NodeList, por lo que lo convierto a un array con el operador [...elNodeList]
                4º) Llamo a la función inputMap que me mapea los inputs de cada formulario y me devuelve un array con los inputs mapeados
                5º) Filtro los inputs que me devuelve inputMap para evitar los undefined
                6º) Por ultimo una vez ya con el array de inputs mapeado y filtrado, lo añado al array this.#mappedInputs que va a contener
                    todos los inputs de todos los formularios agrupados en arrays.

                    Con lo cual me quedaria la siguiente estructura:
                        #mappedInputs = [
                            [
                                {
                                    type: 'euro' o 'date',
                                    input: input
                                },
                                {
                                    type: 'euro' o 'date',
                                    input: input
                                }
                            ],

                            [
                                {
                                    type: 'euro' o 'date',
                                    input: input
                                },

                                {
                                    type: 'euro' o 'date',
                                    input: input
                                }
                            ],

                            [
                                {
                                    type: 'euro' o 'date',
                                    input: input
                                },
                                
                                {
                                    type: 'euro' o 'date',
                                    input: input
                                }
                            ]


                        ]
            
            
            */
            this.#mappedInputs.push(inputMap([...form.querySelectorAll('input')]).filter((inputs) => inputs !== undefined));
        });
        console.log(this.#mappedInputs);
    }
}