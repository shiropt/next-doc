import Link from "next/link";
import { useFetch } from "../../../hooks/useFetch";
import { path } from "../../../utils/path";
import { Album, Post, User } from "../../../utils/type";
import { useRouter } from "next/router";
import { Tooltip } from "../../../components/popperTooltip";

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
          <Tooltip key={post.id}>
            <Link href={`post/${post.id}`}>
              <li>{post.title}</li>
            </Link>
          </Tooltip>
        ))}
      </ul>
      アルバム一覧
      <ul>
        {albums.map((album) => (
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

export default CSR_User;
