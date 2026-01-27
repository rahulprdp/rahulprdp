import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('rahulprdp');
  public resumeUrl = "https://docs.google.com/document/d/13nWGr7eHm1HfJEnaAjvCSRfYHLATjBl45naOJnr5jmQ/edit?usp=sharing"
}
