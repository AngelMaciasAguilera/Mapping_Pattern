import { Config } from "./config/config.js";
export const inputMap = (inputs) => { //Me pasan un array de inputs para mapear
    
    return inputs.map((input) => {
            for (const key in Config.inputTypes) {
                console.log(key);
                if(input.classList.contains(key)){
                    return {
                        type: key,
                        input: input
                    }

                }
            }
        }
    );

}