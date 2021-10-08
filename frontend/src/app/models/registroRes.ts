export class RegistroRes {

  constructor(_id = "", namerestaurante = "", nit = "", adress = "",local = "", phone = "",email = "",password = "",role = 0 ){
    //inicializa los valores del atributo
    this._id = _id;
    this.namerestaurante = namerestaurante;
    this.nit = nit;
    this.adress = adress;
    this.local = local;
    this.phone = phone;
    this.email = email;
    this.password = password;
    this.role = role;


  }
  //atributos -  definicion
  _id:string
  namerestaurante:string
  nit:string
  adress:string
  local:string
  phone:string
  email:string
  password:string
  role: number

  //constructor

}
