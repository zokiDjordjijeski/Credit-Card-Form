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
  paymentStatus: 'idle' | 'processing' | 'success' | 'error' = 'idle';
  statusMessage = '';
  transactionDetails = '';

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
    this.paymentStatus = 'processing';
    this.statusMessage = 'Processing your payment...';
    this.transactionDetails = '';

    // Simulate payment processing with timeout
    setTimeout(() => {
      this.isProcessing = false;
      
      // Simulate 90% success rate
      if (Math.random() < 0.9) {
        this.paymentStatus = 'success';
        this.statusMessage = 'Payment successful! Thank you for your purchase.';
        
        // Create masked card number for display
        const cardNumber = this.cardForm.value.card_number || '';
        const maskedNumber = cardNumber.slice(-4).padStart(cardNumber.length, '*');
        const formattedNumber = maskedNumber.replace(/(.{4})/g, '$1 ').trim();
        
        // Generate transaction ID
        const transactionId = 'TXN' + Math.random().toString(36).substr(2, 9).toUpperCase();
        
        // Format transaction details for display
        this.transactionDetails = `
          Transaction ID: ${transactionId}
          Card Holder: ${this.cardForm.value.name}
          Card Number: ${formattedNumber}
          Expiration: ${this.cardForm.value.expiration}
          Amount: $${(Math.random() * 1000).toFixed(2)}
          Date: ${new Date().toLocaleString()}
        `;
        
        // Reset form after successful submission with delay
        setTimeout(() => {
          this.cardForm.reset();
          this.paymentStatus = 'idle';
          this.statusMessage = '';
          this.transactionDetails = '';
        }, 5000);
      } else {
        this.paymentStatus = 'error';
        this.statusMessage = 'Payment failed. Please check your card details and try again.';
      }
    }, 2000); // Simulate 2 second processing time
  }

  onResetClick(){
    this.cardForm.reset();
    this.paymentStatus = 'idle';
    this.statusMessage = '';
    this.transactionDetails = '';
  }
}
