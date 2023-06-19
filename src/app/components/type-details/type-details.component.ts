import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Type } from 'src/app/models/type.model';
import { TypeService } from 'src/app/services/type.service';

@Component({
  selector: 'app-type-details',
  templateUrl: './type-details.component.html',
  styleUrls: ['./type-details.component.css']
})
export class TypeDetailsComponent implements OnInit  {

  @Input() viewMode = false;
  @Input() currentType: Type = {
    nom: ''
  };
  
  message = '';

  constructor(
    private typeService: TypeService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getType(this.route.snapshot.params["id"]);
    }
  }

  getType(id: string): void {
    this.typeService.get(id)
      .subscribe({
        next: (data: Type) => {
          this.currentType = data;
          console.log(data);
        },
        error: (e: any) => console.error(e)
      });
  }

  updateType(): void {
    

    this.typeService.update(this.currentType.id, this.currentType)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/types']);

        },
        error: (e) => console.error(e)
      });
  }
  deleteType(): void {
    this.typeService.delete(this.currentType.id ) 
      .subscribe({
        next: (res: any) => {
          console.log(res);
          this.router.navigate(['/types']);
        },
        error: (e: any) => console.error(e)
      });
  }

}