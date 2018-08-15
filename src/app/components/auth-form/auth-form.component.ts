import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {
  feedbackEnabled = false;
  error = null;
  processing = false;
  username: string;
  password: string;
  // ... model (e,g. username: String)
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.authService
        .signup(this.username, this.password)
        .then(result => {
          this.router.navigate(['/profile']);
        })
        .catch(err => {
          this.error = err.error; // :-)
          this.processing = false;
          this.feedbackEnabled = false;
          console.log(err);
        });
    }
  }
}
