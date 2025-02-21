import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_Reusable_Component';
  Users = [
    {
      id: 1,
      name : 'Mostafa' ,
      bio : 'Engineer' ,
      avatar: 'https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg'
    },
    {
      id: 1,
      name : 'Ahmed' ,
      bio : 'IT' ,
      avatar: 'https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg'
    }
  ];
  viewProfile(userId:number):void{
     console.log(userId);
  }
}


