import { useState, useEffect } from "react";
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
import { EmployeeInfoRouteEnum } from "../EmployeeInfo/EmployeeInfo";
import { useFetch } from "./hooks/useFetch";
import { useLaptopForm } from "./hooks/useLaptopForm";
import { Loading } from "../../components/Loading";

interface Props {
  setFormRoute: React.Dispatch<React.SetStateAction<EmployeeInfoRouteEnum>>;
  setupRequest: (data: LeptopTypes) => void;
  sendLaptop: () => void;
  isLoading: boolean;
}

export const LeptopForm: React.FC<Props> = ({
  setFormRoute,
  setupRequest,
  sendLaptop,
  isLoading,
}) => {
  const [data] = useFetch();

  // localstorage values
  const [_, getLocalLeptop] = useLocalStorage();

  // input handler
  const [values, handleChange, fileUploadHandler] =
    useLaptopForm(getLocalLeptop);
  const [validation] = useValidation(values);

  const [isError, setIsError] = useState<string | undefined>(undefined);

  const setPrepObject = () => {
    const findBrandId =
      data.brands.find((e) => e.name === (values.laptop_brand_id as any)) || 0;

    const prepObject: LeptopTypes = {
      laptop_cpu: values.laptop_cpu,
      laptop_cpu_cores: values.laptop_cpu_cores,
      laptop_hard_drive_type: values.laptop_hard_drive_type,
      laptop_name: values.laptop_name,
      laptop_state: values.laptop_state === "???????????????" ? "new" : "used",
      laptop_cpu_threads: values.laptop_cpu_threads,
      laptop_price: values.laptop_price,
      laptop_purchase_date: values.laptop_purchase_date,
      laptop_ram: values.laptop_ram,
      laptop_image: values.laptop_image,
      laptop_brand_id: Number((findBrandId as any).id),
    };

    return prepObject;
  };

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
      sendLaptop();
    }
  };

  useEffect(() => {
    setupRequest(setPrepObject());
  }, [values]);

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
                ????????????????????? ?????????????????????
              </SLeptopFormUploadAgainButton>
            </>
          )}
          <SLeptopFormInputWrapper>
            <label htmlFor="leptop-name">???????????????????????? ??????????????????</label>
            <SInput
              isError={isError === "laptop_name" || false}
              type="text"
              name="laptop_name"
              id="leptop-name"
              onChange={handleChange}
              value={values.laptop_name}
              placeholder="HP"
            />
            <p>???????????????????????? ??????????????????, ?????????????????????, !@#$%^&*()_+=</p>
          </SLeptopFormInputWrapper>
          <SLeptopFormSelect
            isError={isError === "laptop_brand_id" || false}
            onChange={handleChange}
            name="laptop_brand_id"
            value={values.laptop_brand_id}
          >
            <option value={""} disabled>
              ???????????????????????? ??????????????????
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
              <label htmlFor="laptop_cpu_cores">CPU-??? ??????????????????</label>
              <SInput
                isError={isError === "laptop_cpu_cores" || false}
                type="number"
                name="laptop_cpu_cores"
                id="laptop_cpu_cores"
                onChange={handleChange}
                value={values.laptop_cpu_cores}
                placeholder="14"
              />
              <p>?????????????????? ?????????????????????</p>
            </SLeptopFormInputWrapper>
            <SLeptopFormInputWrapper>
              <label htmlFor="laptop_cpu_threads">CPU-??? ??????????????????</label>
              <SInput
                type="number"
                isError={isError === "laptop_cpu_threads" || false}
                name="laptop_cpu_threads"
                id="laptop_cpu_threads"
                onChange={handleChange}
                value={values.laptop_cpu_threads}
                placeholder="365"
              />
              <p>?????????????????? ?????????????????????</p>
            </SLeptopFormInputWrapper>
          </SLeptopFormInfoWrapper>
          <SLeptopFormInputWrapper>
            <label htmlFor="leptop-ram">???????????????????????? RAM (GB)</label>
            <SInput
              type="number"
              isError={isError === "laptop_ram" || false}
              name="laptop_ram"
              id="leptop-ram"
              onChange={handleChange}
              value={values.laptop_ram}
              placeholder="HP"
            />
            <p>?????????????????? ?????????????????????</p>
          </SLeptopFormInputWrapper>
          <SLeptopFormInputWrapper>
            <SLeptopFormInputLabel
              isError={isError === "laptop_hard_drive_type" || false}
              style={{ margin: "0 0 1rem 0", display: "flex" }}
            >
              ????????????????????????????????? ????????????
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
                ????????????????????? ?????????????????? (????????????????????????)
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
              <label htmlFor="laptop_price">???????????????????????? ????????????</label>
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
              <p>?????????????????? ?????????????????????</p>
            </div>
          </SLeptopFormDateInputWrapper>
          <SLeptopFormInputWrapper style={{ gridColumn: "1/3" }}>
            <SLeptopFormInputLabel
              isError={isError === "laptop_state" || false}
              style={{ margin: "0 0 2rem 0" }}
            >
              ???????????????????????? ?????????????????????????????????
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
                  value="???????????????"
                  onChange={handleChange}
                  checked={values.laptop_state === "???????????????" || false}
                  name="laptop_state"
                  id="leptop_state"
                />
                <label htmlFor="leptop_state">???????????????</label>
              </div>
              <div>
                <input
                  type="radio"
                  value="?????????????????????"
                  checked={values.laptop_state === "?????????????????????" || false}
                  name="laptop_state"
                  onChange={handleChange}
                  id="leptop_state"
                />
                <label htmlFor="leptop_state">?????????????????????</label>
              </div>
            </SLeptopFormRadioInputWrapper>
          </SLeptopFormInputWrapper>
          <SLeptopFormBackButton
            onClick={() => setFormRoute(EmployeeInfoRouteEnum.EMPLOYEE_ROUTE)}
            type="button"
          >
            ????????????
          </SLeptopFormBackButton>
          <SLeptopFormSaveButton disabled={isLoading} type="submit">
            {isLoading ? <Loading /> : "????????????????????????????????????"}
          </SLeptopFormSaveButton>
        </SLeptopFormContainer>
      </SLeptopForm>
      <SLeptopFormFooter>
        <SLeptopFormFooterLogo />
      </SLeptopFormFooter>
    </SLeptopFormWrapper>
  );
};
