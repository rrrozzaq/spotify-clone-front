import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { fontAwesomeIcons } from './shared/font-awesome-icons';
import { NavigationComponent } from "./layout/navigation/navigation.component";
import { LibraryComponent } from "./layout/library/library.component";
import { HeaderComponent } from "./layout/header/header.component";
import { ToastService } from './service/toast.service';
import { NgbToast } from '@ng-bootstrap/ng-bootstrap';

@Component({
  imports: [FontAwesomeModule, RouterModule, NavigationComponent, LibraryComponent, HeaderComponent, NgbToast],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'spotify';

  private faIconLibrary = inject(FaIconLibrary);

  toastService = inject(ToastService)

  ngOnInit(): void {
    this.initFontAwesome();
  }

  initFontAwesome() {
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }
}
