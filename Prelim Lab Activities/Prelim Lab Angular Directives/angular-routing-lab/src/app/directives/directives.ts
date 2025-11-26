import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [FormsModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  isStaticNoteVisible : boolean = false;
  isNoteVisible : boolean = true;
  isParagraphVisible  : boolean = false;
  monthNameStatic: string = 'Mar';
  monthNameDynamic: string = 'Mar';
  cityList: string[] = ['Angeles', 'San Fernando', 'Mabalacat', 'Mexico', 'Arayat'];
  hitList: any[] = [
    {name: 'C Kirk', cause: 'Gunshot', isActive: false},
    {name: 'G Floyd', cause: 'Cardiac Arrest', isActive: false},
    {name: 'M King', cause: 'Gunshot', isActive: false},
    {name: 'J Kennedy', cause: 'Gunshot', isActive: false},
    {name: 'A Lincoln', cause: 'Gunshot', isActive: false},
  ];

  showNote() {
    this.isNoteVisible = true;
  }
  hideNote() {
    this.isNoteVisible = false;
  }
  toggleNote() {
    this.isParagraphVisible = !this.isParagraphVisible;
  }
}
