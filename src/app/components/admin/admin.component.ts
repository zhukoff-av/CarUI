import { Component, OnInit } from '@angular/core';
import { ModelService } from '../../services/bike.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public models;

  constructor(private modelService: ModelService) { }

  ngOnInit() {
    this.getModels();
  }

  getModels() {
    this.modelService.getModels().subscribe(
      data => { this.models = data; },
      err => console.error(err),
      () => console.log('models loaded')
    );
  }

}
