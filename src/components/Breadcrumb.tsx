import { useState } from "react"

type Props = {
  items:string[];
};

export const Breadcrumb = ({items}: Props) => {
  // const { items } = props
  // const items = ["Home", "Library", "Date"];
  const [selectedValue, setSelectedValue] = useState("");

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
               {item === selectedValue ? (
                <>{item}</>
              ) : (
              <a href="#" onClick={() => setSelectedValue(item)}>
                {item}
              </a>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

