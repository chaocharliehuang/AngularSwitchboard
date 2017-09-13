import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  switches: string[] = [];

  createSwitches() {
    var onOff = ['on', 'off'];
    for (var i = 0; i < 10; i++) {
      this.switches.push(onOff[Math.floor(Math.random()*2)]);
    }
  }

  switchToggle(i) {
    if (this.switches[i] === 'on') {
      this.switches[i] = 'off';
    } else {
      this.switches[i] = 'on';
    }
  }

  ngOnInit() {
    this.createSwitches();
  }
}
