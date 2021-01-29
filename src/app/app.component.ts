import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { OverlayContainer } from '@angular/cdk/overlay';
import { SampleDialogComponent } from './sample-dialog/sample-dialog.component';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Angular material dark mode';

  private unsubscribe$ = new Subject<void>();
  cities = ['London', 'Paris', 'Madrid', 'Moscow', 'New York', 'Karachi', 'Sydney'];
  countryControl: FormControl;
  cityControl: FormControl;

  cities$: Observable<string>;
  city = '';

  @HostBinding('class') className = '';

  toggleControl = new FormControl(false);

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private overlay: OverlayContainer
  ) {}

  ngOnInit(): void {
    this.cityControl = new FormControl('');
    this.cityControl.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((value) => {
        this.router.navigate([value]);
      });

    // dark-mode toggle
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'darkMode';
      this.className = darkMode ? darkClassName : '';
      if (darkMode) {
        this.overlay.getContainerElement().classList.add(darkClassName);
      } else {
        this.overlay.getContainerElement().classList.remove(darkClassName);
      }
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  showDialog(): void {
    this.dialog.open(SampleDialogComponent, {
      width: '500px',
    });
  }
}
