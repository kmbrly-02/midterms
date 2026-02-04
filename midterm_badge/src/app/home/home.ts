import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs';
import { DataService } from '../services/data';
import { TruncatePipe } from '../pipes/truncate-pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TruncatePipe],
  templateUrl: './home.html'
})
export class HomeComponent {

  latestPosts$;

  constructor(private dataService: DataService) {
    this.latestPosts$ = this.dataService.posts$.pipe(
      map(posts => posts.slice(0, 5))
    );
  }
}
