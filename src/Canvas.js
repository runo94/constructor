import React, {Component} from 'react';
import template_1 from './assets/images/template_1.png';

class Canvas extends Component {

  componentDidMount() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    const img = this.refs.image
    const dataURL = canvas.toDataURL()

    img.onload = () => {
      ctx.drawImage(img, 0, 0)
      ctx.font = "40px Courier"
      ctx.fillText(this.props.text, 110, 75)
    }
  }


    hendleClick = (hi) => {
      const canvas = this.refs.canvas
      const dataURL = canvas.toDataURL()

      console.log(dataURL);
    }

  render() {
    return(
      <div>
        <canvas ref="canvas" width={640} height={325} />
        <img ref="image" src={template_1} className="hidden" />
        <button onClick={this.hendleClick}>I WANT IT!</button>
      </div>
    )
  }
}

export default Canvas
