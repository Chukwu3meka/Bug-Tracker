import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
})
export class LabelComponent {
  @Input() label: { title: string; status: number; message: string } = {
    title: '',
    status: 0,
    message: '',
  };
}
