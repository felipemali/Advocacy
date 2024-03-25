import "./index.scss";
import Card from "../../components/Card";
import comments from "../../helpers/comments.json";
const Comments = () => {
  return (
    <div className="comments">
      <div className="title-container">
        <h3>Opiniões dos Clientes...</h3>

        <div className="border-title-about"></div>
      </div>

      <div className="container-card">
        {comments.data.map(({ user, text, career }, index) => (
          <Card key={`card-${index}`} user={user} text={text} career={career} />
        ))}
      </div>
    </div>
  );
};
export default Comments;
