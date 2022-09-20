import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http" // esto lo importo yo , es para que funcione el service
import {FormsModule} from "@angular/forms" // esto lo importo yo , para los formularios
import { NgCircleProgressModule } from 'ng-circle-progress'; // esto lo instalo con npm install ng-circle-progress --save
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LogosComponent } from './components/logos/logos.component';
import { BannerComponent } from './components/banner/banner.component';
import { PersonaComponent } from './components/persona/persona.component';
import { CreateBannerComponent } from './components/create-banner/create-banner.component';
import { EditPersonaComponent } from './components/persona/edit-persona/edit-persona.component';
import { AboutComponent } from './components/about/about.component';
import { EditAboutComponent } from './components/about/edit-about/edit-about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { CreateExperienceComponent } from './components/experience/create-experience/create-experience.component';
import { EditExperienceComponent } from './components/experience/edit-experience/edit-experience.component';
import { EducationComponent } from './components/education/education.component';
import { CreateEducationComponent } from './components/education/create-education/create-education.component';
import { EditEducationComponent } from './components/education/edit-education/edit-education.component';
import { SkillComponent } from './components/skill/skill.component';
import { CreateSkillComponent } from './components/skill/create-skill/create-skill.component';
import { EditSkillComponent } from './components/skill/edit-skill/edit-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    LogosComponent,
    BannerComponent,
    PersonaComponent,
    CreateBannerComponent,
    EditPersonaComponent,
    AboutComponent,
    EditAboutComponent,
    ExperienceComponent,
    CreateExperienceComponent,
    EditExperienceComponent,
    EducationComponent,
    CreateEducationComponent,
    EditEducationComponent,
    SkillComponent,
    CreateSkillComponent,
    EditSkillComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // lo traigo aca
    FormsModule, // lo importo aca
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}) // el  circle-progress lo importo aca
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
