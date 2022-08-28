export interface EmployeeFormProps {
  handleChangeRoute: () => void,
  insertEmployeeInfo: (info: {
    name: string,
    lastname: string,
    email: string,
    team_id: number,
    position_id: number
  }) => void
}