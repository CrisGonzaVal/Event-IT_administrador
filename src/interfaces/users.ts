
export interface Users{
    id:number;
    username:string;
    email:string;
    password:string;
    isactive: boolean;
}

export interface UserNuevo{
    username:string;
    email:string;
    password:string;
    isactive: boolean;
}

//post
export interface misQr{
    nomMascota:string;
    tipoMascota:string;
    username:string;
}

//get, put, delete
export interface allQr{
    id:string;
    nomMascota:string;
    tipoMascota:string;
    username:string;
}