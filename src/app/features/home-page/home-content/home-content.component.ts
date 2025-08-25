import { Component } from '@angular/core';
import {Button} from "primeng/button";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-home-content',
  standalone: true,
    imports: [
        Button,
        TranslateModule
    ],
  templateUrl: './home-content.component.html',
  styleUrl: './home-content.component.css'
})
export class HomeContentComponent {

}
