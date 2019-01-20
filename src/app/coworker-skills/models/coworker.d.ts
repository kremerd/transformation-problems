export interface Coworker {
  name: string;
  skills: CoworkerSkill[];
}

export interface CoworkerSkill {
  name: string;
  proficiency: Proficiency;
}

export type Proficiency = 'EXPERT' | 'GOOD' | 'AVERAGE';
