import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-name-fields',
  templateUrl: './name-fields.component.html',
  styleUrls: ['./name-fields.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NameFieldsComponent implements OnInit {
  @Input() firstnameControl;
  @Input() lastnameControl;

  constructor() { }

  ngOnInit() {
  }

}
