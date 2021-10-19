import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type SkillMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EducationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AddressMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ExperienceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ResumeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Skill {
  readonly id: string;
  readonly name?: string;
  readonly level?: string;
  readonly resumeID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Skill, SkillMetaData>);
  static copyOf(source: Skill, mutator: (draft: MutableModel<Skill, SkillMetaData>) => MutableModel<Skill, SkillMetaData> | void): Skill;
}

export declare class Education {
  readonly id: string;
  readonly school?: string;
  readonly degree?: string;
  readonly graduated_date?: string;
  readonly courses?: string;
  readonly resumeID?: string;
  readonly Address?: Address;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Education, EducationMetaData>);
  static copyOf(source: Education, mutator: (draft: MutableModel<Education, EducationMetaData>) => MutableModel<Education, EducationMetaData> | void): Education;
}

export declare class Address {
  readonly id: string;
  readonly street?: string;
  readonly city?: string;
  readonly state?: string;
  readonly country?: string;
  readonly zip?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Address, AddressMetaData>);
  static copyOf(source: Address, mutator: (draft: MutableModel<Address, AddressMetaData>) => MutableModel<Address, AddressMetaData> | void): Address;
}

export declare class Experience {
  readonly id: string;
  readonly company?: string;
  readonly job_title?: string;
  readonly years?: string;
  readonly descriptions?: (string | null)[];
  readonly resumeID?: string;
  readonly Address?: Address;
  readonly techstacks?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Experience, ExperienceMetaData>);
  static copyOf(source: Experience, mutator: (draft: MutableModel<Experience, ExperienceMetaData>) => MutableModel<Experience, ExperienceMetaData> | void): Experience;
}

export declare class Project {
  readonly id: string;
  readonly title?: string;
  readonly descriptions?: (string | null)[];
  readonly years?: string;
  readonly github?: string;
  readonly image?: string;
  readonly resumeID?: string;
  readonly Address?: Address;
  readonly techstacks?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Project, ProjectMetaData>);
  static copyOf(source: Project, mutator: (draft: MutableModel<Project, ProjectMetaData>) => MutableModel<Project, ProjectMetaData> | void): Project;
}

export declare class Resume {
  readonly id: string;
  readonly firstname?: string;
  readonly lastname?: string;
  readonly phone?: string;
  readonly email?: string;
  readonly profileimage?: string;
  readonly resume_download_link?: string;
  readonly github?: string;
  readonly linkedin?: string;
  readonly Skills?: (Skill | null)[];
  readonly Educations?: (Education | null)[];
  readonly Experiences?: (Experience | null)[];
  readonly Projects?: (Project | null)[];
  readonly Address?: Address;
  readonly description?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Resume, ResumeMetaData>);
  static copyOf(source: Resume, mutator: (draft: MutableModel<Resume, ResumeMetaData>) => MutableModel<Resume, ResumeMetaData> | void): Resume;
}