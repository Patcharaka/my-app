import React from 'react'
import {Button, Form, Grid, Radio, Select} from 'semantic-ui-react'
import {Formik} from 'formik'
import * as Yup from 'yup'
import DatePicker from 'react-datepicker'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import NumberFormat from 'react-number-format'

const Options = [
  {key: 'mr', text: 'Mr.', value: 'mr'},
  {key: 'ms', text: 'Ms.', value: 'ms'},
  {key: 'mrs', text: 'Mrs.', value: 'mrs'},
  {key: 'miss', text: 'Miss.', value: 'miss'},
  {key: 'dr', text: 'Dr.', value: 'dr'},
]
const Nationality = [
  {key: 'cz', text: 'Czech', value: 'CZECH'},
  {key: 'fr', text: 'French', value: 'FRENCH'},
  {key: 'fi', text: 'Fijian', value: 'FIJIAN'},
  {key: 'ha', text: 'Haitian', value: 'HAITIAN'},
  {key: 'la', text: 'Lao', value: 'LAO'},
  {key: 'le', text: 'Lebanese', value: 'LEBANESE'},
  {key: 'kr', text: 'Korean', value: 'KOREAN'},
  {key: 'th', text: 'Thai', value: 'THAI'},
]
const ManageMemberSchema = Yup.object().shape({
  firstName: Yup.string()
    .trim()
    .required('Required'),
  lastName: Yup.string()
    .trim()
    .required('Required'),
  title: Yup.string()
    .trim()
    .required('Required'),
  birthday: Yup.string()
    .trim()
    .required('Required'),
  nationality: Yup.string()
    .trim()
    .required('Required'),
  gender: Yup.string()
    .trim()
    .required('Required'),
  msisdn: Yup.string()
    .trim()
    .required('Required'),
  passportNo: Yup.string()
    .trim()
    .required('Required'),
  expectedSalary: Yup.string()
    .trim()
    .required('Required'),
  citizenId: Yup.string()
    .trim()
    .required('Required'),
})
class MemberDetail extends React.Component<any> {
  state = {
    currentDate: new Date(),
    value: '',
    selectedOption: '',
  }

  handleChangeBirthday = (date: Date) => {
    date.setHours(0, 0, 0, 0)
    let d = date.getTime()
    this.props.setBirthday(d)
  }

  handleOptionChange = (e: any) => {
    this.props.setGender(e)
  }

