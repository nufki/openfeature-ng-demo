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
    this.featureFlagService.evaluateFeatureFlag("special_feature", "contract", "59333-0006")
      .subscribe(response => {
        console.log('response: ', response);
        this.isFeatureEnabled = response.enabled; // Assuming 'enabled' is the response property
      });
  }
}
