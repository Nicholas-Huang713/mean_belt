import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pets: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getPetsFromService();
  }

  getPetsFromService(){
    this._httpService.getAll().subscribe(data=>{
      console.log("Got all pets", data);
      this.pets = data['data'];
    })
  }
}
