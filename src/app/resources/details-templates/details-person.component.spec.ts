import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsPersonComponent } from './details-person.component';
import { PersonResponseModel } from "../../models/person-response-model";
import { TranslateModule } from "@ngx-translate/core";

describe('DetailsPersonComponent', () => {
    let component: DetailsPersonComponent;
    let fixture: ComponentFixture<DetailsPersonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ DetailsPersonComponent ],
            imports: [TranslateModule.forRoot()]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DetailsPersonComponent);
        component = fixture.componentInstance;
        let baseResTest: PersonResponseModel = {
            adult: false,
            biography: 'some biography',
            birthday: '2000-10-15',
            gender: 1,
            homepage: 'www.example_page',
            id: 123,
            imdb_id: 'xyz_imdb_id',
            name: 'Jan Kowalski',
            place_of_birth: 'Poland',
            popularity: 500,
            profile_path: 'image_picture.png',
        };
        component.item = baseResTest;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
