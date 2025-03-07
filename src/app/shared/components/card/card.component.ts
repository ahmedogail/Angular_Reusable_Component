import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input() user:any;
@Output() profileClick =new EventEmitter<number>();

onCardClick():void
{
  this.profileClick.emit(this.user.id);
}
}
