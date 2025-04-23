import { Route } from '@angular/router';
import { AddSongComponent } from './add-song/add-song.component';

export const appRoutes: Route[] = [
    {
        path: "add-song",
        component: AddSongComponent
      }
];
