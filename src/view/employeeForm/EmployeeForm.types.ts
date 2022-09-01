export interface EmployeeFormProps {
  handleChangeRoute: () => void,
  insertEmployeeInfo: (info: {
    name: string,
    surname: string,
    email: string,
    team_id: number,
    position_id: number
  }) => void
}