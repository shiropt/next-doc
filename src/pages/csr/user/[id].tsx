import Link from "next/link";
import { useFetch } from "../../../hooks/useFetch";
import { path } from "../../../utils/path";
import { Album, Post, User } from "../../../utils/type";
import { useRouter } from "next/router";

const CSR_User = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: posts } = useFetch<Post[]>(`${path.posts}?userId=${id}`);
  const { data: albums } = useFetch<Album[]>(`${path.albums}?userId=${id}`);
  if (!posts || !albums) return <p>loading...</p>;

  return (
    <div>
      投稿一覧
      <ul>
        {posts.map((post) => (
          <Link key={post.id} href={`post/${post.id}`}>
            <li>{post.title}</li>
          </Link>
        ))}
      </ul>
      アルバム一覧
      <ul>
        {albums.map((album) => (
          <Link key={album.id} href={`album/${album.id}`}>
            <li>{album.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default CSR_User;
