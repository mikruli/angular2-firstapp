import { ProductService } from './product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:  `<h1>{{ title }}</h1>
                <products></products>`,
  providers: [ProductService]
})
export class AppComponent {
  title: string = 'My Second Angular App';
}
