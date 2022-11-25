import Link from "next/link";
import { useFetch } from "../../../hooks/useFetch";
import { path } from "../../../utils/path";
import { Post, User } from "../../../utils/type";
import { useRouter } from "next/router";

const CSR_User = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useFetch<Post[]>(`${path.posts}?userId=${id}`);
  if (!data) return <p>loading...</p>;

  return (
    <div>
      投稿一覧
      <ul>
        {data.map((post) => (
          <Link key={post.id} href={`post/${post.id}`}>
            <li>{post.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default CSR_User;
