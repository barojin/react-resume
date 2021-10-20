/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSkill = /* GraphQL */ `
  query GetSkill($id: ID!) {
    getSkill(id: $id) {
      id
      name
      level
      resumeID
      createdAt
      updatedAt
    }
  }
`;
export const listSkills = /* GraphQL */ `
  query ListSkills(
    $filter: ModelSkillFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSkills(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        level
        resumeID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEducation = /* GraphQL */ `
  query GetEducation($id: ID!) {
    getEducation(id: $id) {
      id
      school
      degree
      graduated_date
      courses
      resumeID
      createdAt
      updatedAt
      Address {
        id
        street
        city
        state
        country
        zip
        createdAt
        updatedAt
      }
    }
  }
`;
export const listEducations = /* GraphQL */ `
  query ListEducations(
    $filter: ModelEducationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEducations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        school
        degree
        graduated_date
        courses
        resumeID
        createdAt
        updatedAt
        Address {
          id
          street
          city
          state
          country
          zip
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getExperience = /* GraphQL */ `
  query GetExperience($id: ID!) {
    getExperience(id: $id) {
      id
      company
      job_title
      years
      descriptions
      resumeID
      techstacks
      createdAt
      updatedAt
      Address {
        id
        street
        city
        state
        country
        zip
        createdAt
        updatedAt
      }
    }
  }
`;
export const listExperiences = /* GraphQL */ `
  query ListExperiences(
    $filter: ModelExperienceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExperiences(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        company
        job_title
        years
        descriptions
        resumeID
        techstacks
        createdAt
        updatedAt
        Address {
          id
          street
          city
          state
          country
          zip
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      title
      descriptions
      years
      github
      image
      resumeID
      techstacks
      createdAt
      updatedAt
      Address {
        id
        street
        city
        state
        country
        zip
        createdAt
        updatedAt
      }
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        descriptions
        years
        github
        image
        resumeID
        techstacks
        createdAt
        updatedAt
        Address {
          id
          street
          city
          state
          country
          zip
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getAddress = /* GraphQL */ `
  query GetAddress($id: ID!) {
    getAddress(id: $id) {
      id
      street
      city
      state
      country
      zip
      createdAt
      updatedAt
    }
  }
`;
export const listAddresss = /* GraphQL */ `
  query ListAddresss(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddresss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        street
        city
        state
        country
        zip
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getResume = /* GraphQL */ `
  query GetResume($id: ID!) {
    getResume(id: $id) {
      id
      firstname
      lastname
      phone
      email
      profileimage
      resume_download_link
      github
      linkedin
      description
      createdAt
      updatedAt
      Skills {
        items {
          id
          name
          level
          resumeID
          createdAt
          updatedAt
        }
        nextToken
      }
      Educations {
        items {
          id
          school
          degree
          graduated_date
          courses
          resumeID
          createdAt
          updatedAt
        }
        nextToken
      }
      Experiences {
        items {
          id
          company
          job_title
          years
          descriptions
          resumeID
          techstacks
          createdAt
          updatedAt
        }
        nextToken
      }
      Projects {
        items {
          id
          title
          descriptions
          years
          github
          image
          resumeID
          techstacks
          createdAt
          updatedAt
        }
        nextToken
      }
      Address {
        id
        street
        city
        state
        country
        zip
        createdAt
        updatedAt
      }
    }
  }
`;
export const listResumes = /* GraphQL */ `
  query ListResumes(
    $filter: ModelResumeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResumes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstname
        lastname
        phone
        email
        profileimage
        resume_download_link
        github
        linkedin
        description
        createdAt
        updatedAt
        Skills {
          nextToken
        }
        Educations {
          nextToken
        }
        Experiences {
          nextToken
        }
        Projects {
          nextToken
        }
        Address {
          id
          street
          city
          state
          country
          zip
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
