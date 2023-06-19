import { Component, Input, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tutorial } from 'src/app/models/tutorial.model';
import { Type } from 'src/app/models/type.model';
import { TypeService } from 'src/app/services/type.service';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css']
})
export class TutorialDetailsComponent implements OnInit {

  @Input() viewMode = false;
  @Input() currentTutorial: Tutorial = {
    title: '',
    description: ''
  };

  message = '';
  id_type: any;
  types: Type[] = []; 
tutorial: any;
  service: any;

  constructor(
    private tutorialService: TutorialService,
    private typeService: TypeService, // Inject the TypeService
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getTutorial(this.route.snapshot.params['id']);
      this.getTypes(); // Fetch the types
    }
  }
  update(id: number, data: Tutorial) {
    return this.service.update(id, data).subscribe(() => {
      this.service.create(this.id_type, data).subscribe(() => {
        this.router.navigate(['/tutorials']);
      });
    });
  }

  getTutorial(id: string): void {
    this.tutorialService.get(id).subscribe({
      next: (data: Tutorial) => {
        this.currentTutorial = data;
        console.log(data);
      },
      error: (e: any) => console.error(e)
    });
  }

  getTypes(): void {
    this.typeService.getAll().subscribe(
      (res) => {
        this.types = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }



  deleteTutorial(): void {
    this.tutorialService.delete(this.currentTutorial.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/tutorials']);
        },
        error: (e) => console.error(e)
      });
  }

}
