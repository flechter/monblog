import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'monblog';
  posts = [ 
    {
    title: "titre 1",
    content: "Super premier post",
    loveIts: 0,
    created_at: new Date()
  },
  {
    title: "titre 2",
    content: "Super deuxieme post",
    loveIts: 0,
    created_at: new Date()
  } 
]

}
