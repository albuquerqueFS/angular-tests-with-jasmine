import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-photo-frame',
  templateUrl: './photo-frame.component.html',
  styleUrls: ['./photo-frame.component.sass'],
})
export class PhotoFrameComponent implements OnInit, OnDestroy {
  @Output() public liked: EventEmitter<void> = new EventEmitter();
  @Input() likes = 0;
  @Input() description = '';
  @Input() src = '';
  private debounceSubject: Subject<void> = new Subject();
  private unsubscribe: Subject<void> = new Subject();

  public ngOnInit(): void {
    this.debounceSubject
      .asObservable()
      .pipe(debounceTime(300))
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => this.liked.emit());
  }

  public ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  public like(): void {
    this.debounceSubject.next();
  }
}
