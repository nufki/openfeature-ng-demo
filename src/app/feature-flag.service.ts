import { Injectable } from '@angular/core';
import { FlagdProvider } from '@openfeature/flagd-provider';
import { OpenFeature } from '@openfeature/server-sdk';

// import {OpenFeature} from "@openfeature/web-sdk";

@Injectable({
  providedIn: 'root'
})
export class FeatureFlagService {
  // private client: Client;

  constructor() {
    //this.initializeOpenFeature();
  }

  public async initializeOpenFeature() {
    const provider = new FlagdProvider({
        host: 'localhost',
        port: 8013,
        tls: false,
      });

    if (provider) {
      OpenFeature.setProvider(provider);
    } else {
      console.warn('No provider set, falling back to no-op');
    }

    //resolveBooleanEvaluation(flagKey: string, defaultValue: boolean, transformedContext: EvaluationContext, logger: Logger): Promise<ResolutionDetails<boolean>>;
    //resolveBooleanEvaluation(flagKey: string, defaultValue: boolean, context: EvaluationContext, logger: Logger): ResolutionDetails<boolean>;
    // const provider: Provider = new FlagdProvider({
    //   host: 'localhost',
    //   port: 8013,
    //   tls: false,
    // }) as unknown as Provider;
    //
    //
    // await OpenFeature.setProvider(provider);
    // await OpenFeature.setProviderAndWait(provider);
    // this.client = OpenFeature.getClient();
  }

  async isFeatureEnabled(flagName: string): Promise<boolean> {
    const client = OpenFeature.getClient();
    return await client.getBooleanValue(flagName, false);
  }
}
