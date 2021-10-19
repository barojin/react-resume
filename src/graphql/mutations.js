/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSkill = /* GraphQL */ `
  mutation CreateSkill(
    $input: CreateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    createSkill(input: $input, condition: $condition) {
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
export const updateSkill = /* GraphQL */ `
  mutation UpdateSkill(
    $input: UpdateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    updateSkill(input: $input, condition: $condition) {
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
export const deleteSkill = /* GraphQL */ `
  mutation DeleteSkill(
    $input: DeleteSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    deleteSkill(input: $input, condition: $condition) {
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
export const createEducation = /* GraphQL */ `
  mutation CreateEducation(
    $input: CreateEducationInput!
    $condition: ModelEducationConditionInput
  ) {
    createEducation(input: $input, condition: $condition) {
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
export const updateEducation = /* GraphQL */ `
  mutation UpdateEducation(
    $input: UpdateEducationInput!
    $condition: ModelEducationConditionInput
  ) {
    updateEducation(input: $input, condition: $condition) {
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
export const deleteEducation = /* GraphQL */ `
  mutation DeleteEducation(
    $input: DeleteEducationInput!
    $condition: ModelEducationConditionInput
  ) {
    deleteEducation(input: $input, condition: $condition) {
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
export const createExperience = /* GraphQL */ `
  mutation CreateExperience(
    $input: CreateExperienceInput!
    $condition: ModelExperienceConditionInput
  ) {
    createExperience(input: $input, condition: $condition) {
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
export const updateExperience = /* GraphQL */ `
  mutation UpdateExperience(
    $input: UpdateExperienceInput!
    $condition: ModelExperienceConditionInput
  ) {
    updateExperience(input: $input, condition: $condition) {
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
export const deleteExperience = /* GraphQL */ `
  mutation DeleteExperience(
    $input: DeleteExperienceInput!
    $condition: ModelExperienceConditionInput
  ) {
    deleteExperience(input: $input, condition: $condition) {
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
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
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
export const createAddress = /* GraphQL */ `
  mutation CreateAddress(
    $input: CreateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    createAddress(input: $input, condition: $condition) {
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
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress(
    $input: UpdateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    updateAddress(input: $input, condition: $condition) {
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
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress(
    $input: DeleteAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    deleteAddress(input: $input, condition: $condition) {
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
export const createResume = /* GraphQL */ `
  mutation CreateResume(
    $input: CreateResumeInput!
    $condition: ModelResumeConditionInput
  ) {
    createResume(input: $input, condition: $condition) {
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
export const updateResume = /* GraphQL */ `
  mutation UpdateResume(
    $input: UpdateResumeInput!
    $condition: ModelResumeConditionInput
  ) {
    updateResume(input: $input, condition: $condition) {
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
export const deleteResume = /* GraphQL */ `
  mutation DeleteResume(
    $input: DeleteResumeInput!
    $condition: ModelResumeConditionInput
  ) {
    deleteResume(input: $input, condition: $condition) {
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
