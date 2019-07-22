import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  pet: any;
  pet_id: any;
  errors;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.pet_id = params['id']
      this.getPetFromService(this.pet_id);      
    });
  }

  getPetFromService(pet_id){
    this._httpService.getOne(this.pet_id).subscribe(data=>{
      this.pet = data['data'];
      console.log("Got pet", data);
    })
  }

  editPet(){
    this._httpService.updateOne(this.pet).subscribe(data=>{
      if(data['message']==='Error'){
        this.errors = data['data']['errors'];
      }else{
      console.log(data);
      this._router.navigate(['']);
      }
    })
  }

}
