import Wrapper from "../assets/wrappers/StatItem";

const StatItem = ({ color, title, count, icon, bcg }) => {
    return (
      <Wrapper color={color} bcg={bcg}>
        <header>
          <span className="count">{count}</span>
          <span className="icon">{count}</span>
            </header>
            <h5 className="title">{title}</h5>
      </Wrapper>
    );
};

export default StatItem;
