import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  contactInfo!: FormGroup;

  constructor (private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactInfo = this.fb.group({
      name: [''],
      email: [''],
      phone: [''],
      text: ['']
    })
  }

  testForm() {
    console.log(this.contactInfo.get('text')?.value);
  }

}
