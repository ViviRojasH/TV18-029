import { Component } from "@angular/core";
import { NavController, MenuController } from "ionic-angular";
import { CrearUsuarioPage } from "../crear-usuario/crear-usuario";
import { InicioPage } from "../inicio/inicio";
import { AuthProvider } from "../../providers/auth/auth";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { PAdminPage } from "../p-admin/p-admin";
import { PMedicoPage } from "../p-medico/p-medico";
import { PClientePage } from "../p-cliente/p-cliente";
import { Storage } from "@ionic/storage";
interface IUsuario {
  IdTipoUsuario: string;
  IdTipoDocu: string;
  NumDocumento: string;
  NombresUsu: string;
  ApellidosUsu: string;
  GeneroUsu: string;
  FechaNacUsu: string;
  CorreoUsu: string;
  PassUsu: string;
  CelUsu: string;
  FechRegUsu: string;
  FotoUsu: string;
  IdCiudad: string;
  FirmaDoc: string;
  TarjetaDoc: string;
  EstadoUsuario: string;
  LatitudUsu: string;
  LongUsu: string;
}
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  formulario: FormGroup;
  Usuarios: any;
  lgUser: IUsuario;
  constructor(
    public navCtrl: NavController,
    private fb: FormBuilder,
    public menuCtrl: MenuController,
    private http: HttpClient,
    private storage: Storage,
    authprovider: AuthProvider
  ) {
    if (localStorage.getItem("user")!=null) {
      console.log(localStorage.getItem("user"));
      
    } else {
      console.log("No User");
    }
    this.menuCtrl.enable(false, "menuCliente");
    this.menuCtrl.enable(false, "menuAdmin");
    this.menuCtrl.enable(false, "menuMedico");
    this.formulario = fb.group({
      Correo: ["", Validators.required],
      Contrasena: ["", Validators.required],
      option: ["logueoUser"]
    });
  }
  goToOtherPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(CrearUsuarioPage);
  }
  Logueo() {
    console.log(this.formulario.value);
    this.http
      .post<IUsuario>(
        "http://10.73.54.39/Viviana/proyecto/proyecto/conexion/Logica/LogicaUsuario.php",
        this.formulario.value
      )
      .subscribe(data => {
        this.Usuarios = data;
        console.log(this.Usuarios.length);
        if (this.Usuarios.length) {
          for (let user of this.Usuarios) {
            //console.log(); // Error
            this.lgUser = user;
          }
          console.log(this.lgUser);
          switch (this.lgUser.IdTipoUsuario) {
            case "1":
              console.log("admin");
              this.navCtrl.setRoot(PAdminPage);
              break;
            case "2":
              console.log("Cliente");
              this.navCtrl.setRoot(PClientePage);
              break;
            case "3":
              console.log("Medico");
              this.navCtrl.setRoot(PMedicoPage);
              break;

            default:
              break;
          }
          localStorage.setItem("user", JSON.stringify(this.lgUser));
          //this.navCtrl.setRoot(InicioPage);
        } else {
          console.log("no existe datos");
        }

        //
      });

    // this.navCtrl.setRoot(InicioPage);
  }
}
