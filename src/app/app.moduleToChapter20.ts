import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent } from './app.component';
import { ProductComponent } from './component';
import { ChildComponent } from './child.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { AppComponent } from './app.component';
import { PaAttrDirective } from './attr.directive';
import { paModel } from './twoway.directive';
import { PaStructureDirective } from './structure.directive';
import { PaIteratorDirective } from './iterator.directive';
import { PaCellColor } from './cellColor.directive';
import { PaCellColorSwitcher } from './cellColorSwitcher.directive';

import { ProductTableComponent } from './productTable.component';
import { ProductFormComponent } from './productForm.component';
import { PaToggleView } from './toggleView.component';
import { PaAddTaxPipe } from './addTax.pipe';
import { PaCategoryFileterPipe } from './categoryFilter.pipe';

import {LOCALE_ID} from "@angular/core"
import localeFr from '@angular/common/locales/fr'
import {registerLocaleData} from '@angular/common'
import {PaDiscountDisplayComponent} from './discountDisplay.component'
import {PaDiscountEditorComponent} from './discountEditor.component'
import {DiscountService} from "./discount.service"
import {PaDiscountPipe} from "./discount.pipe"

import {PaDiscountAmountDirective} from "./discountAmount.directive"
import {SimpleDataSource} from "./datasource.model"
import {Model} from "./repository.model"
import {LogService, LOG_SERVICE, SpecialLogService, LogLevel, LOG_LEVEL} from "./log.service"

import {VALUE_SERVICE, PaDisplayValueDirective} from "./valueDisplay.directive"



let logger = new LogService();
logger.minimumLevel = LogLevel.DEBUG;

registerLocaleData(localeFr);

@NgModule({
  declarations: [ ProductComponent,
    ChildComponent,
    // AppComponent,
    PaAttrDirective,
    paModel,
    PaStructureDirective,
    PaIteratorDirective,
    PaCellColor,
    PaCellColorSwitcher,
    ProductTableComponent,
    ProductFormComponent,
    PaToggleView,
    PaAddTaxPipe,
    PaCategoryFileterPipe,
    PaDiscountDisplayComponent,
    PaDiscountEditorComponent,
    PaDiscountPipe,
    PaDiscountAmountDirective,
    PaDisplayValueDirective,
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  // providers: [DiscountService,SimpleDataSource,Model,LogService],
  providers: [DiscountService,SimpleDataSource,Model,LogService,
    // {provide: LOG_SERVICE, useClass: LogService, multi: true},
    // {provide: LOG_SERVICE, useClass: SpecialLogService, multi: true},
    // {provide: LogService, useValue: logger},
    // {
    //   provide: LogService, useFactory: () => {
    //     let logger = new LogService();
    //     logger.minimumLevel = LogLevel.DEBUG;
    //     return logger;
    //   }
    // }V
    // {provide:LOG_LEVEL, useValue: LogLevel.DEBUG},
    // {provide: "debugLevel", useExisting: LOG_LEVEL},
    // {provide: LogService,
    // deps: ["debugLevel"],
    // useFactory: (level: any) =>{
    //   let logger = new LogService();
    //   logger.minimumLevel = level;
    //   return logger;
    // }},

    {provide: VALUE_SERVICE, useValue: "Apples"}
  ],
  
  bootstrap: [
    // AppComponent
    ProductComponent,


  ]
})
export class AppModule { }
