/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { path } from "../../../../utils/path";
import { Photo } from "../../../../utils/type";
import { GetStaticPaths, GetStaticProps } from "next";

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

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(path.albums);
  const data = await res.json();
  const paths = data.map((photo: any) => {
    return {
      params: { id: photo.id.toString() },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const res = await fetch(`${path.photos}?albumId=${id}`);
  const data = await res.json();

  return {
    props: { data },
  };
};
export default SSR_Photo;
