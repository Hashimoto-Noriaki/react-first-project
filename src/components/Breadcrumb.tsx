import { useState } from "react";
import styles from "./Breadcrumb.module.css";

type Props = {
  items:string[];
};

export const Breadcrumb = ({items}: Props) => {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <>
      <p className={styles.listTitle}>パンくずリスト</p>
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

