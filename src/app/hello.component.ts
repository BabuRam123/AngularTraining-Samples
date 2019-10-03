import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<p>Hello component works</p><h1>{{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
