import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent {
  @Input() inputType: 'text' | 'password' = 'text';
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() isRequired: boolean = false;
  @Input() isValid: boolean = true;
  @Output() setValue: EventEmitter<any> = new EventEmitter<any>();

}