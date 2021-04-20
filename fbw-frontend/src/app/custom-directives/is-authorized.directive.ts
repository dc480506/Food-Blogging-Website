import { Directive, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Directive({
  selector: '[appIsAuthorized]'
})
export class IsAuthorizedDirective implements OnInit{

  private hasView = false;

  constructor(private templateRef: TemplateRef<any>, 
              private vcr: ViewContainerRef,
              private userService: AuthService) { }

  ngOnInit() {
    const isLoggedin = this.userService.isLoggedin();

    if (isLoggedin && !this.hasView) {
      this.vcr.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!isLoggedin && this.hasView) {
      this.vcr.clear();
      this.hasView = false;     
    }
  }
}
