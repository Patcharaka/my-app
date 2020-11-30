export interface IManageList {
  _id: string
  title: string
  firstName: string
  lastName: string
  birthday: Date
  citizenId: string
  gender?: string
  msisdn: string
  passportNo?: string
  nationality?: string
  expectedSalary?: string
  status?: boolean
}

interface IManageMenberState {
  MemberLists?: Array<IManageList>
  title: string
  firstName: string
  lastName: string
  birthday: Date
  citizenId: string
  gender?: string
  msisdn: string
  passportNo?: string
  nationality?: string
  expectedSalary?: string
}

export default IManageMenberState
