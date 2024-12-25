import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TabMenuComponent} from '../home-page/tab-menu/tab-menu.component';
import {InplaceModule} from "primeng/inplace";


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    TabMenuComponent,
    InplaceModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class HomePageComponent  implements OnInit {
  currentText = 'Textul inițial (portocaliu)';
  currentBackground = 'orange';
  currentTextColor = 'white';
  showText = true;

  private orangeState = {
    text: 'Textul inițial (portocaliu)',
    background: 'orange',
    color: 'white'
  };

  private blueState = {
    text: 'Textul secundar (albastru)',
    background: 'blue',
    color: 'white'
  };

  private states = [this.orangeState, this.blueState];
  private currentIndex = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.toggleState();
    }, 15000);
  }

  toggleState(): void {
    this.showText = false;
    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.states.length;
      const newState = this.states[this.currentIndex];

      this.currentText = newState.text;
      this.currentBackground = newState.background;
      this.currentTextColor = newState.color;
      this.showText = true;
    }, 1000);
  }
}
