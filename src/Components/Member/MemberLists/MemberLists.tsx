import React from 'react'
import {
  Button,
  Checkbox,
  Icon,
  Label,
  List,
  Menu,
  Pagination,
  Table,
} from 'semantic-ui-react'

class MemberLists extends React.Component<any> {
  state = {
    checkboxAll: true,
    memberList: [],
  }

  editMember = () => {}
  deleteMember = () => {}
  deleteSelect = () => {
    this.state.memberList.splice(
      this.state.memberList.findIndex((e: any) => e.status === true),
      1,
    )
    this.setState({data: this.state.memberList})
    this.props.setDeleteSelect()
  }

  render() {
    let data = this.props.MemberLists
    this.state.memberList = data
    return (
      <div>
        {this.props.isShowTable == true ? (
          <div>
            {' '}
            {!this.state.memberList || this.state.memberList.length <= 0 ? (
              <div> Result Not Found </div>
            ) : (
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell colSpan='6'>
                      <Checkbox
                        label='Select All'
                        checked={this.state.checkboxAll}
                        onChange={() => {
                          if (this.state.checkboxAll == true) {
                            this.setState({checkboxAll: false})
                            this.props.MemberLists?.forEach((element: any) => {
                              element.status = false
                            })
                            this.setState({memberList: this.props.MemberLists})
                          } else {
                            this.setState({checkboxAll: true})
                            this.props.MemberLists.forEach((element: any) => {
                              element.status = true
                            })
                            this.setState({memberList: this.props.MemberLists})
                            console.log(this.state.memberList)
                          }
                        }}
                      />
                      <Button
                        size='tiny'
                        style={{marginLeft: 10}}
                        basic
                        onClick={(e: any) => this.deleteSelect()}>
                        {'    '}DELETE
                      </Button>
                      <Menu floated='right' pagination>
                        <Pagination
                          disabled
                          totalPages={3}
                          ellipsisItem={null}
                        />
                      </Menu>
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell></Table.HeaderCell>
                    <Table.HeaderCell>NAME</Table.HeaderCell>
                    <Table.HeaderCell>GENDER</Table.HeaderCell>
                    <Table.HeaderCell>MOBILE PHONE</Table.HeaderCell>
                    <Table.HeaderCell>NATIONALITY</Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                {this.state.memberList.map((data: any) => {
                  return (
                    <Table.Body key={data.firstName}>
                      <Table.Row>
                        <Table.HeaderCell textAlign='center' broder={0}>
                          <Checkbox
                            value={data.firstName}
                            checked={data.status}
                            onChange={() => {
                              if (data.status == true) {
                                data.status = false
                                this.setState({memberList: data})
                                console.log(this.state.memberList)
                              } else {
                                data.status = true
                                this.setState({memberList: data})
                                console.log(this.state.memberList)
                              }
                              this.setState(this.state.memberList)
                            }}></Checkbox>
                        </Table.HeaderCell>
                        <Table.Cell>
                          {data.firstName} {data.lastName}{' '}
                        </Table.Cell>
                        <Table.Cell>
                          {data.gender == '' ? '-' : data.gender}
                        </Table.Cell>
                        <Table.Cell>{data.msisdn}</Table.Cell>
                        <Table.Cell>
                          {data.nationality == '' ? '-' : data.nationality}
                        </Table.Cell>
                        <Table.Cell textAlign='center'>
                          <Label onChange={this.editMember()}>
                            <Icon name='edit outline' />
                            EDIT
                          </Label>
                          <Label onChange={this.deleteMember()}>
                            <Icon name='user delete' />
                            {''}
                            DELETE
                          </Label>
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  )
                })}
              </Table>
            )}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    )
  }
}
export default MemberLists
