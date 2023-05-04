import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  template: `
    <p>
      logout works!
    </p>
  `,
  styles: [
  ]
})
export class LogoutComponent implements OnInit {
  private router = inject(Router)

  ngOnInit(): void {
    sessionStorage.clear()
    this.router.navigate(['/login'])
  }
}
