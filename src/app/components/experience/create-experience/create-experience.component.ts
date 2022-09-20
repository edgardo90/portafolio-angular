import { Component, OnInit } from '@angular/core';
//
import { Router } from '@angular/router'; // esto seria como el navigate de react
import {Experience , Errores} from "../../../interfaces/interface-experience";
import {ExperienceService } from "../../../service/experience.service";

@Component({
  selector: 'app-create-experience',
  templateUrl: './create-experience.component.html',
  styleUrls: ['./create-experience.component.css']
})
export class CreateExperienceComponent implements OnInit {

  loading: string = "Cargando..."

  title:string="";
  companyName:string="";
  dateStart:string="";
  dateEnd:string="";
  logoCompany:string="";
  description:string="";
  userName:string="edgardo90";

  exp!:Experience

  errores:Errores={};// esto sirve para controlar el formulario

  constructor(private experienceService: ExperienceService , private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => this.loading= ""  ,600 ); // cuando pase ese tiempo setea a un string vacio 
  }

  resetImagen(){ // funcion que voy a utilizar para un button para borrar lo que esta en el input
    this.logoCompany=""
  }

  checkErrors(){ // funcion para controlar y mostrar errores en el formulario
    // console.log(this.title)
    const regex = /[A-Z0-9._%+-]+/i; // valida letras , numeros , simbolos , valida si no hay nada en el input
   if(!regex.test(this.title)){
      this.errores.title = "tienes que ingresar el titulo"
    }else if(this.title.length > 45){
      this.errores.title= "titulo demaciado largo"
    }else{
      this.errores.title=""
    };

    if(!regex.test(this.companyName)){
      this.errores.companyName= "tienes que ingresar el nombre de la empresa"
    }else{
      this.errores.companyName=""
    };

    if(!regex.test(this.dateStart)){
      this.errores.dateStart= "tienes que ingresar la fecha"
    }else{
      this.errores.dateStart=""
    };

    if(!regex.test(this.description)){
      this.errores.description= "tienes que ingresar una descripcion del puesto"
    }else{
      this.errores.description=""
    }

  }

  createExperience(){
    const { title , companyName ,dateStart , dateEnd , logoCompany , description , userName} = this;
    this.exp = {title, companyName, dateStart , dateEnd, logoCompany ,description, userName};
    if(Object.values(this.errores).filter(el => el !== "").length > 0 ){ // convierto en array el objeto this.errores  y hago un filter para que me traiga solamente los elemento que hay algo
      return alert("Observa los errores que estan en color rojo!")
    }
    this.experienceService.postExperience(this.exp).subscribe(value =>{
      console.log(value);
      alert("Nueva experiencia creada")
      this.router.navigate([""]);
    }, err=>{
      console.log(err.error)
    })
  }

}