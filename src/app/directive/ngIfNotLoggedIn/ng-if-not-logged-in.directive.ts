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
    if (this.authService.checkIfAdmin()) {
      this.viewContainer.clear();
    } else {
      this.viewContainer.createEmbeddedView(this.templateRef); 
    }
  }

}
