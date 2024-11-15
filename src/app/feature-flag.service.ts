import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeatureFlagService {
  private apiUrl = 'http://localhost:8081/evaluate/v1/boolean'; // Flipt's evaluate endpoint

  constructor(private http: HttpClient) {}

  // Evaluate a feature flag with the targetingKey and flagKey
  evaluateFeatureFlag(flagKey: string, targetingKey: string, namespaceKey: string): Observable<any> {
    const url = `${this.apiUrl}`;

    const body = {
      flagKey: flagKey,
      namespace: "default",
      entityId: "contract",
      context: {
        targetingKey: targetingKey, // Use the provided targetingKey
      },
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });

    // Send the POST request
    return this.http.post<any>(url, body, { headers });
  }
}

