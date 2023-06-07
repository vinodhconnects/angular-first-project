import { Component,Input } from '@angular/core';
import { ThemeProps } from '../types';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {
   @Input() boxtheme:ThemeProps={color:"",backgroundColor:""};
}
