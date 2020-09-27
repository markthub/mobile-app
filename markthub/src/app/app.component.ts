import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(private platform: Platform, private statusBar: StatusBar, public router: Router, public authService: AuthService) {
    this.initDarkMode();
    this.checkUserLogin();
    this.initializeApp();
  }

  checkUserLogin() {
    if (this.authService.isUserAuthenticated()) {
      this.router.navigate(["base"])
    } else {
      this.router.navigate(["welcome"])
    }
  }

  initDarkMode() {
    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    toggleDarkTheme(prefersDark.matches);
    prefersDark.addEventListener("change", (mediaQuery) => toggleDarkTheme(mediaQuery.matches))

    function toggleDarkTheme(shouldAdd) {
      document.body.classList.toggle('dark', shouldAdd);
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
    });
  }
}
