import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMediaComponent } from './details-media.component';
import {TranslateModule} from "@ngx-translate/core";
import {BaseRes} from "../../models/base-response";
import {
    CreditsMediaModel,
    GenresMediaModel,
    MediaResponseModel,
    NetworkMediaModel, SeasonsMediaModel, VideosMediaModel
} from "../../models/media-response-model";

describe('DetailsMediaComponent', () => {
    let component: DetailsMediaComponent;
    let fixture: ComponentFixture<DetailsMediaComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ DetailsMediaComponent ],
            imports: [TranslateModule.forRoot()]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DetailsMediaComponent);
        component = fixture.componentInstance;
        // test data
        let mediaResTest: MediaResponseModel = {
            backdrop_path: 'path_to_image.png',
            budget: 1000,
            genres: [{
                id: 10759,
                name: "Action & Adventure"
                },
                {
                    id: 9648,
                    name: "Mystery"
                }],
            credits: {
                cast: [
                    {
                        adult: false,
                        character: 'Seong',
                        gender: 1,
                        id: 5678,
                        name: "Lee Jung-jae",
                        order: 0,
                        popularity: 11,
                        profile_path: "/s3Sv4bZORQ5DuZJahgU2X0RgMUQ.jpg"
                    }
                ],
                crew: []
            },
            homepage: 'www.example.com',
            id: 12345,
            imdb_id: 'test_imdb_id',
            name: 'extra movie',
            networks: [{
                id: 213,
                logo_path: "/wwemzKWzjKYJFfCeiB57q3r4Bcm.png",
                name: "Netflix",
                origin_country: ""
            }],
            number_of_episodes: 10,
            number_of_seasons: 1,
            original_title: 'extra movie',
            overview: 'some test overview',
            popularity: 9,
            poster_path: 'path_to_poster.png',
            release_date: '2021-09-01',
            revenue: 10000,
            seasons: [{
                air_date: "2021-09-17",
                episode_count: 9,
                id: 131977,
                name: "Season 1",
                overview: "Test description.",
                poster_path: "/ertcijGyD6DS32UyeXZxSseqOzo.jpg",
                season_number: 1
            }],
            spoken_languages: [{}],
            tagline: 'some short description',
            title: 'extra movie',
            videos: {
                results: [
                    {
                        id: "615265179f5dfb0029f4595c",
                        key: "8vac9r4WPQI",
                        site: "YouTube"
                    }
                ]
            },
            vote_average: 751
        };
        component.item = mediaResTest;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
