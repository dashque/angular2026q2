import { Component } from '@angular/core';

@Component({
  selector: 'dashq-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  public currentYear = new Date().getFullYear();
  public author = 'https://github.com/dashque';
}
