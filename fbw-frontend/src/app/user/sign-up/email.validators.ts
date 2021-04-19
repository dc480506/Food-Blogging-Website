import { AbstractControl, ValidationErrors } from "@angular/forms";

export class EmailValidators{
    static shouldBeUnique(control:AbstractControl):Promise<ValidationErrors| null>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if (control.value==="mosh@gmail.com")
                    resolve({ shouldBeUnique:true });
                else
                    resolve(null);
            },2000);
        });
        
    }
}