const Card = (props) => {
    return (
      <>
        <div className="imgs">
          <img src={props.src} alt={props.alt}></img>
          <h4>{props.title}</h4>
          <h6>{props.description}</h6>
        </div>
      </>
    );
  };
  export default Card;
  