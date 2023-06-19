import { TypeService } from 'src/app/services/type.service';
import { Type } from 'src/app/models/type.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-type-tutorial',
  templateUrl: './type-tutorial.component.html',
  styleUrls: ['./type-tutorial.component.css']
})
export class TypeTutorialComponent {

  Type: Type = {
   nom: ''
    
  };
  submitted = false;

  constructor(private TypeService: TypeService) { }

  type?: Type[];
   id_type!:any;
   

  ngOnInit(): void {

    this.gettype();
  }

  saveType(): void {
    const data = {
      nom: this.Type.nom
    };

    this.TypeService.create(data ,this.id_type)

      .subscribe({
        
        next: (res) => {
          console.log(this.id_type)
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newType(): void {
    this.submitted = false;
    this.Type = {
    nom: '',
     
    };
  }


  gettype(){
    this.TypeService.getAll().subscribe(
      (res)=>{
        this.type=res;
        console.log(res);

      },
      (err)=>{
        console.log(err);


      }
      
    )
  }




}

