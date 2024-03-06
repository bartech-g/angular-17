import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
  <nav>
    <ul>
      @for (navItem of productTitles; track $index) {
        <li>
          <a [routerLink]="['details', $index]">{{navItem}}</a>
        </li>
      }
    </ul>
  </nav>
  <router-outlet />
  <footer>
    Footer
  </footer>
  `,
})
export class AppComponent {
  title = '08-routing-recap';

  productTitles = ['Product 1', 'Product 2', 'Product 3'];
}
