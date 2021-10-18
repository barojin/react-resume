/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog {
    onCreateBlog {
      id
      name
      posts {
        items {
          id
          title
          blogID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog {
    onUpdateBlog {
      id
      name
      posts {
        items {
          id
          title
          blogID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog {
    onDeleteBlog {
      id
      name
      posts {
        items {
          id
          title
          blogID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      title
      blogID
      blog {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          postID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      title
      blogID
      blog {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          postID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      title
      blogID
      blog {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          postID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      postID
      post {
        id
        title
        blogID
        blog {
          id
          name
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      postID
      post {
        id
        title
        blogID
        blog {
          id
          name
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      postID
      post {
        id
        title
        blogID
        blog {
          id
          name
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const onCreateEducations = /* GraphQL */ `
  subscription OnCreateEducations {
    onCreateEducations {
      id
      school
      degree
      graduated_date
      courses
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateEducations = /* GraphQL */ `
  subscription OnUpdateEducations {
    onUpdateEducations {
      id
      school
      degree
      graduated_date
      courses
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteEducations = /* GraphQL */ `
  subscription OnDeleteEducations {
    onDeleteEducations {
      id
      school
      degree
      graduated_date
      courses
      createdAt
      updatedAt
    }
  }
`;
export const onCreateExperiences = /* GraphQL */ `
  subscription OnCreateExperiences {
    onCreateExperiences {
      id
      company
      job_title
      years
      address {
        id
        street
        city
        state
        zip
        createdAt
        updatedAt
      }
      descriptions
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateExperiences = /* GraphQL */ `
  subscription OnUpdateExperiences {
    onUpdateExperiences {
      id
      company
      job_title
      years
      address {
        id
        street
        city
        state
        zip
        createdAt
        updatedAt
      }
      descriptions
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteExperiences = /* GraphQL */ `
  subscription OnDeleteExperiences {
    onDeleteExperiences {
      id
      company
      job_title
      years
      address {
        id
        street
        city
        state
        zip
        createdAt
        updatedAt
      }
      descriptions
      createdAt
      updatedAt
    }
  }
`;
export const onCreateWorks = /* GraphQL */ `
  subscription OnCreateWorks {
    onCreateWorks {
      id
      title
      descriptions
      years
      github
      image
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateWorks = /* GraphQL */ `
  subscription OnUpdateWorks {
    onUpdateWorks {
      id
      title
      descriptions
      years
      github
      image
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteWorks = /* GraphQL */ `
  subscription OnDeleteWorks {
    onDeleteWorks {
      id
      title
      descriptions
      years
      github
      image
      createdAt
      updatedAt
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
      zip
      createdAt
      updatedAt
    }
  }
`;
