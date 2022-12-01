import {NgModule} from '@angular/core';
import {BookRepository} from './book.repository';
import {staticDataSource} from './static.datasource';
@NgModule ({
providers: [BookRepository,staticDataSource]
})
export class ModelModule{}

//we have just set up one model and we can pass data into the bookstore.
