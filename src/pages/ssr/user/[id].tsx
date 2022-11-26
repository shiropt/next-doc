import Link from "next/link";
import { path } from "../../../utils/path";
import { Album, Post } from "../../../utils/type";
import { GetServerSideProps } from "next";

const SSR_User = (props: { posts: Post[]; albums: Album[] }) => {
  return (
    <div>
      投稿一覧
      <ul>
        {props.posts.map((post) => (
          <Link key={post.id} href={`post/${post.id}`}>
            <li>{post.title}</li>
          </Link>
        ))}
      </ul>
      アルバム一覧
      <ul>
        {props.albums.map((album) => (
          <Link key={album.id} href={`album/${album.id}`}>
            <li>{album.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const responseByPosts = await fetch(`${path.posts}?userId=${id}`);
  const responseByAlbums = await fetch(`${path.albums}?userId=${id}`);
  const posts = await responseByPosts.json();
  const albums = await responseByAlbums.json();

  return {
    props: { posts, albums },
  };
};
export default SSR_User;
