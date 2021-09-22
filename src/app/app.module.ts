import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavComponent } from './appnav/appnav.component';
import { MaterialModule } from './material-module';
import { MoviesComponent } from './pages/movies/movies.component';
import { SeriesComponent } from './pages/series/series.component';
import { PeopleComponent } from './pages/people/people.component';
import { MembersComponent } from './pages/members/members.component';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { AlertHelperComponent } from './resources/alert-helper/alert-helper.component';

@NgModule({
    declarations: [
        AppComponent,
        AppNavComponent,
        MoviesComponent,
        SeriesComponent,
        PeopleComponent,
        MembersComponent,
        HomeComponent,
        ErrorPageComponent,
        AlertHelperComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    providers: [
        AlertHelperComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http);
}
