import "./ReleaseCard.css";

const ReleaseCard = ({ project }) => {
  const { imgSrc, title, description, role, githubLink, viewLink } =
    project;

  return (
    <div className="cardd">
      <div className="img__container">
        <img src={imgSrc} alt={title} />
        <h3 className="section__subtitle project__title">{title}</h3>
        <span className="project__role-text">{role}</span>
      </div>
      <div className="content__container">
        <p>{description}</p>
        
        
      </div>
    </div>
  );
};

export default ReleaseCard;
