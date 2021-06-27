import { Link } from "react-router-dom";

const Album = (props) => {
  const { albumNumber, totalPhotos } = props;
  return (
    <Link to={`/album/${albumNumber}/photos`}>
      <div className="bg-bgray-800 px-6 py-3 rounded shadow-2xl border-l-8 border-indigo-800 cursor-pointer transform hover:scale-110 transition ease-in-out duration-300">
        <h1 className="text-2xl font-semibold tracking-wide">
          Album {albumNumber}
        </h1>
        <p className="text-sm text-bgray-400">
          {totalPhotos.length} Photos included
        </p>
      </div>
    </Link>
  );
};

export default Album;
