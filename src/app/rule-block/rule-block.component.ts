import { Component, OnInit, Input } from '@angular/core';
import { RuleItemComponent } from '../rule-item/rule-item.component';

@Component({
  selector: 'app-rule-block',
  templateUrl: './rule-block.component.html',
  styleUrls: ['./rule-block.component.sass']
})
export class RuleBlockComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;

  rules: RuleItemComponent[] = [new RuleItemComponent()];

  constructor() {
    this.itemDelete = this.itemDelete.bind(this);
  }

  ngOnInit() {
  }

  addRule() {
    this.rules.push(new RuleItemComponent());
  }

  itemDelete(item) {
    this.rules = this.rules.filter((rule, index) => index !== item.key);
  }

}
