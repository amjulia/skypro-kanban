import styled from "styled-components";
import { TopicStyles } from "../../lib/topic";


export const CategoriesTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
   p {
    font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
  
  };
  color: ${({ $topicColor }) => TopicStyles[$topicColor]?.color || "#06b16e"};
  background-color: ${({ $topicColor }) =>
    TopicStyles[$topicColor]?.backgroundColor || "#b4fdd1"};`

export const StatusThemes = styled.div`
 display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  input[type=radio] {
	display: none;
}
 `

export const StatusTheme = styled.label`
 border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  `