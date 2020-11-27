import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { NewUserComponent } from './new-user/new-user.component';
import { UsersComponent } from './users/users.component';
import { UserViewComponent } from './user-view/user-view.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import {FormsModule} from '@angular/forms';
import {UserService} from './services/user.service';
import {SingleUserComponent} from './single-user/single-user.component';
import { BookViewComponent } from './book-view/book-view.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'users', component: UserViewComponent },
  {
    path: 'users/:id',
    component: SingleUserComponent,
  },
  { path: 'adduser', component: NewUserComponent },
  { path: '', component: HomeComponent },
  { path: 'books', component: BookViewComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: '/not-found' },
];
@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    UsersComponent,
    UserViewComponent,
    FourOhFourComponent,
    SingleUserComponent,
    BookViewComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
