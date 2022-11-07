import { Component, Input } from '@angular/core'

@Component({
  selector: 'top-bar',
  templateUrl: 'top-bar.component.html',
  styleUrls: ['top-bar.component.css'],
})
export class TopBar {
  @Input()
  heading_topbar: string = 'Benchmark App'
  @Input()
  rootClassName: string = ''

  constructor() {}
}
