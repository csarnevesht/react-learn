import React, {Component} from "react"
import ImageData from "./ImageData"

class ImageDataLoader extends Component {
    constructor() {
        super()
        this.state = {
            allImgs: []
        }

    }
    
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                console.log('response.data follows')
                console.log(response.data)
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

    /**
     * Create the onChagne handler method
     * It should update the corresponding state on every change of the input box
     */
    
    render() {
        const imageComponents = this.state.allImgs.map(item => <ImageData key={item.id} name={item.name} url={item.url}/>)

        return (
            <div>
                {imageComponents}
            </div>
        )
    }
}

export default ImageDataLoader