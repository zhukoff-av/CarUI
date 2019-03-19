import { Component, OnInit } from '@angular/core';
import { ModelService } from '../../services/bike.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  models: string[] = [
    'Mercedes',
    'BMW',
    'AUDI',
  ];

  modelForm: FormGroup;
  validMessage: string = '';

  constructor(private modelService: ModelService) { }

  ngOnInit() {
    this.modelForm = new FormGroup({
      name: new FormControl('', Validators.required),
       email: new FormControl('', Validators.required),
       phone: new FormControl('', Validators.required),
       model: new FormControl('', Validators.required),
       serialNumber: new FormControl('', Validators.required),
       purchasePrice: new FormControl('', Validators.required),
       purchaseDate: new FormControl('', Validators.required),
       contact: new FormControl()
    });
  }

  submitRegistration() {

    if (this.modelForm.valid) {
      this.validMessage = "Your car registration has been submitted. Thank you!";
      this.modelService.createModelRegistration(this.modelForm.value).subscribe(
        data => {
          this.modelForm.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      )
    } else {
      this.validMessage = "Please fill out the form before submitting!";
    }
  }
}
