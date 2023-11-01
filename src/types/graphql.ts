export type Posts = {
  nodes: Post[];
};

export type Post = {
  id: string;
  title: string;
  date: string;
};

export type PostDetail = {
  author: {
    node: {
      name: string;
    };
  };
  content: string;
  categories: {
    nodes: {
      name: string;
    }[];
  };
  date: string;
  id: string;
  title: string;
  tags: {
    nodes: {
      name: string;
    }[];
  };
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
};

export type Projects = {
  nodes: Project[];
};

export type Project = {
  id: string;
  title: string;
  empresas: {
    nodes: {
      name: string;
    }[];
  };
};

export type ProjectDetail = {
  empresas: {
    nodes: {
      name: string;
    }[];
  };
  date: string;
  id: string;
  title: string;
  fecha: string;
  link: string;
};
