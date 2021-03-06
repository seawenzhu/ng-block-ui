import {
  Component,
  Input,
  ViewEncapsulation,
  OnInit
} from '@angular/core';
import { BlockUIDefaultName } from '../../constants/block-ui-default-name.constant';

@Component({
  selector: 'block-ui',
  template: `
    <ng-content></ng-content>
    <block-ui-content [name]="name" [message]="message">
    </block-ui-content>
  `,
  encapsulation: ViewEncapsulation.None
})
export class BlockUIComponent implements OnInit {
  @Input() name: string;
  @Input() message: string;

  constructor() { }

  ngOnInit() {
    this.name = this.name || BlockUIDefaultName;
  }
}
