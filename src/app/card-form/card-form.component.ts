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

  isProcessing = false;
  paymentSuccess = false;
  paymentError = false;

  constructor() {
    console.log(this.cardForm.get('name'));
  }

  onSubmit(){
    if (this.cardForm.invalid) {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.cardForm.controls).forEach(key => {
        const control = this.cardForm.get(key);
        control?.markAsTouched();
      });
      return;
    }

    // Set processing state
    this.isProcessing = true;
    this.paymentSuccess = false;
    this.paymentError = false;

    // Simulate payment processing with timeout
    setTimeout(() => {
      this.isProcessing = false;
      
      // Simulate 90% success rate
      if (Math.random() < 0.9) {
        this.paymentSuccess = true;
        console.log("Payment processed successfully!");
        console.log("Card details:", {
          name: this.cardForm.value.name,
          cardNumber: this.cardForm.value.card_number?.replace(/\d(?=\d{4})/g, "*"), // Mask card number for logging
          expiration: this.cardForm.value.expiration
        });
        
        // Reset form after successful submission with delay
        setTimeout(() => {
          this.cardForm.reset();
          this.paymentSuccess = false;
        }, 3000);
      } else {
        this.paymentError = true;
        console.log("Payment failed. Please try again.");
      }
    }, 2000); // Simulate 2 second processing time
  }

  onResetClick(){
    this.cardForm.reset();
    this.paymentSuccess = false;
    this.paymentError = false;
  }
}
