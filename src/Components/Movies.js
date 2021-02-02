const Movies = (props) => {
  return (
    <div className="moviesList">
      {props.pictures.map((elem) => {
        return <img src={elem} alt="" />;
      })}
    </div>
  );
};

export default Movies;
