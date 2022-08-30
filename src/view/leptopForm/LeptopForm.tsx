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
  SLeptopFormLariSpan,
  SLeptopFormLariIcon,
} from "./LeptopForm.styled";
import { PhotoUpload } from "../../components/PhotoUpload";
import { SInput } from "../../components/SInput";
import { EmployeeInfoRouteEnum } from "../employeeInfo/EmployeeInfo";
import { useFetch } from "./hooks/useFetch";

interface Props {
  setFormRoute: React.Dispatch<React.SetStateAction<EmployeeInfoRouteEnum>>;
}

export const LeptopForm: React.FC<Props> = ({ setFormRoute }) => {
  const [data] = useFetch();

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
          <SLeptopFormSelect name="laptop_brand_id">
            <option value={""} disabled>
              ლეპტოპის ბრენდი
            </option>
            {data.brands.map((brand) => (
              <option value={brand.name} key={brand.id}>
                {brand.name}
              </option>
            ))}
          </SLeptopFormSelect>
          <SLeptopFormInfoWrapper>
            <SLeptopFormRAM name="laptop_cpu">
              <option value={""} disabled>
                CPU
              </option>
              {data.cpus.map((cpu) => (
                <option key={cpu.id} value={cpu.name}>
                  {cpu.name}
                </option>
              ))}
            </SLeptopFormRAM>
            <SLeptopFormInputWrapper>
              <label htmlFor="leptop-name">CPU-ს ბირთვი</label>
              <SInput
                type="number"
                name="laptop_cpu_cores"
                id="leptop-name"
                placeholder="14"
              />
              <p>მხოლოდ ციფრები</p>
            </SLeptopFormInputWrapper>
            <SLeptopFormInputWrapper>
              <label htmlFor="leptop-name">CPU-ს ნაკადი</label>
              <SInput
                type="number"
                name="laptop_cpu_threads"
                id="leptop-name"
                placeholder="365"
              />
              <p>მხოლოდ ციფრები</p>
            </SLeptopFormInputWrapper>
          </SLeptopFormInfoWrapper>
          <SLeptopFormInputWrapper>
            <label htmlFor="leptop-name">ლეპტოპის RAM (GB)</label>
            <SInput
              type="number"
              name="laptop_ram"
              id="leptop-name"
              placeholder="HP"
            />
            <p>მხოლოდ ციფრები</p>
          </SLeptopFormInputWrapper>
          <SLeptopFormInputWrapper>
            <label style={{ margin: "0 0 1rem 0" }}>მეხსიერების ტიპი</label>
            <SLeptopFormRadioInputWrapper>
              <div>
                <input
                  type="radio"
                  name="laptop_hard_drive_type"
                  id="leptop-name"
                />
                <label htmlFor="leptop-name">SSD</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="laptop_hard_drive_type"
                  id="leptop-name"
                />
                <label htmlFor="leptop-name">HDD</label>
              </div>
            </SLeptopFormRadioInputWrapper>
          </SLeptopFormInputWrapper>
          <SLeptopFormDateInputWrapper>
            <div>
              <label htmlFor="leptop-name">შეძენის რიცხვი (არჩევითი)</label>
              <SInput
                type="date"
                name="laptop_purchase_date"
                id="leptop-name"
              />
              <p>&nbsp;</p>
            </div>
            <div>
              <label htmlFor="leptop-name">ლეპტოპის ფასი</label>
              <div style={{ display: "flex", alignItems: "center" }}>
                <SInput
                  type="text"
                  name="laptop_price"
                  id="leptop-name"
                  placeholder="0000"
                  style={{
                    borderRight: "none",
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    display: "inline-block",
                  }}
                />
                <SLeptopFormLariSpan>
                  <SLeptopFormLariIcon />
                </SLeptopFormLariSpan>
              </div>
              <p>მხოლოდ ციფრები</p>
            </div>
          </SLeptopFormDateInputWrapper>
          <SLeptopFormInputWrapper style={{ gridColumn: "1/3" }}>
            <label style={{ margin: "0 0 2rem 0" }}>ლეპტოპის მდგომარეობა</label>
            <SLeptopFormRadioInputWrapper>
              <div>
                <input type="radio" name="laptop_stats" id="leptop-name" />
                <label htmlFor="leptop-name">ახალი</label>
              </div>
              <div>
                <input type="radio" name="laptop_stats" id="leptop-name" />
                <label htmlFor="leptop-name">მეორადი</label>
              </div>
            </SLeptopFormRadioInputWrapper>
          </SLeptopFormInputWrapper>
          <SLeptopFormBackButton
            onClick={() => setFormRoute(EmployeeInfoRouteEnum.EMPLOYEE_ROUTE)}
            type="button"
          >
            უკან
          </SLeptopFormBackButton>
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
