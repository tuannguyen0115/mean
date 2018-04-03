import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { Observable } from 'rxjs/Observable'
import { HttpClient } from '@angular/common/http'

import { Pet } from './pet'

import 'rxjs/add/operator/map'
@Injectable()
export class DataService {
  pets: BehaviorSubject<Pet[]> = new BehaviorSubject([])  
  pet: BehaviorSubject<any> = new BehaviorSubject(Pet)  
  // private base = 'https://5ac0ef2b885c830014137439.mockapi.io/pets'
  private base = '/api'
  
  constructor(private http: HttpClient) { }

  retrievePetList() {
    this.http.get(this.base).subscribe((data:any[]) => this.pets.next(data))

  }

  retrievePet(id: string) {
    // console.log('path ', this.base + '/' + id)
    this.http.get(this.base + '/' + id).subscribe((data:any) => this.pet.next(data))
  }

  addPet(pet: Pet) {
    return this.http.post(this.base, pet)
    // this.http.post(this.base, pet).subscribe((data:any) => {
    //   console.log('added data ', data)
    //   this.pet.next(data)
    // }, error => {
    //   console.log('added error ', error)
    // })
    // return true
  }
  updatePet(petData: Pet) {
    console.log('updating pet ', petData)
    return this.http.put(this.base + '/' + petData._id, petData)
    // this.http.put(this.base + '/' + petData._id, petData).subscribe((data:any) => {      
    //   this.pet.next(petData)
    //   console.log('updated data ', petData)
    // })
  }
  deletePet(petID: any) {
    // console.log('deletint pet ', petID)
    this.http.delete(this.base + '/' + petID).subscribe((data:any) => {
      // console.log('deleted data ', data)
      this.pet.next(data)
    })
  }  
}
