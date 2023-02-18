import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componente/header/header.component';
import { LogoComponent } from './componente/logo/logo.component';
import { BannerComponent } from './componente/banner/banner.component';
import { AcercadeComponent } from './componente/acercade/acercade.component';
import { ExperienciaComponent } from './componente/experiencia/experiencia.component';
import { EducacionComponent } from './componente/educacion/educacion.component';
import { SkillComponent } from './componente/skill/skill.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectoComponent } from './componente/proyecto/proyecto.component';
import { FooterComponent } from './componente/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    BannerComponent,
    AcercadeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillComponent,
    ProyectoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
