import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoggedinGuard } from './guards/user-loggedin.guard';
import { UserNotLoggedinGuard } from './guards/user-not-loggedin.guard';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { SighupPageComponent } from './pages/sighup-page/sighup-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, 
    canActivate: [UserLoggedinGuard]
  },
  { path: 'contact/edit/:id', component: ContactEditPageComponent,
    canActivate: [UserLoggedinGuard]
  },
  { path: 'contact/edit', component: ContactEditPageComponent,
    canActivate: [UserLoggedinGuard]
  },
  { path: 'contact/:id', component: ContactDetailsPageComponent,
    canActivate: [UserLoggedinGuard]
  },
  { path: 'contact', component: ContactPageComponent,
    canActivate: [UserLoggedinGuard]
  },
  { path: 'statistic', component: StatisticPageComponent,
    canActivate: [UserLoggedinGuard]
  },
  { path: 'signup', component: SighupPageComponent,
    canActivate: [UserNotLoggedinGuard]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
