/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSkill = /* GraphQL */ `
  subscription OnCreateSkill {
    onCreateSkill {
      id
      name
      level
      resumeID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSkill = /* GraphQL */ `
  subscription OnUpdateSkill {
    onUpdateSkill {
      id
      name
      level
      resumeID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSkill = /* GraphQL */ `
  subscription OnDeleteSkill {
    onDeleteSkill {
      id
      name
      level
      resumeID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateEducation = /* GraphQL */ `
  subscription OnCreateEducation {
    onCreateEducation {
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
export const onUpdateEducation = /* GraphQL */ `
  subscription OnUpdateEducation {
    onUpdateEducation {
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
export const onDeleteEducation = /* GraphQL */ `
  subscription OnDeleteEducation {
    onDeleteEducation {
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
export const onCreateExperience = /* GraphQL */ `
  subscription OnCreateExperience {
    onCreateExperience {
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
export const onUpdateExperience = /* GraphQL */ `
  subscription OnUpdateExperience {
    onUpdateExperience {
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
export const onDeleteExperience = /* GraphQL */ `
  subscription OnDeleteExperience {
    onDeleteExperience {
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
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject {
    onCreateProject {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject {
    onUpdateProject {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject {
    onDeleteProject {
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
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress {
    onCreateAddress {
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
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress {
    onUpdateAddress {
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
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress {
    onDeleteAddress {
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
export const onCreateResume = /* GraphQL */ `
  subscription OnCreateResume {
    onCreateResume {
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
export const onUpdateResume = /* GraphQL */ `
  subscription OnUpdateResume {
    onUpdateResume {
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
export const onDeleteResume = /* GraphQL */ `
  subscription OnDeleteResume {
    onDeleteResume {
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
