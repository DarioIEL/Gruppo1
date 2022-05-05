import { Component, OnInit } from '@angular/core';
import { OffertaServiceService } from './offerta-service.service';

@Component({
  selector: 'app-offerta',
  templateUrl: './offerta.component.html',
  styleUrls: ['./offerta.component.css']
})
export class OffertaComponent implements OnInit {

   offerte : string[]=[];
  constructor(private offertaService: OffertaServiceService ) { }

  ngOnInit() {
     this.offertaService.getBarche()
          .subscribe(data => {this.offerte = data});
  }

}
