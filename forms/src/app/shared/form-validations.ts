import { FormControl, FormGroup } from "@angular/forms";

export class FormValidations{

    static cepValidator(control: FormControl){
        const cep = control.value;
        if(cep && cep !== ''){
            const validaCep = /^[0-9]{8}$/;
            return validaCep.test(cep) ? null : { cepInvalido: true };
        }
        return null;
    }

    static equalsTo(otherField: string){
        const validator = (formControl: FormControl) => {
            if(otherField == null){
                throw new Error('É necessário informar um campo.');
            }

            if(!formControl.root || (<FormGroup>formControl.root).controls){
                return null;
            }

            const field = (<FormGroup> formControl.root).get(otherField);

            if(!field){
                throw new Error('É necessário informar um campo válido.');
            }

            if(field.value !== formControl.value){
                return { equalsTo : otherField };
            }

            return null;
        };
        return validator;
    }
   
}