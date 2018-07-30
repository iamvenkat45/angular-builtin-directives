import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Built in Directives';
  users = [{
    firstName: 'Venkat',
    lastname: 'Sandeep',
    age: 20,
    subjects: ['Maths', 'Physics', 'English']
  }, {
    firstName: 'Vijay',
    lastname: 'Soppa',
    age: 18,
    subjects: ['Maths', 'Physics', 'English']
  }, {
    firstName: 'Sri',
    lastname: 'B',
    age: 19,
    subjects: ['Maths', 'Physics', 'English']
  }, {
    firstName: 'jai',
    lastname: 'M',
    age: 17,
    subjects: ['Maths', 'Physics', 'English']
  }];

  canShowSubjects(user) {
    return user.age <= 18;
  }
}
