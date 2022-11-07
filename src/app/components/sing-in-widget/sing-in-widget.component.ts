import { Component, Input } from '@angular/core'

@Component({
  selector: 'sing-in-widget',
  templateUrl: 'sing-in-widget.component.html',
  styleUrls: ['sing-in-widget.component.css'],
})
export class SingInWidget {
  @Input()
  button_singin: string = 'Sing In'
  @Input()
  rootClassName: string = ''

  constructor() {}
}
