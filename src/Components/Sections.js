import Category from "./Category";
import Movies from "./Movies";
import data from "../data.json";

const Sections = () => {
  return (
    <div className="sections">
      {data.map((elem, index) => {
        return (
          <>
            <Category key={index} category={elem.category} />
            <Movies
              images={elem.images.map((elem) => {
                return <img src={elem} alt="" />;
              })}
            />
          </>
        );
      })}
    </div>
  );
};

export default Sections;
