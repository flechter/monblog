import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {

  @Input() titreblog: string;
  @Input() contentblog: string;
  @Input() loveitblog: BigInteger;
  @Input() dateblog: Date;
  love=0;
  constructor() {

   }

  ngOnInit() {
  }
  onLoveIt() {
    this.love++;
  }
  onDontLoveIt(){
    this.love--;
  }

}
