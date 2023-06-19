import { Component } from '@angular/core';
import { Type } from 'src/app/models/type.model';
import { TypeService } from 'src/app/services/type.service';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css']
})
export class TypeListComponent {
types?: Type[];
currentType: Type = {};
currentIndex = -1;
nom = '';

  constructor(private typeService: TypeService) { }

  ngOnInit(): void {
    this.retrieveTypes();
  }

  retrieveTypes(): void {
    this.typeService.getAll()
      .subscribe({
        next: (data) => {
          this.types = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveTypes();
    this.currentType = {};
    this.currentIndex = -1;
  }

  setActiveType(type: Type, index: number): void {
    this.currentType = type;
    this.currentIndex = index;
  }

  removeAllTypes(): void {
    this.typeService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchNom(): void {
    this.currentType = {};
    this.currentIndex = -1;

    this.typeService.findByNom(this.nom)
      .subscribe({
        next: (data) => {
          this.types = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
