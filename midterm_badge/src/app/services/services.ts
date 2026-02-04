import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { DataService } from './data';
import { TruncatePipe } from '../pipes/truncate-pipe'; // <-- import pipe here

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, TruncatePipe], // <-- add pipe to imports
  templateUrl: './services.html'
})
export class ServicesComponent {
  search$ = new BehaviorSubject<string>('');
  filteredPosts$;

  constructor(private dataService: DataService) {
    this.filteredPosts$ = combineLatest([
      this.dataService.posts$,
      this.search$
    ]).pipe(
      map(([posts, search]) =>
        posts.filter(post =>
          post.title.toLowerCase().includes(search.toLowerCase()) ||
          post.body.toLowerCase().includes(search.toLowerCase())
        )
      )
    );
  }

  onSearch(value: string) {
    this.search$.next(value);
  }
}
