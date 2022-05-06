import { NgModule } from "@angular/core";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

@NgModule({
  declarations: [SignupComponent, LoginComponent],
  imports: [
            ReactiveFormsModule,
            AngularFireAuthModule,
            SharedModule,
            FlexLayoutModule
  ],
  exports:[]
})
export class AuthModule {

}
