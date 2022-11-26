/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { path } from "../../../../utils/path";
import { Photo } from "../../../../utils/type";
import { GetServerSideProps } from "next";

const SSR_Photo = (props: { data: Photo[] }) => {
  return (
    <div>
      写真一覧
      <ul>
        {props.data.map((photo) => (
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
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`${path.photos}?albumId=${id}`);
  const data = await res.json();

  return {
    props: { data },
  };
};
export default SSR_Photo;
