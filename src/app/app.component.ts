import { Component } from '@angular/core';
import { PostService } from './post.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private post :PostService) { }
  categories:any[]=[];
  ngOnInIt():void{
    this.post.GetProducts().subscribe(category=>{
     
      this.categories=category
    })
  }
}
