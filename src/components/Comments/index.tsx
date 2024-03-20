import "./index.scss";
import Card from "../../components/Card";
import comments from "../../helpers/comments.json";
const Comments = () => {
  return (
    <div className="comments">
      <div className="title-container">
        <h4>O que os clientes falam...</h4>
      </div>

      <div className="container-card">
        {comments.data.map(({ user, text, career }) => (
          <Card user={user} text={text} career={career} />
        ))}
      </div>
    </div>
  );
};
export default Comments;
