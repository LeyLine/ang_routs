import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { RouterModule, Routes } from "@angular/router";
import { MyHomeComponent } from "./my-home/my-home.component";
import { MyAboutComponent } from "./my-about/my-about.component";
import { ContactListComponent } from "./contact-list/contact-list.component";
import { ContactComponent } from "./contact/contact.component";
import { MyCounterComponent } from './my-counter/my-counter.component';

const routes: Routes = [
  { path: "", component: ContactListComponent },
  { path: "contact/:id", component: ContactComponent },
  { path: "home", component: MyHomeComponent },
  { path: "about", component: MyAboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    MyAboutComponent,
    ContactListComponent,
    ContactComponent,
    MyCounterComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
