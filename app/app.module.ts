import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { About, Blog, DiscGolf, Landing, Portfolio, Volleyball, Explore, Shoes } from './pages/index';
import { Projects } from './pages/portfolio/projects';
import { Experience } from './pages/portfolio/experience';

import { App }  from './app';

@NgModule({
    imports: [BrowserModule],       // module dependencies
    declarations: [App, About, Blog, DiscGolf, Landing, Portfolio, Volleyball, Explore, Shoes, Projects, Experience],   // components and directives
    bootstrap: [App]
})
export class AppModule { }
