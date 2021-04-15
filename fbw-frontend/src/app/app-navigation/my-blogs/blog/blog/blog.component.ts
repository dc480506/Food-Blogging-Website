import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  id:any;

  constructor(private route:ActivatedRoute) { }


  ngOnInit(): void {
    this.route.paramMap
    .subscribe(params=>{
      this.id=params.get('id');
      console.log(this.id);
    });
  }

}
