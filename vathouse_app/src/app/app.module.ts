import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { AuthProvider } from "../providers/auth/auth";
import { IonicStorageModule } from "@ionic/storage";
import { HttpClientModule } from "@angular/common/http";
// paginas
import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { CrearUsuarioPage } from "../pages/crear-usuario/crear-usuario";
import { InicioPage } from "../pages/inicio/inicio";
import { PClientePage } from "../pages/p-cliente/p-cliente";
import { PAdminPage } from "../pages/p-admin/p-admin";
import { PMedicoPage } from "../pages/p-medico/p-medico";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CrearUsuarioPage,
    InicioPage,
    PClientePage,
    PMedicoPage,
    PAdminPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CrearUsuarioPage,
    InicioPage,
    PClientePage,
    PAdminPage,
    PMedicoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider
  ]
})
export class AppModule {}
