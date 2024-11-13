import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {FeatureFlagService} from "./feature-flag.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'openfeature-ng-demo';
  isFeatureEnabled = false;

  constructor(private featureFlagService: FeatureFlagService) {}

  async ngOnInit() {
    this.isFeatureEnabled = await this.featureFlagService.isFeatureEnabled('welcome-message');
    console.log("isFeatureEnabled: " + this.isFeatureEnabled)
  }
}
