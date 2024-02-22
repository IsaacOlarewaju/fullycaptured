export const DashboardArticleInfo = ({ ArticleName, ArticleChat }) => {
  return (
    <div className="dasboard-article-info-container">
      <div>
        <h3>{ArticleName}</h3>
        <p>{ArticleChat}</p>
      </div>
    </div>
  );
};
