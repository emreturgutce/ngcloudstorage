import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-owner',
  templateUrl: './edit-owner.component.html',
  styleUrls: ['./edit-owner.component.css'],
})
export class EditOwnerComponent implements OnInit {
  name: string;

  constructor(private route: ActivatedRoute) {}

  async ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name');
  }
}
