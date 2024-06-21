import { useState } from "react";
import styles from "./Breadcrumb.module.css";
import styled from "styled-components";

type Props = {
  items:string[];
};

type NoticeParagraphProps = {
  isBlank: boolean;
};

const NoticeParagraph = styled.p<NoticeParagraphProps>`
  font-weight: 100;
  color: ${(props) => (props.isBlank ? "red" : "gray")};
`;

export const Breadcrumb = ({items}: Props) => {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <>
      <p className={styles.listTitle}>パンくずリスト</p>
      {items.length === 0 ? (
         <NoticeParagraph isBlank>itemがありません。</NoticeParagraph>
      ) : (
        <NoticeParagraph isBlank={false}>
          itemが{items.length}あります
        </NoticeParagraph>
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

