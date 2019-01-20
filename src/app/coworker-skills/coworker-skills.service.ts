import { Injectable } from '@angular/core';
import { Coworker } from './models/coworker';
import { CoworkerProfile } from './models/coworker-profile';

@Injectable({
  providedIn: 'root'
})
export class CoworkerSkillsService {
  public getProfiles(coworkers: Coworker[]): CoworkerProfile[] {
    return [];
  }
}
