import gql from "graphql-tag";
import { FC, useState } from "react";
import { useGQLMutation, useGQLQuery } from "./react-gql-query/src";

const CREATE_POST_MUTATION = gql`
  mutation($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      body
    }
  }
`;

interface Post {
  createPost: {
    id: number;
    title: string;
    body: string;
  };
}
interface PostMutate {
  input: {
    title: string;
    body: string;
  };
}

interface PostInput {
  title: string;
  body: string;
}

const CreatePost: FC = () => {
  const { data, mutate } = useGQLMutation<Post, any, PostMutate>(
    {
      mutation: CREATE_POST_MUTATION,
    },
    { onSuccess: () => console.log("post create is successful") }
  );
  const [post, setPost] = useState<PostInput>({ title: "", body: "" });

  return (
    <div>
      <input
        type="text"
        onChange={({ target }) =>
          setPost((initial) => {
            return { ...initial, title: target.value };
          })
        }
      />
      <input
        type="text"
        onChange={({ target }) =>
          setPost((initial) => {
            return { ...initial, body: target.value };
          })
        }
      />

      <button onClick={() => mutate({ input: { ...post } })}>
        Create Post
      </button>
      <div>{data?.createPost.title}</div>
      <div>{data?.createPost.body}</div>
    </div>
  );
};

interface Data {
  user: {
    id: number;
    username: string;
    email: string;
    adress: any;
  };
}

interface QueryVariables {
  id: number;
}

const GET_USER_QUERY = gql`
  query($id: ID!) {
    user(id: $id) {
      id
      username
      email
      address {
        geo {
          lat
          lng
        }
      }
    }
  }
`;
function App() {
  const { data, isLoading } = useGQLQuery<Data, any, QueryVariables>(
    ["user", 1],
    { query: GET_USER_QUERY, variables: { id: 1 } },
    {
      onSuccess: () => console.log("Fetch is successful!"),
    }
  );
  if (isLoading) return <div>Loading ...</div>;

  return (
    <div>
      <h1>{data?.user.id}</h1>
      <h2>{data?.user.username}</h2>
      <h3>{data?.user.email}</h3>
      <CreatePost />
    </div>
  );
}

export default App;
