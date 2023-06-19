import { Tutorial } from './../../models/tutorial.model';
import { Type } from 'src/app/models/type.model';
import { Component } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';
import { TypeService } from 'src/app/services/type.service';
@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent {


  tutorial: Tutorial = {
    title: '',
    description: '',
    types: {} 
  };
  submitted = false;
  selectedTypeId: number | null = null;

  
  constructor(private tutorialService: TutorialService , private typeService:TypeService) { }

    types?: Type[];
  id_type!:any;
  Tutorial?: Tutorial[];
  id_totorial!:any;

  ngOnInit(): void {
    this.gettype();
  }

  saveTutorial(): void {
    if (this.selectedTypeId && this.types) {
      this.tutorial.types = this.types.find(type => type.id === this.selectedTypeId);

    }
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description,
        //type: this.id_type
    };
    console.log(data);
    console.log(this.id_type) 
      this.tutorialService.create(this.id_type,data)
   
      .subscribe({
        
        next: (res) => {
          console.log(this.id_type)
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',
      types: null
    };
  }


  gettype(){
    this.typeService.getAll().subscribe(
      (res)=>{
        this.types=res;
        console.log(res);

      },
      (err)=>{
        console.log(err);


      }
      
    )
  }

 /* gettype() {
    this.tutorialService.getAll().subscribe((data: Tutorial[]) => {
      
      console.log(data);
      this.Tutorial=data;    });
  }*/


}



