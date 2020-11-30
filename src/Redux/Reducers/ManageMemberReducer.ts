import ActionType from '../ActionType'
import IManageMenberState from '../../DTOs/ManageMemberDTO'
import IAction from '../IAction'

const initialState: IManageMenberState = {
  MemberLists: [],
  firstName: '',
  lastName: '',
  title: 'mr',
  birthday: new Date(),
  citizenId: '',
  gender: '',
  msisdn: '',
  passportNo: '',
  nationality: '',
  expectedSalary: '',
}

const reducer = (
  state: IManageMenberState = initialState,
  action: IAction<any>,
): IManageMenberState => {
  switch (action.type) {
    default:
      return {
        ...state,
      }
    case ActionType.MANAGE_MEMBER_INIT:
      return {
        ...initialState,
        ...action.payload,
      }
    case ActionType.MANAGE_MEMBER_CHANGE:
      return {
        ...state,
        ...action.payload,
      }
    case ActionType.MANAGE_MEMBER_LIST_CHANGE:
      return {
        ...state,
        ...action.payload,
      }
  }
}

export default reducer
