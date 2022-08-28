import {
  SLeptopFormWrapper,
  SLeptopForm,
  SLeptopFormContainer,
  SLeptopFormInputWrapper,
  SLeptopFormSelect,
  SLeptopFormRAM,
  SLeptopFormInfoWrapper,
  SLeptopFormRadioInputWrapper,
  SLeptopFormDateInputWrapper,
  SLeptopFormBackButton,
  SLeptopFormSaveButton,
  SLeptopFormFooter,
  SLeptopFormFooterLogo,
} from "./LeptopForm.styled";
import { PhotoUpload } from "../../components/PhotoUpload";
import { SInput } from "../../components/SInput";

export const LeptopForm = () => {
  return (
    <SLeptopFormWrapper>
      <SLeptopForm>
        <SLeptopFormContainer>
          <PhotoUpload onUpload={(file) => console.log(file)} />
          <SLeptopFormInputWrapper>
            <label htmlFor="leptop-name">ლეპტოპის სახელი</label>
            <SInput
              type="text"
              name="leptop_name"
              id="leptop-name"
              placeholder="HP"
            />
            <p>ლათინური ასოები, ციფრები, !@#$%^&*()_+=</p>
          </SLeptopFormInputWrapper>
          <SLeptopFormSelect>
            <option>ლეპტოპის ბრენდი</option>
          </SLeptopFormSelect>
          <SLeptopFormInfoWrapper>
            <SLeptopFormRAM>
              <option>16</option>
            </SLeptopFormRAM>
            <SLeptopFormInputWrapper>
              <label htmlFor="leptop-name">CPU-ს ბირთვი</label>
              <SInput
                type="number"
                name="leptopname"
                id="leptop-name"
                placeholder="HP"
              />
              <p>მხოლოდ ციფრები</p>
            </SLeptopFormInputWrapper>
            <SLeptopFormInputWrapper>
              <label htmlFor="leptop-name">CPU-ს ნაკადი</label>
              <SInput
                type="number"
                name="leptopname"
                id="leptop-name"
                placeholder="HP"
              />
              <p>მხოლოდ ციფრები</p>
            </SLeptopFormInputWrapper>
          </SLeptopFormInfoWrapper>
          <SLeptopFormInputWrapper>
            <label htmlFor="leptop-name">ლეპტოპის RAM (GB)</label>
            <SInput
              type="number"
              name="leptopname"
              id="leptop-name"
              placeholder="HP"
            />
            <p>მხოლოდ ციფრები</p>
          </SLeptopFormInputWrapper>
          <SLeptopFormInputWrapper>
            <label style={{ margin: "0 0 1rem 0" }}>მეხსიერების ტიპი</label>
            <SLeptopFormRadioInputWrapper>
              <div>
                <input type="radio" name="leptopname" id="leptop-name" />
                <label htmlFor="leptop-name">SSD</label>
              </div>
              <div>
                <input type="radio" name="leptopname" id="leptop-name" />
                <label htmlFor="leptop-name">HDD</label>
              </div>
            </SLeptopFormRadioInputWrapper>
          </SLeptopFormInputWrapper>
          <SLeptopFormDateInputWrapper>
            <div>
              <label htmlFor="leptop-name">შეძენის რიცხვი (არჩევითი)</label>
              <SInput type="date" name="leptopname" id="leptop-name" />
            </div>
            <div>
              <label htmlFor="leptop-name">ლეპტოპის ფასი</label>
              <SInput
                type="text"
                name="leptopname"
                id="leptop-name"
                placeholder="0000"
              />
              <p>მხოლოდ ციფრები</p>
            </div>
          </SLeptopFormDateInputWrapper>
          <SLeptopFormInputWrapper style={{ gridColumn: "1/3" }}>
            <label style={{ margin: "0 0 2rem 0" }}>ლეპტოპის მდგომარეობა</label>
            <SLeptopFormRadioInputWrapper>
              <div>
                <input type="radio" name="leptopname" id="leptop-name" />
                <label htmlFor="leptop-name">ახალი</label>
              </div>
              <div>
                <input type="radio" name="leptopname" id="leptop-name" />
                <label htmlFor="leptop-name">მეორადი</label>
              </div>
            </SLeptopFormRadioInputWrapper>
          </SLeptopFormInputWrapper>
          <SLeptopFormBackButton type="button">უკან</SLeptopFormBackButton>
          <SLeptopFormSaveButton type="submit">
            დამახსოვრება
          </SLeptopFormSaveButton>
        </SLeptopFormContainer>
      </SLeptopForm>
      <SLeptopFormFooter>
        <SLeptopFormFooterLogo />
      </SLeptopFormFooter>
    </SLeptopFormWrapper>
  );
};
