import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../input/input.component';
import { DateFormControl } from '../date-form-control';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-card-form',
  imports: [ReactiveFormsModule, CommonModule, InputComponent, CardComponent],
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.css'
})
export class CardFormComponent {
  cardForm = new FormGroup(
    {
      name: new FormControl('',
        [Validators.required, Validators.minLength(3)]),
        card_number: new FormControl('',
          [Validators.required,
          Validators.minLength(16),
          Validators.maxLength(16)]
        ),
        expiration: new DateFormControl('',
          [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]
        ),
        security_code: new FormControl('',
          [Validators.required, Validators.minLength(3), Validators.maxLength(3)]
        )
    }
  );

  constructor() {
    console.log(this.cardForm.get('name'));
  }

  onSubmit(){
    console.log("Form is submited")
  }
  onResetClick(){
    this.cardForm.reset();
  }
}
