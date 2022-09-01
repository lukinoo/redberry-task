import { useState } from "react";
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
  SLeptopFormInputLabel,
  SLeptopFormUploadAgainButton,
  SLeptopFormImageWarnWrapper,
} from "./LeptopForm.styled";
import { PhotoUpload } from "../../components/PhotoUpload";
import { useValidation } from "./hooks/useValidation";
import { SInput } from "../../components/SInput";
import { calculateFileSize } from "./utils/calculateFileSize";
import { LeptopTypes } from "../../types/Form.types";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { EmployeeInfoRouteEnum } from "../employeeInfo/EmployeeInfo";
import { useFetch } from "./hooks/useFetch";
import { useLaptopForm } from "./hooks/useLaptopForm";

interface Props {
  setFormRoute: React.Dispatch<React.SetStateAction<EmployeeInfoRouteEnum>>;
  setupRequest: (data: LeptopTypes) => void;
}

export const LeptopForm: React.FC<Props> = ({ setFormRoute, setupRequest }) => {
  const [data] = useFetch();

  // localstorage values
  const [_, getLocalLeptop] = useLocalStorage();

  // input handler
  const [values, handleChange, fileUploadHandler] =
    useLaptopForm(getLocalLeptop);
  const [validation] = useValidation(values);

  const [isError, setIsError] = useState<string | undefined>(undefined);
  const formatFile = new FormData();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    let validationError;

    if (!values.laptop_image.size) {
      setIsError("laptop_image");
      return;
    }

    if (validation.error) {
      validationError = String(validation.error)
        .split(" ")[1]
        .replace(/"/g, "");
    } else {
      validationError = undefined;
    }

    setIsError(validationError);

    if (validationError === undefined) {
      formatFile.append("file", values.laptop_image);

      const findBrandId = data.brands.find(
        (e) => e.name === (values.laptop_brand_id as any)
      );

      const prepObject: LeptopTypes = {
        laptop_cpu: values.laptop_cpu,
        laptop_cpu_cores: values.laptop_cpu_cores,
        laptop_hard_drive_type: values.laptop_hard_drive_type,
        laptop_name: values.laptop_name,
        laptop_state: values.laptop_state === "ახალი" ? "new" : "used",
        laptop_cpu_threads: values.laptop_cpu_threads,
        laptop_price: values.laptop_price,
        laptop_purchase_date: values.laptop_purchase_date,
        laptop_ram: values.laptop_ram,
        laptop_image: values.laptop_image,
        laptop_brand_id: Number(findBrandId!.id),
      };

      setupRequest(prepObject);
    }
  };

  const r = new FileReader();

  // console.log(values.lapt)
  // static width in css
  return (
    <SLeptopFormWrapper>
      <SLeptopForm onSubmit={submitHandler}>
        <SLeptopFormContainer>
          <PhotoUpload
            isError={isError === "laptop_image" || false}
            onUpload={(file) => {
              setIsError(undefined);
              fileUploadHandler(file);
            }}
            blobSourcePath={
              values.laptop_image.size
                ? URL.createObjectURL(values.laptop_image)
                : undefined
            }
          />
          {values.laptop_image.size && (
            <>
              <SLeptopFormImageWarnWrapper>
                <img src="assets/svg/complete.svg" alt="" />
                <p>{values.laptop_image.name}</p>
                <span>{calculateFileSize(values.laptop_image)}MB</span>
              </SLeptopFormImageWarnWrapper>
              <SLeptopFormUploadAgainButton type="button">
                <input
                  type="file"
                  accept="image/png, image/jpg"
                  onChange={(file) => fileUploadHandler(file.target.files![0]!)}
                />
                თავიდან ატვირთე
              </SLeptopFormUploadAgainButton>
            </>
          )}
          <SLeptopFormInputWrapper>
            <label htmlFor="leptop-name">ლეპტოპის სახელი</label>
            <SInput
              isError={isError === "laptop_name" || false}
              type="text"
              name="laptop_name"
              id="leptop-name"
              onChange={handleChange}
              value={values.laptop_name}
              placeholder="HP"
            />
            <p>ლათინური ასოები, ციფრები, !@#$%^&*()_+=</p>
          </SLeptopFormInputWrapper>
          <SLeptopFormSelect
            isError={isError === "laptop_brand_id" || false}
            onChange={handleChange}
            name="laptop_brand_id"
            value={values.laptop_brand_id}
          >
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
            <SLeptopFormRAM
              isError={isError === "laptop_cpu" || false}
              onChange={handleChange}
              name="laptop_cpu"
              value={values.laptop_cpu}
            >
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
              <label htmlFor="laptop_cpu_cores">CPU-ს ბირთვი</label>
              <SInput
                isError={isError === "laptop_cpu_cores" || false}
                type="number"
                name="laptop_cpu_cores"
                id="laptop_cpu_cores"
                onChange={handleChange}
                value={values.laptop_cpu_cores}
                placeholder="14"
              />
              <p>მხოლოდ ციფრები</p>
            </SLeptopFormInputWrapper>
            <SLeptopFormInputWrapper>
              <label htmlFor="laptop_cpu_threads">CPU-ს ნაკადი</label>
              <SInput
                type="number"
                isError={isError === "laptop_cpu_threads" || false}
                name="laptop_cpu_threads"
                id="laptop_cpu_threads"
                onChange={handleChange}
                value={values.laptop_cpu_threads}
                placeholder="365"
              />
              <p>მხოლოდ ციფრები</p>
            </SLeptopFormInputWrapper>
          </SLeptopFormInfoWrapper>
          <SLeptopFormInputWrapper>
            <label htmlFor="leptop-ram">ლეპტოპის RAM (GB)</label>
            <SInput
              type="number"
              isError={isError === "laptop_ram" || false}
              name="laptop_ram"
              id="leptop-ram"
              onChange={handleChange}
              value={values.laptop_ram}
              placeholder="HP"
            />
            <p>მხოლოდ ციფრები</p>
          </SLeptopFormInputWrapper>
          <SLeptopFormInputWrapper>
            <SLeptopFormInputLabel
              isError={isError === "laptop_hard_drive_type" || false}
              style={{ margin: "0 0 1rem 0", display: "flex" }}
            >
              მეხსიერების ტიპი
              {isError === "laptop_hard_drive_type" && (
                <span>
                  <img src="assets/svg/warn.svg" alt="" />
                </span>
              )}
            </SLeptopFormInputLabel>
            <SLeptopFormRadioInputWrapper>
              <div>
                <input
                  type="radio"
                  name="laptop_hard_drive_type"
                  onChange={handleChange}
                  value="SSD"
                  checked={values.laptop_hard_drive_type === "SSD" || false}
                  id="laptop_hard_drive_type"
                />
                <label htmlFor="laptop_hard_drive_type">SSD</label>
              </div>
              <div>
                <input
                  type="radio"
                  onChange={handleChange}
                  name="laptop_hard_drive_type"
                  value="HDD"
                  checked={values.laptop_hard_drive_type === "HDD" || false}
                  id="laptop_hard_drive_type"
                />
                <label htmlFor="laptop_hard_drive_type">HDD</label>
              </div>
            </SLeptopFormRadioInputWrapper>
          </SLeptopFormInputWrapper>
          <SLeptopFormDateInputWrapper>
            <div>
              <label htmlFor="laptop_purchase_date">
                შეძენის რიცხვი (არჩევითი)
              </label>
              <SInput
                type="date"
                onChange={handleChange}
                name="laptop_purchase_date"
                value={values.laptop_purchase_date}
                id="laptop_purchase_date"
                isError={isError === "laptop_purchase_date" || false}
              />
              <p>&nbsp;</p>
            </div>
            <div>
              <label htmlFor="laptop_price">ლეპტოპის ფასი</label>
              <div style={{ display: "flex", alignItems: "center" }}>
                <SInput
                  type="text"
                  name="laptop_price"
                  id="laptop_price"
                  onChange={handleChange}
                  isError={isError === "laptop_price" || false}
                  value={values.laptop_price}
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
            <SLeptopFormInputLabel
              isError={isError === "laptop_state" || false}
              style={{ margin: "0 0 2rem 0" }}
            >
              ლეპტოპის მდგომარეობა
              {isError === "laptop_state" && (
                <span>
                  <img src="assets/svg/warn.svg" alt="" />
                </span>
              )}
            </SLeptopFormInputLabel>
            <SLeptopFormRadioInputWrapper>
              <div>
                <input
                  type="radio"
                  value="ახალი"
                  onChange={handleChange}
                  checked={values.laptop_state === "ახალი" || false}
                  name="laptop_state"
                  id="leptop_state"
                />
                <label htmlFor="leptop_state">ახალი</label>
              </div>
              <div>
                <input
                  type="radio"
                  value="მეორადი"
                  checked={values.laptop_state === "მეორადი" || false}
                  name="laptop_state"
                  onChange={handleChange}
                  id="leptop_state"
                />
                <label htmlFor="leptop_state">მეორადი</label>
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
