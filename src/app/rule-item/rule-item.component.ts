import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rule-item',
  templateUrl: './rule-item.component.html',
  styleUrls: ['./rule-item.component.sass']
})
export class RuleItemComponent implements OnInit {
  id: number;
  location: string = 'all';
  condition: string = 'like';
  url: string;
  urlValidation: string = '';
  @Input() key: number;
  @Input() deleteClick: (args: any) => void;

  constructor() { }

  ngOnInit() {
  }

  clickDelete() {
    this.deleteClick(this);
  }

  urlChanged(e) {
    let val = e.target.value;
    console.log('urlChanged', val);
    if (this.condition === 'where') {
      if (!val.length) {
        this.urlValidation = 'URL is missing';
      } else {
        this.urlValidation = '';
      }
    }
  }

}
