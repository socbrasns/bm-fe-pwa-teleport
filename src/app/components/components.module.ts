import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { SingIn } from './sing-in/sing-in.component'
import { SingInWidget } from './sing-in-widget/sing-in-widget.component'
import { SingUp } from './sing-up/sing-up.component'
import { Forgot } from './forgot/forgot.component'
import { TopBar } from './top-bar/top-bar.component'

@NgModule({
  declarations: [SingIn, SingInWidget, SingUp, Forgot, TopBar],
  imports: [CommonModule, RouterModule],
  exports: [SingIn, SingInWidget, SingUp, Forgot, TopBar],
})
export class ComponentsModule {}
