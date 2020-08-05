import React, { Component } from "react";
import { connect } from "react-redux";
import './event_list.css';
import {
    getEventsFromApi,

} from "../../Action/EventAction.js";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer, MDBRow } from
    "mdbreact";
class Event_list extends Component {
    componentDidMount() {
        this.props.getAllEvents();
        //  this.props.getallhistory();
        // this.setState({ products: this.props.products });
    }


    render() {
        const { event } = this.props;
        return (
            <div>
                <div>
                    <MDBContainer className="mt-5">
                        <MDBRow>
                            <MDBCol lg="12" md="12" className="mb-4">
                                <img src="https://image.freepik.com/photos-gratuite/parc-attractions-pour-journee-enfants_23-2148606699.jpg" className="picture_slide" alt="" />
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>


                </div>
                <div className="flexselect">
                    <div>

                        <select>
                            <option value="">Adresse</option>

                            <option value="">Tunis</option>

                            <option value="">Ben arous</option>

                            <option value="">Aryana</option>

                        </select>


                    </div>
                    <div>
                        <select>
                            <option value="">Categorie</option>

                            <option value="">evenement</option>

                            <option value="">parc d'attraction</option>

                            <option value="">Club</option>

                        </select>
                    </div>
                </div>



                <div>

                    {event.map((el, i) => (
                        <MDBCol style={{ maxWidth: "22rem" }}>
                            <MDBCard>
                                <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                                    waves />
                                <MDBCardBody>
                                    <MDBCardTitle>{el.titre}</MDBCardTitle>
                                    <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                                    <MDBBtn href="#">Click</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    ))}</div >

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    event: state.event,
    event: state.event,
});

const mapDispatchToProps = (dispatch) => ({
    getAllEvents: () => dispatch(getEventsFromApi()),
    // getallhistory: () => dispatch(getAllHistoryFromApi()),
    // EditProduct: (el, id) => dispatch(EditProductInApi(el, id)),
    //  Addhistory: (element) => dispatch(addHistoryInApi(element)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Event_list);