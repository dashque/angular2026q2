import { Component } from '@angular/core';

@Component({
  selector: 'dashq-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  // Footer — contains the year, author name, and a link to GitHub.
  public currentYear = new Date().getFullYear();
  // TODO сделать пайпу которая возвращает имя и ссылку
  public author = 'https://github.com/dashque';
}
