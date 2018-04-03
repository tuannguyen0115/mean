import { Component, OnInit } from '@angular/core';
import { Pet } from '../../pet';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  pet: Pet = new Pet()
  registrationErrors: string[] = [];
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {  }

  onSubmit(data: Pet) {
    this.dataService.addPet(this.pet).subscribe(pet => {
      this.router.navigateByUrl('')
    }, error => {
      console.log('error registering' , error.error)
      this.registrationErrors = error.error
    })
    // if (this.dataService.addPet(this.pet)) {
    //   console.log()
    //   // this.router.navigateByUrl('')
    // }
  }

}
