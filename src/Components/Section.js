import Category from "./Category";
import Movies from "./Movies";

const Section = (props) => {
  return (
    <div className="sections">
      <>
        {/* categorie={} est la props que j'envoi dans Category.js dont j'ai récupérer la valeur de category */}
        {/* {data.category} est mon data.json de App.js dont je récupère la clé 'category' */}
        <Category categorie={props.data.category} />
        <Movies pictures={props.data.images} />
      </>
    </div>
  );
};

export default Section;
