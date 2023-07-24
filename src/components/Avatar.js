import '../styles/Avatar.css'

const user = {
    name: "Maria Sklodowska-Curie",
    imgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.TI63CTqkOyiHsMhqlqMNBAHaHZ%26pid%3DApi&f=1&ipt=a9ab2c4b1eecc35df0a700b0e8ab484cac2b6a378cadcd817c3d28a7ed662a52&ipo=images"
}

export default function Avatar(){
    return(
        <div className="container">
            <div className="wrapper">
                <header className="header">{user.name}</header>
                <img className="image" src={user.imgUrl} alt="Maria Sklodowska-Curie"/>
            </div>
        </div>
    )
}