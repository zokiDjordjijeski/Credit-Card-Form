import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CardFormComponent } from "./card-form/card-form.component";
@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, CardFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'creditcard';
}
