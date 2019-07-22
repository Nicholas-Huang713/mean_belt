import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  errors: any;
  newPet = {};
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }
  
  ngOnInit() {
    this.newPet = {name: "", type: "", desc: "", skill1: "", skill2: "", skill3: ""};
  }

  addPet(){
    console.log(this.newPet);
    this._httpService.postOne(this.newPet).subscribe(data=>{
      console.log("added new pet", data);
      if(data['message']==='Error'){
        this.errors = data['data']['errors'];
        // console.log('asdfasfsdfsdf')
        // console.log(data['errors']['name']['name'])
      } else{
        this.newPet = {name: "", type: "", desc: "", skill1: "", skill2: "", skill3: ""};
        this._router.navigate(['']);
      }
    })
  }
}
