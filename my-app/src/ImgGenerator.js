import React, {Component} from "react"

class ImgGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                // console.log('response.data follows')
                // console.log(response.data)
                // console.log('this.state.allImgs follows')
                // console.log(this.state.allImgs)
                const imgs = response.data.memes
                // console.log('imgs follows')
                // console.log(imgs.length)
                // console.log(imgs)
                this.setState({ allImgs: imgs })
                // console.log('this.state.allImgs after setState() follows')
                // console.log(this.state.allImgs.length)
                // console.log(this.state.allImgs)
            })
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

    handleSubmit(event) {
        event.preventDefault()
        // console.log('allImgs=' + this.state.allImgs)
        const randNum = Math.floor(Math.random() * this.state.allImgs.length)
        // console.log('randNum=' + randNum)
        const randImg = this.state.allImgs[randNum].url
        this.setState({ randomImg: randImg })
    }
    
    /**
     * Create the onChagne handler method
     * It should update the corresponding state on every change of the input box
     */
    
    render() {
        return (
            <div>
                <form className="img-form" onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    /> 
                    <input 
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    /> 
                
                    <button>Gen</button>
                </form>
                <div className="img">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default ImgGenerator