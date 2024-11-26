export interface Administrador{
    id?: string;  // Hacemos que el campo 'id' sea opcional para que el json lo genere automaticamente
    rut: string;
    username:string;
    email:string;
    password:string;

}