  render() {
    const {bindSubmitForm} = this.props
    const {value} = this.state
    return (
      <Formik
        enableReinitialize
        initialValues={{
          firstName: this.props.firstName,
          lastName: this.props.lastName,
          title: this.props.title,
          birthday: this.props.birthday,
          nationality: this.props.nationality,
          gender: this.props.gender,
          msisdn: this.props.msisdn,
          passportNo: this.props.passportNo,
          expectedSalary: this.props.expectedSalary,
          citizenId: this.props.citizenId,
        }}
        validationSchema={ManageMemberSchema}
        onSubmit={(values, {setSubmitting}) => {
          setSubmitting(false)
        }}>
        {(formikProps) => {
          const {
            values,
            handleSubmit,
            errors,
            setFieldValue,
            touched,
          } = formikProps

          bindSubmitForm(formikProps.submitForm, errors)
          return (
            <div style={{marginLeft: 20}}>
              <Form onSubmit={handleSubmit}>
                <Grid columns={3}>
                  <Grid.Row>
                    <Grid.Column>
                      <Form.Group widths='equal'>
                        <Form.Field>
                          <label>
                            Title
                            <span style={{color: '#FF0000'}}>*</span>:
                          </label>
                          <Form.Select
                            id='title'
                            name='title'
                            value={values.title}
                            options={Options}
                            placeholder='Mr.'
                            onChange={(e, data) => {
                              this.props.setTitle(data.value)
                            }}
                            error={
                              errors.title && touched.title
                                ? {content: errors.title}
                                : false
                            }
                          />
                        </Form.Field>
                      </Form.Group>
                    </Grid.Column>
                    <Grid.Column>
                      <Form.Group widths='equal'>
                        <Form.Field>
                          <label>
                            First name
                            <span style={{color: '#FF0000'}}>*</span>:
                          </label>
                          <Form.Input
                            fluid
                            maxLength={50}
                            value={this.props.firstName}
                            error={
                              errors.firstName && touched.firstName
                                ? {content: errors.firstName}
                                : false
                            }
                            placeholder='Enter first name'
                            id='firstName'
                            name='firstName'
                            onChange={(e: any) => {
                              this.props.setFirstName(e.target.value)
                            }}
                          />
                        </Form.Field>
                      </Form.Group>
                    </Grid.Column>
                    <Grid.Column>
                      <Form.Group widths='equal'>
                        <Form.Field>
                          <label>
                            Last name
                            <span style={{color: '#FF0000'}}>*</span>:
                          </label>
                          <Form.Input
                            fluid
                            maxLength={50}
                            value={values.lastName}
                            error={
                              errors.lastName && touched.lastName
                                ? {content: errors.lastName}
                                : false
                            }
                            placeholder='Enter last name'
                            id='lastName'
                            name='lastName'
                            onChange={(e: any) => {
                              this.props.setLastName(e.target.value)
                            }}
                          />
                        </Form.Field>
                      </Form.Group>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      <Form.Group widths='equal'>
                        <Form.Field>
                          <label>
                            Birthday <span style={{color: '#FF0000'}}>* </span>:
                          </label>
                          <DatePicker
                            value={values.birthday}
                            startDate={this.props.birthday}
                            endDate={this.state.currentDate}
                            selected={this.props.birthday}
                            maxDate={this.state.currentDate}
                            dateFormat='dd/MM/yyyy'
                            placeholderText='DD/MM/YYYY'
                            onChange={(value) => {
                              //  this.handleChangeBirthday()
                            }}
                          />
                        </Form.Field>
                      </Form.Group>
                    </Grid.Column>
                    <Grid.Column>
                      <Form.Field>
                        <label>Nationality : </label>
                        <Form.Input
                          control={Select}
                          options={Nationality}
                          value={values.nationality}
                          onChange={(e, data) => {
                            this.props.setNationality(data.value)
                          }}
                          name='nationality'
                          placeholder='-- Please Select --'></Form.Input>
                      </Form.Field>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      <Form.Field>
                        <label>Citizen ID : </label>
                        <NumberFormat
                          format='#-####-#####-##-#'
                          value={values.citizenId}
                          onChange={(e: any) => {
                            this.props.setCitizenId(e.target.value)
                          }}
                        />
                      </Form.Field>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      <Form.Group inline>
                        <Form.Field>
                          <label>Gender : </label>
                        </Form.Field>
                        <Form.Checkbox
                          control={Radio}
                          checked={this.props.gender === 'Male'}
                          id='Male'
                          label='Male'
                          onChange={(e, data) =>
                            this.handleOptionChange(data.label)
                          }
                        />
                        <Form.Checkbox
                          control={Radio}
                          checked={this.props.gender === 'Female'}
                          id='Female'
                          label='Female'
                          onChange={(e, data) =>
                            this.handleOptionChange(data.label)
                          }
                        />
                        <Form.Checkbox
                          control={Radio}
                          checked={this.props.gender === 'Unisex'}
                          id='Unisex'
                          label='Unisex'
                          onChange={(e, data) =>
                            this.handleOptionChange(data.label)
                          }
                        />
                      </Form.Group>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      <Form.Field
                        className={
                          errors.msisdn && touched.msisdn ? 'error' : ''
                        }>
                        <label>
                          Mobile Phone{' '}
                          <span style={{color: '#FF0000'}}>* </span>:
                        </label>
                        <PhoneInput
                          inputProps={{
                            name: 'msisdn',
                            required: true,
                          }}
                          inputStyle={{marginLeft: 30}}
                          country={'th'}
                          value={values.msisdn}
                          onChange={(e: any) => this.props.setMobile(e)}
                        />
                      </Form.Field>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      <Form.Field>
                        <label>Passport No : </label>
                        <Form.Input
                          name='passportNo'
                          maxLength={8}
                          onChange={(e: any) => {
                            this.props.setPassportNo(e.target.value)
                          }}
                          value={values.passportNo}
                          error={
                            errors == values.passportNo &&
                            touched == values.passportNo
                              ? {content: errors.passportNo}
                              : false
                          }></Form.Input>
                      </Form.Field>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      <Form.Field
                        className={
                          errors.expectedSalary && touched.expectedSalary
                            ? 'error'
                            : ''
                        }>
                        <label>
                          Expected Salary
                          <span style={{color: '#FF0000'}}>* </span>:
                        </label>
                        <NumberFormat
                          fluid
                          value={values.expectedSalary}
                          name='expectedSalary'
                          onChange={(e: any) => {
                            this.props.setExpectedSalary(e.target.value)
                          }}
                        />
                        THB
                      </Form.Field>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Form>
            </div>
          )
        }}
      </Formik>
    )
  }
}
export default MemberDetail
