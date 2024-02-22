import Link from "next/link";

export const DashboardArticle = (
  { ArticlePicture, ArticleName, ArticleChat, TimeAgo },
  { props }
) => {
  return (
    <article className="all-messages-article-1">
      <Link href={"/chat"}>
        <div className="all-messages-article">
          <picture className="dasboard-article-profile-picture">
            <img src={ArticlePicture}></img>
          </picture>

          <div className="dasboard-article-info-container">
            <div>
              <h3>{ArticleName}</h3>
              <p>{ArticleChat}</p>
            </div>
          </div>

          <div className="dashboard-article-container-time-ago">
            <time>{TimeAgo}</time>
          </div>
        </div>
      </Link>
    </article>
  );
};
