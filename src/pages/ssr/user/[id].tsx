import Link from "next/link";
import { path } from "../../../utils/path";
import { Album, Post } from "../../../utils/type";
import { GetServerSideProps } from "next";
import { Tooltip } from "../../../components/popperTooltip";

const SSR_User = (props: { posts: Post[]; albums: Album[] }) => {
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
            <Link href={`album/${album.id}`}>
              <li>{album.title}</li>
            </Link>
          </Tooltip>
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
