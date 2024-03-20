import "./index.scss";
import Card from "../../components/Card";
import comments from "../../helpers/comments.json";
const Comments = () => {
  return (
    <div className="comments">
      {comments.data.map(({ user, text, career }) => (
        <Card user={user} text={text} career={career} />
      ))}
    </div>
  );
};
export default Comments;
