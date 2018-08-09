import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { RouterModule, Routes } from "@angular/router";
import { MyHomeComponent } from "./my-home/my-home.component";
import { MyAboutComponent } from "./my-about/my-about.component";
import { ContactListComponent } from "./contact-list/contact-list.component";
import { ContactComponent } from "./contact/contact.component";
import { MyCounterComponent } from "./my-counter/my-counter.component";
import { MySecondCounterComponent } from "./my-second-counter/my-second-counter.component";
import { CounterService } from "./services/counter.service";

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
    MyCounterComponent,
    MySecondCounterComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule {}
