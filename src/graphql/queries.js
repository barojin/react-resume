/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSkill = /* GraphQL */ `
  query GetSkill($id: ID!) {
    getSkill(id: $id) {
      id
      name
      level
      resumeID
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSkills = /* GraphQL */ `
  query SyncSkills(
    $filter: ModelSkillFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSkills(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        level
        resumeID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Address {
        id
        street
        city
        state
        country
        zip
        _version
        _deleted
        _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Address {
          id
          street
          city
          state
          country
          zip
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncEducations = /* GraphQL */ `
  query SyncEducations(
    $filter: ModelEducationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEducations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        school
        degree
        graduated_date
        courses
        resumeID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Address {
          id
          street
          city
          state
          country
          zip
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Address {
        id
        street
        city
        state
        country
        zip
        _version
        _deleted
        _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Address {
          id
          street
          city
          state
          country
          zip
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncExperiences = /* GraphQL */ `
  query SyncExperiences(
    $filter: ModelExperienceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncExperiences(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        company
        job_title
        years
        descriptions
        resumeID
        techstacks
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Address {
          id
          street
          city
          state
          country
          zip
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Address {
        id
        street
        city
        state
        country
        zip
        _version
        _deleted
        _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Address {
          id
          street
          city
          state
          country
          zip
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProjects = /* GraphQL */ `
  query SyncProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProjects(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        descriptions
        years
        github
        image
        resumeID
        techstacks
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Address {
          id
          street
          city
          state
          country
          zip
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAddresses = /* GraphQL */ `
  query SyncAddresses(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAddresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        street
        city
        state
        country
        zip
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Skills {
        items {
          id
          name
          level
          resumeID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      Educations {
        items {
          id
          school
          degree
          graduated_date
          courses
          resumeID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      Address {
        id
        street
        city
        state
        country
        zip
        _version
        _deleted
        _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Skills {
          nextToken
          startedAt
        }
        Educations {
          nextToken
          startedAt
        }
        Experiences {
          nextToken
          startedAt
        }
        Projects {
          nextToken
          startedAt
        }
        Address {
          id
          street
          city
          state
          country
          zip
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncResumes = /* GraphQL */ `
  query SyncResumes(
    $filter: ModelResumeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncResumes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Skills {
          nextToken
          startedAt
        }
        Educations {
          nextToken
          startedAt
        }
        Experiences {
          nextToken
          startedAt
        }
        Projects {
          nextToken
          startedAt
        }
        Address {
          id
          street
          city
          state
          country
          zip
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
