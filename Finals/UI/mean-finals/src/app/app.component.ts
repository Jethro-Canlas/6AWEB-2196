import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hoi-officers';
  readonly APIUrl = "http://localhost:5038/api/books/";

  constructor(private http: HttpClient) {}

  officers: any = [];

  refreshOfficers() {
    this.http.get(this.APIUrl + 'GetBooks').subscribe(data => {
      this.officers = data;
    });
  }

  ngOnInit() {
    this.refreshOfficers();
  }

  addOfficer() {
    var name    = (<HTMLInputElement>document.getElementById("newName")).value;
    var rank    = (<HTMLInputElement>document.getElementById("newRank")).value;
    var status  = (<HTMLInputElement>document.getElementById("newStatus")).value;    var theater = (<HTMLInputElement>document.getElementById("newTheater")).value;
    var branch  = (<HTMLInputElement>document.getElementById("newBranch")).value;
    var formData = new FormData();
    formData.append("name", name);
    formData.append("rank", rank);
    formData.append("status", status);
    formData.append("theater", theater);
    formData.append("branch", branch);
    this.http.post(this.APIUrl + 'AddBook', formData).subscribe(data => {
      alert(data);
      this.refreshOfficers();
    });
  }

  deleteOfficer(id: any) {
    this.http.delete(this.APIUrl + 'DeleteBook?id=' + id).subscribe(data => {
      alert(data);
      this.refreshOfficers();
    });
  }

  editOfficer(id: any) {
    this.http.get(this.APIUrl + 'GetBookById?id=' + id).subscribe((data: any) => {
      (<HTMLInputElement>document.getElementById("editId")).value = data.id;
      (<HTMLInputElement>document.getElementById("editName")).value = data.name;
      (<HTMLInputElement>document.getElementById("editRank")).value = data.rank;
      (<HTMLInputElement>document.getElementById("editStatus")).value = data.status;      (<HTMLInputElement>document.getElementById("editTheater")).value = data.theater;
      (<HTMLInputElement>document.getElementById("editBranch")).value = data.branch;
      (<HTMLDialogElement>document.getElementById("editDialog")).showModal();
    });
  }

  updateOfficer() {
    var formData = new FormData();
    formData.append("id",      (<HTMLInputElement>document.getElementById("editId")).value);
    formData.append("name",    (<HTMLInputElement>document.getElementById("editName")).value);
    formData.append("rank",    (<HTMLInputElement>document.getElementById("editRank")).value);
    formData.append("status",  (<HTMLInputElement>document.getElementById("editStatus")).value);    formData.append("theater", (<HTMLInputElement>document.getElementById("editTheater")).value);
    formData.append("branch",  (<HTMLInputElement>document.getElementById("editBranch")).value);
    this.http.put(this.APIUrl + 'UpdateBook', formData).subscribe(data => {
      alert(data);
      (<HTMLDialogElement>document.getElementById("editDialog")).close();
      this.refreshOfficers();
    });
  }
}
