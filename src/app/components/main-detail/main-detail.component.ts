import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import toastr from 'toastr';

import { TradersClubService } from './../services/tradersClub.service';

@Component({
  selector: 'app-main-detail',
  templateUrl: './main-detail.component.html',
  styleUrls: ['./main-detail.component.css']
})
export class MainDetailComponent implements OnInit {
  automaker: any = {};
  data: any = {};

  // registerForm: FormGroup;
  // submitted = false;

  // @ViewChild('regForm') myRegForm;

  constructor(private traders: TradersClubService) {
  }

  ngOnInit() {
    // this.registerForm = this.formBuilder.group({
    //   title: ['', Validators.required],
    //   model: ['', Validators.required],
    //   brand: ['', Validators.required],
    //   year: ['', Validators.required],
    //   color: ['', Validators.required],
    //   km: ['', Validators.required],
    //   price: ['', Validators.required],
    //   // brand: ['', [Validators.required,   Validators.pattern(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,63})$/)]],
    //   // year: ['', [Validators.required, Validators.minLength(6)]],
    //   // 'gender': ['', Validators.required],
    //   // 'hobbies':new FormArray([])
    // });
    this.allAutomaker()
    // this.cadastrarCar()
  }

  // get f() { return this.registerForm.controls; }

  allAutomaker(){
    try {
      this.traders.searchCar()
      this.traders.searchAutomaker()
      .subscribe(automaker => {
          console.log(automaker)
          this.automaker = automaker
      },
      error => {
        console.log(error, 'Error')
      })
    } catch (e) {
      console.log(e)
    }
  }

  insertCar(cars){
    try {
      // console.log(cars, 'cars')
      this.traders.addCar(cars)
        .subscribe(cars => {
          console.log(cars, 'cars')
          toastr.success("Registration Successfull")
          this.data = cars
        },
          error => {
            console.log(error, 'Erro ao adicionar dados!')
          }
        )
    } catch (e) {
      console.log(e)
    }
  }

  updatedCars(cars){
    try {
      this.traders.updateCar(cars)
        .subscribe(cars => {
          this.data = cars
        },
          error => {
            console.log(error, "Error ao atualizado dados")
        })
    } catch (e) {
      console.log(e);
    }
  }

  removedCars(cars){
    try {
      this.traders.removeCar(cars)
        .subscribe(cars => {
          console.log(cars, 'Dados excluídos com sucesso!')
        },
         error =>{
          console.log(error)
         })
    } catch (e) {
      console.log(e)
    }
  }

  // onSubmit() {
  //   this.submitted = true;
  //   // stop here if form is invalid
  //   if (this.registerForm.invalid) {
  //       return;
  //   }

  //   this.myRegForm.resetForm();
  //   this.submitted = false;
  //   toastr.success("Registration Successfull");
  // }


}
