/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { path } from "../../../../utils/path";
import { Photo } from "../../../../utils/type";
import { useRouter } from "next/router";
import { useFetch } from "../../../../hooks/useFetch";

const CSR_Photo = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useFetch<Photo[]>(`${path.photos}?albumId=${id}`);
  if (!data) return <p>loading...</p>;
  return (
    <div>
      写真一覧
      <ul>
        {data.map((photo) => (
          <Link key={photo.id} href={`album/${photo.id}`}>
            <li>
              <p>{photo.title}</p>
              <img src={photo.url} alt="" width={150} height={150} />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default CSR_Photo;
