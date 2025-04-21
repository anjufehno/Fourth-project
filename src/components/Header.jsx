import Face from "../images/face.png"


export default function Header() {
    return (
        <header className="header">
            <img 
                src={Face} 
            />
            <h1>Meme Generator</h1>
        </header>
    )
}