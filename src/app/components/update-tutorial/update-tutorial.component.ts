import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tutorial } from 'src/app/models/tutorial.model';
import { Type } from 'src/app/models/type.model';
import { TutorialService } from 'src/app/services/tutorial.service';
import { TypeService } from 'src/app/services/type.service';

@Component({
  selector: 'app-update-tutorial',
  templateUrl: './update-tutorial.component.html',
  styleUrls: ['./update-tutorial.component.css']
})
export class UpdateTutorialComponent implements OnInit{
  currentTutorial: Tutorial | undefined;

  TutorialService: any;
  ngOnInit(): void {
    this.id_totorial=this.ac.snapshot.params["id"]
    this.getTutorila()
    this.gettype()
  }
constructor(private ac:ActivatedRoute,private service:TutorialService,private router:Router, private typeService:TypeService
  ){}

  tutorial!:Tutorial;
  
  id_type!:any;
  Tutorial?: Tutorial[];
  id_totorial!:any; 
  types?: Type[];

  getTutorila(){
    return this.service.get(this.id_totorial).subscribe(
      (data)=>this.tutorial=data
    )
  }

  update(id: number, data: Tutorial) {
    return this.service.update(id, data).subscribe(() => {
      this.service.create(this.id_type, data).subscribe(() => {
        this.router.navigate(['/tutorials']);
      });
    });
  }
  deleteTutorial(): void {
    if (this.currentTutorial) {
      this.service.delete(this.currentTutorial.id).subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/tutorials']);
        },
        error: (e) => console.error(e)
      });
    }
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
}
