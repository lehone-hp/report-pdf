import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test.pdf';
  hero: Hero = {
    id: 'lehone',
    name: 'Lenya Hope Nembi',
    text: 'Lorem ipsum dorem siat amit',
    phone: 675230094
  };
}

export class Hero {
  id: string;
  name: string;
  text: string;
  phone: number;
}
