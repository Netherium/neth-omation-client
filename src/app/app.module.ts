import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {AppComponent} from './app.component';
import {RpiControlComponent} from './rpi-control/rpi-control.component';

@NgModule({
    declarations: [
        AppComponent,
        RpiControlComponent
    ],
    imports: [
        BrowserModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
