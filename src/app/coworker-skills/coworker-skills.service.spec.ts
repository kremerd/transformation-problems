import { TestBed } from '@angular/core/testing';
import { CoworkerSkillsService } from './coworker-skills.service';
import { Coworker } from './models/coworker';
import { CoworkerProfile } from './models/coworker-profile';


describe('CoworkerSkillsService', () => {
  let service: CoworkerSkillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(CoworkerSkillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  xit('should generate profiles for coworkers', () => {
    const coworkers = buildCoworkers();
    const profiles = service.getProfiles(coworkers);
    expect(profiles).toEqual(buildCoworkerProfiles());
  });

  const buildCoworkers = (): Coworker[] => [
    {
      name: 'Mario',
      skills: [
        { name: 'jump', proficiency: 'EXPERT' },
        { name: 'goRight', proficiency: 'EXPERT' },
        { name: 'hideInGrass', proficiency: 'AVERAGE' }
      ]
    },
    {
      name: 'Luigi',
      skills: [
        { name: 'hideInGrass', proficiency: 'EXPERT' },
        { name: 'goRight', proficiency: 'GOOD' },
        { name: 'getInTrouble', proficiency: 'AVERAGE' }
      ]
    },
    {
      name: 'Peach',
      skills: [
        { name: 'getInTrouble', proficiency: 'EXPERT' },
        { name: 'hideInGrass', proficiency: 'GOOD' },
        { name: 'jump', proficiency: 'GOOD' }
      ]
    }
  ];

  const buildCoworkerProfiles = (): CoworkerProfile[] => [
    {
      name: 'Mario',
      skills: ['jump', 'goRight']
    },
    {
      name: 'Luigi',
      skills: ['hideInGrass', 'goRight']
    },
    {
      name: 'Peach',
      skills: ['getInTrouble', 'hideInGrass', 'jump']
    }
  ];
});
