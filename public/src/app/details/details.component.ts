import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  pet:any;
  id;
  errors: any;
  liked = false;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.id = params['id']
      this.getPetFromService(this.id);
    });
  }

  getPetFromService(id){
    this._httpService.getOne(this.id).subscribe(data=>{
      this.pet = data['data'];
      console.log("Got pet", data);
    })
  }

  deletePet(id){
    this._httpService.destroy(id).subscribe(data=>{
      this._router.navigate(['']);
    })
  }

  likePet(pet){
    pet.likes++;
    this.liked = true;
    this._httpService.updateOne(pet).subscribe(data=>{
    });

  }
}
