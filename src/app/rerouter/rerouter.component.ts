import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rerouter',
  templateUrl: './rerouter.component.html',
  styleUrls: ['./rerouter.component.sass']
})
export class RerouterComponent implements OnInit {

  public destination;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.destination = (this.route.snapshot.paramMap.get('destination'));
    if (this.destination === 'todos') {
      this.router.navigate(['']);
    }
  }
}
