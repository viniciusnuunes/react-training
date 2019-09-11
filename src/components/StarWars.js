import React, { Component } from 'react'
import axios from 'axios';
import '../App.css';

class StarWars extends Component {

    state = {
        planetas: [],
        errorMsg: '',
        count: 0
    }

    planetaUrl = 'https://swapi.co/api/planets/'
        

    componentDidMount() {

        axios.get(this.planetaUrl)
        .then(response => {            
            this.setState({
                planetas: response.data.results,
                count: response.data.count               
            })
            console.log(this.state.planetas)
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMsg: 'Erro ao obter os dados da consulta'})
        })
    }
    

    render() {        
        const { planetas, errorMsg } = this.state;
        return (
            <div class="listaDePlanetas">
                <h3>Lista de Planetas</h3>
                {
                    planetas.map((item,  index) => ( <p key={index}> {index} - {item.name} </p>))
                }
                {
                    this.state.errorMsg ? <div> {this.state.errorMsg} </div> : null
                }
            </div>            
        )
    }
}

export default StarWars
