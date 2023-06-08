import { Component,Input ,OnInit,EventEmitter,Output} from '@angular/core';
import { ThemeProps } from '../types';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit{
   @Input() boxtheme:ThemeProps={color:"",backgroundColor:""}
   @Input("title") boxtitle:string=""
   features:any=[]
   @Output('featureClick') sendData:EventEmitter<string> =new EventEmitter<string>();

   constructor(private ds:DataService){
       // ds.getFeatures(this.boxtitle);
        // According to component life cycle input
        //values  will be received by the child only after constructor execution
        // so at this point this.boxtitle will not have value sent by parent
   }
   ngOnInit(): void {
       this.features = this.ds.getFeatures(this.boxtitle)
   }
   //if we want any logic to run exactly once after constructor execution
  // that can be put in a function called ngOnInit which is part of the interface 
  // called OnInit

   type(x:any):string{
       return typeof(x)
   }

   onFeatureSelect(feature:any):void {
      this.sendData.emit(typeof(feature)=="string"?feature:JSON.stringify(feature) 
       + " from service "+this.boxtitle)
   }

}