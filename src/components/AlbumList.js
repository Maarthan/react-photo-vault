import Album from "./Album";
import useFetch from "./useFetch";

const AlbumList = () => {
  const ALL_PHOTOS_URL = "https://jsonplaceholder.typicode.com/photos";
  const { data: albums, isPending, error } = useFetch(ALL_PHOTOS_URL);

  const groupBy = (array, key) => {
    return array.reduce((result, currentValue) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      return result;
    }, {});
  };

  const summaryData = albums && Object.entries(groupBy(albums, "albumId"));

  return (
    <div className="w-full screen-height primary-text flex flex-col justify-center items-center py-12">
      {isPending && (
        <div className="text-3xl font-bold tracking-wider">Loading...</div>
      )}
      {error && (
        <div className="text-4xl font-medium tracking-wide text-red-600">
          {error}
        </div>
      )}
      {summaryData && (
        <div className="flex flex-col justify-center items-center w-full h-full">
          <h1 className="text-3xl font-bold tracking-wider uppercase">
            <span className="primary-background px-3 py-1 rounded-sm shadow">
              All Albums
            </span>
          </h1>
          <div className="grid sm:space-y-0 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-12 md:grid-cols-3 md:gap-12 lg:grid-cols-4 xl:grid-cols-5 mt-8 space-y-5 ">
            {summaryData.map(([key, value]) => (
              <Album albumNumber={key} totalPhotos={value} key={key} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AlbumList;
