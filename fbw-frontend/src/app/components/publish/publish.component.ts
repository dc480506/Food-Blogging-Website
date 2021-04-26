import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'blog-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css']
})
export class PublishComponent {
  @Input('isPublished') isPublished:boolean=true;
  @Input('publishTime') publishTime:number=0;
  @Output('change') click= new EventEmitter();

  constructor() { }

  onClick(){
    this.isPublished=!this.isPublished;
    this.publishTime=Date.now();
    this.click.emit(this.isPublished);
  }
}
