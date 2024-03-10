import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `
    <article>
      <h1>Blog Post</h1>
      <section>
        
        <!-- title -->
        <label for="title">Post Title</label>     
        <input type="text" id="title" [(ngModel)]="title" >
        <!-- textarea -->
        <label for="body">Post Body</label>       
        <textarea name="body" id="body" cols="30" rows="10" [(ngModel)]="body"></textarea>

      </section>
      <section>
        <p>{{title}}</p>
        <p>{{body}}</p>
      </section>
    </article>
  `,
})
export class AppComponent {
  title = ""
  body = ""

}
