import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service'

import { Pet } from '../../pet'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  pets: Pet[] = []
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.retrievePetList()
    this.dataService.pets.subscribe(data => {
      this.pets = data
      this.pets.sort((pet1, pet2) => {
        return pet1.type.localeCompare(pet2.type) 
      })

    })
  }


}
