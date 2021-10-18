/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
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
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
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
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createEducations = /* GraphQL */ `
  mutation CreateEducations(
    $input: CreateEducationsInput!
    $condition: ModelEducationsConditionInput
  ) {
    createEducations(input: $input, condition: $condition) {
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
export const updateEducations = /* GraphQL */ `
  mutation UpdateEducations(
    $input: UpdateEducationsInput!
    $condition: ModelEducationsConditionInput
  ) {
    updateEducations(input: $input, condition: $condition) {
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
export const deleteEducations = /* GraphQL */ `
  mutation DeleteEducations(
    $input: DeleteEducationsInput!
    $condition: ModelEducationsConditionInput
  ) {
    deleteEducations(input: $input, condition: $condition) {
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
export const createExperiences = /* GraphQL */ `
  mutation CreateExperiences(
    $input: CreateExperiencesInput!
    $condition: ModelExperiencesConditionInput
  ) {
    createExperiences(input: $input, condition: $condition) {
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
export const updateExperiences = /* GraphQL */ `
  mutation UpdateExperiences(
    $input: UpdateExperiencesInput!
    $condition: ModelExperiencesConditionInput
  ) {
    updateExperiences(input: $input, condition: $condition) {
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
export const deleteExperiences = /* GraphQL */ `
  mutation DeleteExperiences(
    $input: DeleteExperiencesInput!
    $condition: ModelExperiencesConditionInput
  ) {
    deleteExperiences(input: $input, condition: $condition) {
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
export const createWorks = /* GraphQL */ `
  mutation CreateWorks(
    $input: CreateWorksInput!
    $condition: ModelWorksConditionInput
  ) {
    createWorks(input: $input, condition: $condition) {
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
export const updateWorks = /* GraphQL */ `
  mutation UpdateWorks(
    $input: UpdateWorksInput!
    $condition: ModelWorksConditionInput
  ) {
    updateWorks(input: $input, condition: $condition) {
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
export const deleteWorks = /* GraphQL */ `
  mutation DeleteWorks(
    $input: DeleteWorksInput!
    $condition: ModelWorksConditionInput
  ) {
    deleteWorks(input: $input, condition: $condition) {
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
      zip
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
      zip
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
      zip
      createdAt
      updatedAt
    }
  }
`;
