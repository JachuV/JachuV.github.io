import * as React from "react"
import "../../../mystyles.scss"
import Column from "./Gallery/Column"
const links = [
    "https://www.youtube.com/embed/8N9Njbf8k3Y?si=GrjTNGm3qGztl-3p",
    "https://www.youtube.com/embed/eWABpAXJnN4?si=gTfX85QlnJq2Givy",
    "https://www.youtube.com/embed/lhIZBe9VZ84?si=ZP0L-KalAPiVSPXG",
    "https://www.youtube.com/embed/31j4frQQETE?si=-H4qpfdTikjKkM9i",
]
const Gallery = () => {
	return (
        <div className="columns is-multiline">
            { links.map(link => (
                <Column key={ link } link={ link } />)) }
        </div>
	)
}

export default Gallery