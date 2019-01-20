import { Injectable } from '@angular/core';
import { Coworker } from './models/coworker';
import { CoworkerProfile } from './models/coworker-profile';

@Injectable({
  providedIn: 'root'
})
export class CoworkerSkillsService {
  // Imperative programming style

  public getProfiles(coworkers: Coworker[]): CoworkerProfile[] {
    const profiles: CoworkerProfile[] = [];
    for (const coworker of coworkers) {
      const profile = this.getProfile(coworker);
      profiles.push(profile);
    }
    return profiles;
  }

  private getProfile(coworker: Coworker): CoworkerProfile {
    return {
      name: coworker.name,
      skills: this.getRelevantSkills(coworker)
    };
  }

  private getRelevantSkills(coworker: Coworker): string[] {
    const relevantSkills: string[] = [];
    for (const skill of coworker.skills) {
      if (skill.proficiency !== 'AVERAGE') {
        relevantSkills.push(skill.name);
      }
    }
    return relevantSkills;
  }

  // // Functional programming style

  // public getProfiles(coworkers: Coworker[]): CoworkerProfile[] {
  //   return coworkers.map(coworker => this.getProfile(coworker));
  // }

  // private getProfile(coworker: Coworker): CoworkerProfile {
  //   return {
  //     name: coworker.name,
  //     skills: this.getRelevantSkills(coworker)
  //   };
  // }

  // private getRelevantSkills(coworker: Coworker): string[] {
  //   return coworker.skills
  //     .filter(skill => skill.proficiency !== 'AVERAGE')
  //     .map(skill => skill.name);
  // }
}
