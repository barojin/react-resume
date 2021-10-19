// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Skill, Education, Address, Experience, Project, Resume } = initSchema(schema);

export {
  Skill,
  Education,
  Address,
  Experience,
  Project,
  Resume
};