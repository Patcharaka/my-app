import React from 'react'
import {connect} from 'react-redux'
import './ManageMemberPage.css'
import {Button, Card, Header} from 'semantic-ui-react'
import MemberDetail from '../../Components/Member/MemberDetail/MemberDetail'
import MemberLists from '../../Components/Member/MemberLists/MemberLists'
import ManageMemberAction from '../../Redux/Action/ManageMenberAction'

class ManageMemberPage extends React.Component<any> {
  submitMyForm(e: any) {
    throw new Error('Method not implemented.')
  }

  // Formik handle
  errors = []
  profileError = null
  submitForm = null

  createMember = (e: any) => {
    this.submitMyForm(e)
    this.props.createMember(e)
  }

  bindSubmitForm = (submitForm: any, errors: any) => {
    this.submitMyForm = submitForm
    this.profileError = errors
  }
  render() {
    return (
      <div className='card'>
        <Card
          style={{
            width: 1200,
            height: 800,
            marginLeft: 30,
            marginTop: 20,
          }}
          fluid={true}>
          <Card.Content>
            <Header as='h3'>Create Member</Header>
            <MemberDetail
              {...this.props}
              bindSubmitForm={this.bindSubmitForm}
            />
            <Button onClick={this.createMember} basic floated='right'>
              SUBMIT
            </Button>
          </Card.Content>
        </Card>
        <Card
          style={{
            width: 1200,
            height: 400,
            marginLeft: 30,
            marginBottom: 0,
          }}
          fluid={true}>
          <Card.Content>
            <Header as='h3'> Member Lists</Header>
            <MemberLists {...this.props} />
          </Card.Content>
        </Card>
      </div>
    )
  }
}
const mapStateToProps = (reduxState: any, ownProps: any) => ({
  ...reduxState.ManageMemberState,
})
export default connect(mapStateToProps, {...ManageMemberAction})(
  ManageMemberPage,
)
