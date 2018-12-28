import React, { Component } from 'react';
import axios from 'axios';
import SliderTemplates from './slider_templates';

class NewsSlider extends Component {

  state = {
      news:[]
  }

  componentWillMount(){
      axios.get(`http://localhost:3001/articles?_start=${this.props.start}&_end=3`)
      .then(response =>{
          this.setState({
            news:response.data
          })
      })
  }

  render(){
      console.log(this.state.news)
      return(
          <SliderTemplates data={this.state.news} type={this.props.type}/>
      )

  }

}

export default NewsSlider;
