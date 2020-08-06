import React, { Component } from "react";
import { connect } from "react-redux";
import './event_list.css';
import {
    getEventsFromApi,

} from "../../Action/EventAction.js";
import {
    getCategorieFromApi
} from "../../Action/CategorieAction.js"
import { Carousel, InputGroup, FormControl, Form } from 'react-bootstrap';
import { MDBRow, MDBContainer, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

import ModalDetail from "./ModalDetail";

import { FaSearch, FaUsers } from 'react-icons/fa';
var categorie = [];
var newArray = [];


class Event_list extends Component {
    componentDidMount() {
        this.props.getAllEvents();
        this.props.getAllCategorie();

    }
    distinctDoubleCategorie = () => {
        let ArrayOfCategorie = [];
        console.log("categorie is :" + this.props.categorie)
        this.props.categorie.map((el) => ArrayOfCategorie.push(el.nom_categorie));
        newArray = new Set(ArrayOfCategorie);
        categorie = [...newArray];
    };


    render() {
        this.distinctDoubleCategorie();
        const { event } = this.props;
        //  const { categorie } = this.props;
        return (
            <div>
                <div>
                    {/*  crrousel zone */}
                    <Carousel className="carrousel_style">
                        {event.map((el, i) => (<Carousel.Item>
                            <img
                                className="image-slider"
                                src={el.affiche}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>))}


                    </Carousel>
                    {/*Filtre   zone */}

                </div>
                <div className="flexselect">


                    <div>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1"><FaSearch /></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Search"

                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>  </div>
                    <div >


                        <Form.Control as="select"  >



                            <option value="">Indiquez votre destination</option>

                            <option value="Hammamet">Hammamet</option>
                            <option value="Kelibia">kelibia</option>
                            <option value="Sousse">Sousse</option>
                            <option value="Djerba">Djerba</option>
                            <option value="Monastir">Monastir</option>

                            <option value="Mahdia">Mahdia</option>
                            <option value="Tabarka">Tabarka</option>
                            <option value="Zarzis">Zarzis</option>
                            <option value="Tunis">Tunis</option>
                            <option value="Sfax">Sfax</option>
                            <option value="Nabeul">Nabeul</option>
                            <option value="Tozeur">Tozeur</option>
                            <option value="Gammarth">Gammarth</option>
                            <option value="Douz">Douz</option>
                            <option value="Bizerte">Bizerte</option>
                            <option value="Ain Draham">Ain Draham</option>
                            <option value="Kairouan">Kairouan</option>
                            <option value="Tataouine">Tataouine</option>
                            <option value="El Jem">El Jem</option>
                        </Form.Control>


                    </div>




                    <div>
                        <Form.Control as="select"  >
                            <option value="">Categorie</option>
                            {categorie.map((el) => (
                                <option value={el}>{el}</option>
                            ))}
                        </Form.Control>
                    </div>
                </div>

                {/*Card Event */}

                <div className="pos_card">


                    {event.map((el, i) => (
                        <MDBCol >
                            <MDBCard>
                                <MDBCardImage className="img-fluid" src={el.affiche}
                                    waves />
                                <MDBCardBody>
                                    <MDBCardTitle>{el.titre}</MDBCardTitle>
                                    <MDBCardText>{el.Adresse}</MDBCardText>

                                    <MDBCardText>{el.nombre_de_participant} <FaUsers /></MDBCardText>
                                    {/*< ModalDetail el={el} />*/}
                                </MDBCardBody>

                            </MDBCard>

                        </MDBCol>

                    ))}</div >

            </div >
        )
    }
}

const mapStateToProps = (state) => ({
    event: state.event,
    categorie: state.categorie,
});

const mapDispatchToProps = (dispatch) => ({
    getAllEvents: () => dispatch(getEventsFromApi()),
    getAllCategorie: () => dispatch(getCategorieFromApi()),
    // getallhistory: () => dispatch(getAllHistoryFromApi()),
    // EditProduct: (el, id) => dispatch(EditProductInApi(el, id)),
    //  Addhistory: (element) => dispatch(addHistoryInApi(element)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Event_list);