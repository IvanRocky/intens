import { Component, Input } from '@angular/core';

/* type TytleType = string | number
interface TytleInterface {

} */
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title: string =''
}
