import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayRulesComponent } from './display-rules/display-rules.component';
import { RuleBlockComponent } from './rule-block/rule-block.component';
import { RuleItemComponent } from './rule-item/rule-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayRulesComponent,
    RuleBlockComponent,
    RuleItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
