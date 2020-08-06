import React, { Component } from 'react';
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBCardImage
} from "mdbreact";
class ModalPage extends Component {
  state = {
    modal8: false,
    modal9: false
  }

  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  render() {
    return (

      <MDBContainer>
        <MDBBtn outline size="sm" onClick={this.toggle(8)}>
          Detail
        </MDBBtn>
        <MDBModal
          isOpen={this.state.modal8}
          toggle={this.toggle(8)}
          fullHeight
          position="right"
        >
          <MDBModalHeader toggle={this.toggle(8)}>
            Detail
          </MDBModalHeader>
          <MDBModalBody>
            <h2>Detail d'evenement</h2>
            <h5>Organsé Par :{this.props.el.nom_organzateur}</h5>


            <div className="pos_modal">
              <MDBCardImage className="img-fluid" src={this.props.el.affiche}
                waves />
              <div className="detail_evenement">
                {this.props.el.titre}
                {this.props.el.Adresse}
              </div>
            </div>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="pink" onClick={this.toggle(8)}>
              Fermer
            </MDBBtn>

          </MDBModalFooter>
        </MDBModal>
      </MDBContainer >
    );
  }
}

export default ModalPage;