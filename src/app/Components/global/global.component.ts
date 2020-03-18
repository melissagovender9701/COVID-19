import { Component, OnInit, ElementRef, Input, AfterViewInit, ViewChild, OnChanges, SimpleChanges} from '@angular/core';
import { CoronaService } from 'src/app/Services/corona.service';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent{

  info: any = null;

  constructor(private covidService: CoronaService) {
    this.covidService.getAll().subscribe((data)=>{
      this.info = data;
    });
   }
}
