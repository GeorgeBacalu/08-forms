import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("signupForm") signupForm: NgForm;
  defaultQuestion: string = "pet";
  answer: string = "";
  genders: string[] = ["male", "female"];
  user: { username: string, email: string, question: string, answer: string, gender: string } = { username: "", email: "", question: "", answer: "", gender: "" };
  submitted: boolean = false;

  // onSubmit(form: NgForm): void { console.log(form); }

  onSubmit(): void {
    const { userData, secret, gender } = this.signupForm.value;
    this.user = { username: userData.username, email: userData.email, question: secret.question, answer: secret.answer, gender: gender };
    this.submitted = true;
    this.signupForm.reset();
  }

  onSuggestUsername(): void {
    // this.signupForm.setValue({ userData: { username: "Superuser", email: "" }, secret: { question: "pet", answer: "" }, gender: "male" }); // overwrites whole form
    this.signupForm.form.patchValue({ userData: { username: "Superuser" } }); // updates parts of the form
  }
}
