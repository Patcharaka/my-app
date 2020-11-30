import ActionType from './../ActionType'
import MemberLists from './../../Components/Member/MemberLists/MemberLists'
import axios from 'axios'
class ManageMemberAction {
  init = () => async (dispatch: any) => {
    dispatch({
      type: ActionType.MANAGE_MEMBER_INIT,
      payload: {
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
      },
    })
  }
  setFirstName = (firstName: string) => (dispatch: any) => {
    dispatch({
      type: ActionType.MANAGE_MEMBER_CHANGE,
      payload: {
        firstName: firstName,
      },
    })
  }
  setLastName = (lastName: string) => (dispatch: any) => {
    dispatch({
      type: ActionType.MANAGE_MEMBER_CHANGE,
      payload: {
        lastName: lastName,
      },
    })
  }
  setTitle = (title: string) => (dispatch: any) => {
    dispatch({
      type: ActionType.MANAGE_MEMBER_CHANGE,
      payload: {
        title,
      },
    })
  }
  setBirthday = (birthday: number) => (dispatch: any) => {
    dispatch({
      type: ActionType.MANAGE_MEMBER_CHANGE,
      payload: {
        birthday,
      },
    })
  }
  setNationality = (nationality: string) => (dispatch: any) => {
    dispatch({
      type: ActionType.MANAGE_MEMBER_CHANGE,
      payload: {
        nationality,
      },
    })
  }
  setCitizenId = (citizenId: string) => (dispatch: any) => {
    dispatch({
      type: ActionType.MANAGE_MEMBER_CHANGE,
      payload: {
        citizenId,
      },
    })
  }
  setGender = (gender: string) => (dispatch: any) => {
    console.log(gender)

    dispatch({
      type: ActionType.MANAGE_MEMBER_CHANGE,
      payload: {
        gender,
      },
    })
  }
  setMobile = (msisdn: string) => (dispatch: any) => {
    let countryCode = '+'
    dispatch({
      type: ActionType.MANAGE_MEMBER_CHANGE,
      payload: {
        msisdn: countryCode + msisdn,
      },
    })
  }
  setPassportNo = (passportNo: string) => (dispatch: any) => {
    dispatch({
      type: ActionType.MANAGE_MEMBER_CHANGE,
      payload: {
        passportNo,
      },
    })
  }
  setExpectedSalary = (expectedSalary: number) => (dispatch: any) => {
    dispatch({
      type: ActionType.MANAGE_MEMBER_CHANGE,
      payload: {
        expectedSalary,
      },
    })
  }
  createMember = () => (dispatch: any, getState: any) => {
    try {
      const state = getState().ManageMemberState
      const MemberLists = state.MemberLists
      if (state.firstName == '') {
        return
      } else if (state.lastName == '') {
        return
      } else if (state.birthday == '') {
        return
      } else if (state.msisdn == '') {
        return
      } else if (state.expectedSalary == 0) {
        alert('Please specify expected salary')
        return
      }
      let count = 1
      let data = {
        _id: count + 1,
        title: state.title,
        firstName: state.firstName,
        lastName: state.lastName,
        birthday: state.birthday,
        citizenId: state.citizenId,
        gender: state.gender,
        msisdn: state.msisdn,
        passportNo: state.passportNo,
        nationality: state.nationality,
        expectedSalary: state.expectedSalary,
        status: true,
      }

      MemberLists.push(data)
      let isShowTable = MemberLists.length <= 0 ? false : true

      dispatch({
        type: ActionType.MANAGE_MEMBER_CHANGE,
        payload: {
          MemberLists: MemberLists,
          isShowTable,
        },
      })
    } catch (error) {}
  }
  setDeleteSelect = () => (dispatch: any, getState: any) => {
    try {
      const state = getState().ManageMemberState
      const MemberLists = state.MemberLists
      dispatch({
        type: ActionType.MANAGE_MEMBER_CHANGE,
        payload: {
          MemberLists: MemberLists,
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
        },
      })
    } catch (error) {}
  }

  editMember = () => (dispatch: any, getState: any) => {
    try {
    } catch (error) {
      dispatch({
        type: ActionType.MANAGE_MEMBER_LIST_CHANGE,
        payload: {},
      })
    }
  }
  deleteMember = () => (dispatch: any, getState: any) => {
    try {
    } catch (error) {
      dispatch({
        type: ActionType.MANAGE_MEMBER_LIST_CHANGE,
        payload: {},
      })
    }
  }
}
export default new ManageMemberAction()
