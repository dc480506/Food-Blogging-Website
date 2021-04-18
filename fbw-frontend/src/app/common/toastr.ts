import { ToastrService } from 'ngx-toastr';
export class Toastr{
    constructor(private toastr:ToastrService){

    }

    showSuccess(title:string,msg:string){
        this.toastr.success(title,msg);
    }

}