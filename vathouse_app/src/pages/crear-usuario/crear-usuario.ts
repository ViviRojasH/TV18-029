import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import * as $ from "jquery";

/**
 * Generated class for the CrearUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface ItpUsuario {
  IdTipoDocu: string;
  TipoDocu;
}
interface ItpDoc {
  IdTipoDocu: string;
  TipoDocu;
}
interface IDepartamento {
  IdDepto: string;
  Depto;
};
interface Iciudad {
  IdCiudad: string;
  Ciudad;
}
@IonicPage()
@Component({
  selector: "page-crear-usuario",
  templateUrl: "crear-usuario.html"
})
export class CrearUsuarioPage {
  titulo: string;
  name: string;
  formulario: FormGroup;
  server = "http://10.73.54.39/Viviana/proyecto/proyecto";
  path = "";
  data;
  cityName = "From an Input field";
  departamentos: any = [];
  tipoUsuarios: any = [];
  tipoDocumentos: any = [];
  ciudades: any = [];
  id_departamento;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formbuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.titulo = "Registro de usuario";
    this.formulario = formbuilder.group({
      IdTipoUsuario: ["", Validators.required],
      IdTipoDocu: [""],
      NumDocumento: [""],
      NombresUsu: [""],
      ApellidosUsu: [""],
      GeneroUsu: [""],
      FechaNacUsu: [""],
      CorreoUsu: [""],
      PassUsu: [""],
      CelUsu: [""],
      FotoUsu: [""],
      IdCiudad: [""],
      FirmaDoc: [""],
      TarjetaDoc: [""],
      option:["AgregarUsuario"]
    });
    // this.departamentos = [
    //   { IdDepto: "1", Depto: "Meta" },
    //   { IdDepto: "2", Depto: "Snatander" },
    //   { IdDepto: "3", Depto: "Bogota" }
    // ];
    this.CargarTpUsuario();
    this.CargarDpto();
    this.CargarCiudades2();
    this.CargarTpDoc();
  }
  CargarDpto() {
    this.http
      .post<IDepartamento>(
        "http://10.73.54.39/Viviana/proyecto/proyecto/conexion/Logica/LogicaDpto.php",
        { option: "CargarDpto" }
      )
      .subscribe(data => {
        console.log(data);
        this.departamentos = data;
      });
  }
  CargarTpDoc() {
    this.http
      .post<ItpDoc>(
        "http://10.73.54.39/Viviana/proyecto/proyecto/conexion/Logica/LogicaTipoDocu.php",
        { option: "CargarTipoDocu" }
      )
      .subscribe(data => {
        console.log(data);
        this.tipoDocumentos = data;
      });
  }
  CargarTpUsuario() {
    this.http
      .post<ItpUsuario>(
        "http://10.73.54.39/Viviana/proyecto/proyecto/conexion/Logica/LogicaTipoUsuario.php",
        { option: "cargarTipoUsuario" }
      )
      .subscribe(data => {
        console.log(data);
        this.tipoUsuarios = data;
      });
  }
  CargarCiudades() {
    console.log("CArga ciudades" + this.id_departamento);
    this.http
      .post<Iciudad>(
        "http://10.73.54.39/Viviana/proyecto/proyecto/conexion/Logica/LogicaCiudad.php",
        { option: "CargarCiuDpto",idDpto:this.id_departamento }
      )
      .subscribe(data => {
        console.log(data);
         this.ciudades = data;
      });
  }
  CargarCiudades2() {
    this.http
      .post<Iciudad>(
        "http://10.73.54.39/Viviana/proyecto/proyecto/conexion/Logica/LogicaCiudad.php",
        { option: "CargarCiuDpto",idDpto:1 }
      )
      .subscribe(data => {
        console.log(data);
         this.ciudades = data;
      });
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.formulario.value);
    this.path = "";
    this.http.post("http://10.73.54.39/Viviana/proyecto/proyecto/conexion/Logica/LogicaUsuario.php", this.formulario.value, {responseType: 'text'}).subscribe(
            data => {
                console.log(data)
            }
        )
  }
}
