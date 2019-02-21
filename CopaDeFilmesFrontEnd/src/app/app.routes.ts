import { HomeComponent } from "./home/home.component";
import {Routes} from '@angular/router';
import { FinalCampeonatoComponent } from "./final-campeonato/final-campeonato.component";

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'final-campeonato', component: FinalCampeonatoComponent}
];