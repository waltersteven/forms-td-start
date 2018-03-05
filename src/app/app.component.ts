import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = "";
  genders = ['male', 'female'];
  defaultRadio = "male";

  suggestUserName() {
    const suggestedName = 'Superuser';

    // this.signupForm.setValue({ //this method overrides values
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'female'
    // });

    //this is a better approach (don't override)
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form); //Some attributes of the object form -> dirty: if we change the value, touched: if we click the element
  // }

  //otro método
  onSubmit() {
    console.log(this.signupForm);
  }
  
}
