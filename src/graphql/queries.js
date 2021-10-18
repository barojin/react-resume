/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
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
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        post {
          id
          title
          blogID
          createdAt
          updatedAt
        }
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEducations = /* GraphQL */ `
  query GetEducations($id: ID!) {
    getEducations(id: $id) {
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
export const listEducationss = /* GraphQL */ `
  query ListEducationss(
    $filter: ModelEducationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEducationss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        school
        degree
        graduated_date
        courses
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getExperiences = /* GraphQL */ `
  query GetExperiences($id: ID!) {
    getExperiences(id: $id) {
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
export const listExperiencess = /* GraphQL */ `
  query ListExperiencess(
    $filter: ModelExperiencesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExperiencess(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getWorks = /* GraphQL */ `
  query GetWorks($id: ID!) {
    getWorks(id: $id) {
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
export const listWorkss = /* GraphQL */ `
  query ListWorkss(
    $filter: ModelWorksFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        descriptions
        years
        github
        image
        createdAt
        updatedAt
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
        zip
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
