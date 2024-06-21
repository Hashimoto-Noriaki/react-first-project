import { MouseEvent } from "react";

export const Breadcrumb = () => {
  const items = ["Home", "Library", "Date"];

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
      console.log(event);
  }

  return (
    <>
      <p>パンくずリスト</p>
      {items.length === 0 ? (
        <p>itemがありません。</p>
      ) : (
        <p>itemが{items.length}あります</p>
      )}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          {items.map((item) => (
            <li key={item} className="breadcrumb-item">
              <a href="#" onClick={handleClick}>
                {item}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};
