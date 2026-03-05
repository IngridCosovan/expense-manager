import { Component } from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home-content',
  standalone: true,
    imports: [
      ButtonModule,
      TranslateModule
    ],
  templateUrl: './home-content.component.html',
  styleUrl: './home-content.component.css'
})
export class HomeContentComponent {

}
