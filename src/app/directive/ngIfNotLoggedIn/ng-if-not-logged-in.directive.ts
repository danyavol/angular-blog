import { Directive, OnInit, OnDestroy, ViewContainerRef, TemplateRef } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Directive({
  selector: '[appNgIfNotLoggedIn]'
})
export class NgIfNotLoggedInDirective implements OnInit {

  constructor(
    private authService: AuthService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  ngOnInit() {
    this.authService.isAdmin.subscribe(data => {
      if (data) {
        this.viewContainer.clear();
      } else {
        this.viewContainer.createEmbeddedView(this.templateRef); 
      }
    });
  }

}
