import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Well, Button, Col, Row, ControlLabel } from 'react-bootstrap';
import Moment from 'react-moment';
const mapStateToProps = (state) => {
    return {
       data: state.repository.data,
       showSuccessModal: state.repository.showSuccessModal,
       showErrorModal: state.errorHandler.showErrorModal,
       errorMessage: state.errorHandler.errorMessage
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
        onGetOwnerById: (url, props) => dispatch(repositoryActions.getData(url, props)),
        onDeleteOwner: (url, props) => dispatch(repositoryActions.deleteData(url, props)),
        onCloseSuccessModal: (url, props) => dispatch(repositoryActions.closeSuccessModal(props, url)),
        onCloseErrorModal: () => dispatch(errorHandlerActions.closeErrorModal())
    }
}

class DeleteOwner extends Component {
    render() { 
        let owner = {...this.props.data};
        return ( 
            <Aux>
                <Row>
                <Col md={10}>
                    <Well>
                        <Row>
                            <Col md={3}>
                                <ControlLabel htmlFor='name'>Owners name:</ControlLabel>
                            </Col>
                            <Col md={7}>
                                <span name='name'>{owner.name}</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={3}>
                                <ControlLabel htmlFor='dateOfBirth'>Date of birth:</ControlLabel>
                            </Col>
                            <Col md={7}>
                                <span name='dateOfBirth'><Moment format="MM/DD/YYYY">{owner.dateOfBirth}</Moment></span>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={3}>
                                <ControlLabel htmlFor='address'>Address:</ControlLabel>
                            </Col>
                            <Col md={7}>
                                <span name='address'>{owner.address}</span>
                            </Col>
                            </Row>
                    </Well>
                    </Col>
                </Row>
                <Row>
                <Col mdOffset={8} md={1}>
                    <Button type="submit" bsStyle="info" onClick={this.deleteOwner}>Delete</Button>
                </Col>
                <Col md={1}>
                        <Button bsStyle='danger' onClick={this.redirectToOwnerList}>Cancel</Button>
                </Col>
                </Row>
            </Aux>
         )
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(DeleteOwner);