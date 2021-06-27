import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Photo from "./Photo";

const PhotosList = () => {
  const { albumId } = useParams();
  let All_PHOTOS_URL = `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`;
  const { data: photos, isPending, error } = useFetch(All_PHOTOS_URL);

  return (
    <div className="max-w-full screen-height flex justify-center items-center p-8">
      {isPending && (
        <div className="text-3xl font-bold tracking-wider">Loading...</div>
      )}
      {error && (
        <div className="text-4xl font-medium tracking-wide text-red-600">
          {error}
        </div>
      )}
      {photos && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {photos.map((photo) => (
            <Photo title={photo.title} url={photo.url} key={photo.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PhotosList;
