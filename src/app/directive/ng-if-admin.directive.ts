import { Directive, OnInit, OnDestroy, ViewContainerRef, TemplateRef } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Directive({
  selector: '[appNgIfAdmin]'
})
export class NgIfAdminDirective implements OnInit {

  subscription;

  constructor(
    private authService: AuthService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
    ) { }

  ngOnInit() {
    // if (this.authService.checkIfAdmin()) {
    //   this.viewContainer.createEmbeddedView(this.templateRef);
    // } else {
    //   this.viewContainer.clear();
    // }
    this.authService.isAdmin.subscribe(data => {
      if (data) {
        this.viewContainer.createEmbeddedView(this.templateRef); 
      } else {
        this.viewContainer.clear();
      }
    });
  }

}
