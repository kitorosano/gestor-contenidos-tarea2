import {
  type PostDetail,
  type Posts,
  type ProjectDetail,
  type Projects
} from '../types/graphql';

export const getPosts = async () => {
  const res = await fetch('http://localhost/wordpress/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query getPosts {
          posts {
            nodes {
              id
              date
              title
            }
          }
        }
      `
    })
  });

  const json = await res.json();
  const { posts } = json.data;

  return posts as Posts;
};

export const getPost = async (id: string) => {
  const res = await fetch('http://localhost/wordpress/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query getPost($id: ID!) {
          post(id: $id) {
            author {
              node {
                name
              }
            }
            content
            categories {
              nodes {
                name
              }
            }
            date
            id
            title
            tags {
              nodes {
                name
              }
            }
            featuredImage {
              node {
                sourceUrl(size: MEDIUM)
              }
            }
          }
        }
      `,
      variables: {
        id
      }
    })
  });

  const json = await res.json();
  const { post } = json.data;

  return post as PostDetail;
};

export const getProjects = async () => {
  const res = await fetch('http://localhost/wordpress/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query getProjects {
          proyectos {
            nodes {
              id
              title
              empresas {
                nodes {
                  name
                }
              }
            }
          }
        }
      `
    })
  });

  const json = await res.json();
  const { proyectos } = json.data;

  return proyectos as Projects;
};

export const getProject = async (id: string) => {
  const res = await fetch('http://localhost/wordpress/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query getProject($id: ID!) {
          proyecto(id: $id) {
            id
            title
            empresas {
              nodes {
                name
              }
            }
            date
            fecha
            link
          }
        }
      `,
      variables: {
        id
      }
    })
  });

  const json = await res.json();
  const { proyecto } = json.data;

  return proyecto as ProjectDetail;
};
