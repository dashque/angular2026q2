import { Component } from '@angular/core';

@Component({
  selector: 'dashq-film-details',
  imports: [],
  templateUrl: './film-details.component.html',
  styleUrl: './film-details.component.scss',
})
export class FilmDetailsComponent {
  //Film Details Page
  // The user clicked on a film card and is now on the details page.
  //
  // Full film information is displayed: poster, title, year, genre, rating, duration (via a custom pipe), description.
  // The film id is taken from the URL.
  // There is a "Back" button to return to the film list.
  // Breadcrumbs: Home > Film Title
  //
  // ("Home" is a clickable link, "Film Title" is the current page and is not clickable.)
}
