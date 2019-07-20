import { ILoginResp } from './../../interfaces';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() minrole: ILoginResp;
  addForm: FormControl;

  /** Currently authenticating */
  public authenticating = false;

  public error;

  constructor(
    public activatedRoute: ActivatedRoute,
    public dataService: DataService,
    public router: Router,
  ) {
    this.addForm = new FormControl();
  }

  ngOnInit() {
    this.dataService.setTitle('Login');
    if (this.dataService.isLoggedIn()) {
      this.router.navigate(['feed']);
      return;
    }

    // const params = this.activatedRoute.snapshot.queryParams;
    // if (params.hasOwnProperty('code')) {
    //   this.authenticating = true;
    //   const auth_code = params['code'];
    //   this.dataService.AuthenticateSSO(auth_code).subscribe(() => {
    //     this.dataService.GetFillCurrentUser().subscribe(() => {
    //       const redir = localStorage.getItem(this.dataService.LOGIN_REDIR);
    //       if (redir && redir !== '') {window.location.href = this.dataService.GetLoginURL();
    //         localStorage.setItem(this.dataService.LOGIN_REDIR, '');
    //         const rpath: any[] = this.dataService.DecodeObject(redir);
    //         this.router.navigate(rpath);
    //       } else {
    //         this.router.navigate(['feed']);
    //       }
    //     });
    //   }, (e) => {
    //     console.log(e);
    //     this.error = e.status;
    //   });
    // } else {
    //   this.authenticating = false;
    // }
  }

  /** Open a new tab for SSO login */
  submit(username, password) {
    this.authenticating = true;
    alert(username.value);
    this.dataService.GetUserLogin(username.value, password.value).subscribe((result) => {
      alert(result.status);
      this.dataService.GetFillCurrentUser().subscribe(() => {
        const redir = localStorage.getItem(this.dataService.LOGIN_REDIR);
        if (redir && redir !== '') {window.location.href = this.dataService.GetLoginURL();
          localStorage.setItem(this.dataService.LOGIN_REDIR, '');
          const rpath: any[] = this.dataService.DecodeObject(redir);
          this.router.navigate(rpath);
        } else {
          this.router.navigate(['feed']);
        }
      });
    }, (e) => {
      console.log(e);
      this.error = e.status;
    });
  }
}
