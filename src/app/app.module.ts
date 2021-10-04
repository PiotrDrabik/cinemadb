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
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SingleItemImagesComponent } from './resources/single-item-images/single-item-images.component';
import { SearchComponent } from './pages/search/search.component';
import { StringCutPipe } from './resources/pipe/string-cut.pipe';
import { ResponseErrorComponent } from './resources/response-error/response-error.component';
import { CustomMatPaginatorIntlService } from './services/custom-mat-paginator-intl.service';
import { MatPaginatorIntl } from "@angular/material/paginator";
import { BuilderDataComponent } from './base-class/builder-data/builder-data.component';
import { DateCustomPipe } from './resources/pipe/date-custom.pipe';
import { DetailsComponent } from './pages/details/details.component';
import { DetailsPersonComponent } from './resources/details-templates/details-person.component';
import { DetailsMediaComponent } from "./resources/details-templates/details-media.component";

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
        AlertHelperComponent,
        SingleItemImagesComponent,
        SearchComponent,
        StringCutPipe,
        ResponseErrorComponent,
        BuilderDataComponent,
        DateCustomPipe,
        DetailsComponent,
        DetailsPersonComponent,
        DetailsMediaComponent
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
        }),
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        AlertHelperComponent,
        {
            provide: MatPaginatorIntl,
            useClass: CustomMatPaginatorIntlService,
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http);
}
