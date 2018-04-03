import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../data.service';
import { Pet } from '../../pet'
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  pet: Pet = new Pet()
  constructor(private route: ActivatedRoute, 
              private dataService: DataService, 
              private router: Router) {
    this.route.paramMap.subscribe(params => {
      // console.log('params ', params)
      this.dataService.retrievePet(params.get('id'))
      this.dataService.pet.subscribe(data => this.pet = data)
    })
   }

  ngOnInit() { }

  onLike() {
    this.pet.likes++
    console.log('this.pet.likes ', this.pet.likes)
    this.dataService.updatePet(this.pet)
    return true
  }

  onAdopt() {
    this.dataService.deletePet(this.pet._id)
    this.router.navigateByUrl('/')
  }
}
