import React, { Component } from "react";
import { connect } from "react-redux";
import RegisterModal from "./ModalRegister"

export default class Register extends Component {
    render() {
        return (
            <div>
                <h1>Espace proffesionnel</h1>

                <div>
                    <h2>Vous etes organisateurs d'evenements</h2>
                    <p>Vous etes un organisateurs des evenements pour les enfants .Lancez votre demande de  partenariat avec Kids Party ,c'est une platforme qui presente tous les evenements en tunisie.

                    -Bien s’identifier et augmenter la visibilité.
    -Aider l’internaute à joindre facilement votre </p>


                </div>
                < RegisterModal />

            </div>
        )
    }



}