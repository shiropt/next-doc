import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { Tooltip } from "../../../components/popperTooltip";
import { path } from "../../../utils/path";
import { Album, Post } from "../../../utils/type";

const SSG_User = (props: { posts: Post[]; albums: Album[] }) => {
  return (
    <div>
      投稿一覧
      <ul>
        {props.posts.map((post) => (
          <Tooltip key={post.id}>
            <Link href={`post/${post.id}`}>
              <li>{post.title}</li>
            </Link>
          </Tooltip>
        ))}
      </ul>
      アルバム一覧
      <ul>
        {props.albums.map((album) => (
          <Tooltip key={album.id}>
            <Link key={album.id} href={`album/${album.id}`}>
              <li>{album.title}</li>
            </Link>
          </Tooltip>
        ))}
      </ul>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(path.users);
  const data = await res.json();
  const paths = data.map((user: any) => {
    return {
      params: { id: user.id.toString() },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const responseByPosts = await fetch(`${path.posts}?userId=${id}`);
  const responseByAlbums = await fetch(`${path.albums}?userId=${id}`);
  const posts = await responseByPosts.json();
  const albums = await responseByAlbums.json();

  return {
    props: { posts, albums },
  };
};

export default SSG_User;
