import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {Router} from "@angular/router"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCardModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test_api';
  constructor(private router: Router){}

  onclickMenu(option:number):void{
    if (option == 1){
      this.router.navigate(['/data']);
      return;
    }
    this.router.navigate(['/create']);
  }
}
