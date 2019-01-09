import { ProductService } from './product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:  `
      <button class="btn btn-primary" [style.backgroundColor]="isActive ? 'blue':'gray'" (click)="onClickMe($event)">Submit</button>
      <input type="text" [(ngModel)]="title" />
      You have typed: {{title}}
      <br><br>
      <rating></rating>
      `,
  providers: [ProductService]
})
export class AppComponent {
  title: string = 'My Second Angular App';
  imageUrl = "https://www.w3schools.com/html/pic_mountain.jpg";
  isActive = true;

  onClickMe($event){
    this.isActive = !this.isActive;
    console.log("Clicked",$event);
  }

}
