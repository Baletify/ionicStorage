import { Component } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private localStorageService: LocalStorageService) {}

  saveData(): void {
    const data = { message: 'Hello, Ionic!' };
    this.localStorageService.setItem('myData', data);
    alert('Data saved!' + data);
  }

  retrieveData(): void {
    const data = this.localStorageService.getItem('myData');
    console.log('Retrieved Data:', data);
    alert('Retrieved Data:' + data);
  }

  clearData(): void {
    this.localStorageService.removeItem('myData');
    alert('Data cleared!');
  }
}
