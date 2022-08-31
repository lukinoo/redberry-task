import { useFetchList } from "./hooks/useFetchList";
import {
  SRecordHeaderBackArrow,
  SRecordHeaderBackBtn,
  SRecordHeaderTitle,
  SRecordListContainer,
  SRecordListEachItem,
  SRecordListEachItemInfoWrapp,
  SRecordListHeader,
  SRecordListItems,
  SRecordListWrapper,
} from "./RecordList.styled";

export const RecordLists = () => {
  // const [data] = useFetchList();

  return (
    <SRecordListContainer>
      <SRecordListHeader>
        <SRecordHeaderBackBtn to="/">
          <SRecordHeaderBackArrow />
        </SRecordHeaderBackBtn>
        <SRecordHeaderTitle>ᲩᲐᲜᲐᲬᲔᲠᲔᲑᲘᲡ ᲡᲘᲐ</SRecordHeaderTitle>
      </SRecordListHeader>
      <SRecordListWrapper>
        <SRecordListItems>
          <SRecordListEachItem>
            <img src="assets/img/item.png" alt="" />
            <SRecordListEachItemInfoWrapp>
              <h3>ირინე ჩანქსელიანი</h3>
              <h5>Pentium II</h5>
              <p>მეტის ნახვა</p>
            </SRecordListEachItemInfoWrapp>
          </SRecordListEachItem>
        </SRecordListItems>
        <SRecordListItems>
          <SRecordListEachItem>
            <img src="assets/img/item.png" alt="" />
            <SRecordListEachItemInfoWrapp>
              <h3>ირინე ჩანქსელიანი</h3>
              <h5>Pentium II</h5>
              <p>მეტის ნახვა</p>
            </SRecordListEachItemInfoWrapp>
          </SRecordListEachItem>
        </SRecordListItems>
        <SRecordListItems>
          <SRecordListEachItem>
            <img src="assets/img/item.png" alt="" />
            <SRecordListEachItemInfoWrapp>
              <h3>ირინე ჩანქსელიანი</h3>
              <h5>Pentium II</h5>
              <p>მეტის ნახვა</p>
            </SRecordListEachItemInfoWrapp>
          </SRecordListEachItem>
        </SRecordListItems>
        <SRecordListItems>
          <SRecordListEachItem>
            <img src="assets/img/item.png" alt="" />
            <SRecordListEachItemInfoWrapp>
              <h3>ირინე ჩანქსელიანი</h3>
              <h5>Pentium II</h5>
              <p>მეტის ნახვა</p>
            </SRecordListEachItemInfoWrapp>
          </SRecordListEachItem>
        </SRecordListItems>
        <SRecordListItems>
          <SRecordListEachItem>
            <img src="assets/img/item.png" alt="" />
            <SRecordListEachItemInfoWrapp>
              <h3>ირინე ჩანქსელიანი</h3>
              <h5>Pentium II</h5>
              <p>მეტის ნახვა</p>
            </SRecordListEachItemInfoWrapp>
          </SRecordListEachItem>
        </SRecordListItems>
        <SRecordListItems>
          <SRecordListEachItem>
            <img src="assets/img/item.png" alt="" />
            <SRecordListEachItemInfoWrapp>
              <h3>ირინე ჩანქსელიანი</h3>
              <h5>Pentium II</h5>
              <p>მეტის ნახვა</p>
            </SRecordListEachItemInfoWrapp>
          </SRecordListEachItem>
        </SRecordListItems>
        <SRecordListItems>
          <SRecordListEachItem>
            <img src="assets/img/item.png" alt="" />
            <SRecordListEachItemInfoWrapp>
              <h3>ირინე ჩანქსელიანი</h3>
              <h5>Pentium II</h5>
              <p>მეტის ნახვა</p>
            </SRecordListEachItemInfoWrapp>
          </SRecordListEachItem>
        </SRecordListItems>
      </SRecordListWrapper>
    </SRecordListContainer>
  );
};
