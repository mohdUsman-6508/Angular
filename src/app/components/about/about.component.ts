import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  private route = inject(ActivatedRoute);

  id: any;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);

    this.route.params.subscribe({
      next: (val) => {
        const paramId = val;
        console.log(paramId);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
