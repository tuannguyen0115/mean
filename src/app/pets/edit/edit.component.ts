import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../data.service';
import { Pet } from '../../pet'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  pet: Pet = new Pet()
  editErrors:string[] = []
  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) {
    this.pet.skills=[]
    this.route.paramMap.subscribe(params => {
      this.dataService.retrievePet(params.get('id'))
      this.dataService.pet.subscribe(data => {
        this.pet = data
      })
    })
   }

  ngOnInit() {}

  onSubmit() {
    console.log('edited pet ', this.pet)
    this.dataService.updatePet(this.pet).subscribe(pet => {
      this.router.navigateByUrl('/detail/' + this.pet._id)
    }, error => {
      console.log('error editing' , error.error)
      this.editErrors = error.error
    }) 
    
  }
}
