import '../styles/Profile.css'

const user = {
    name: "Generasi GIGIH",
    imageUrl: "https://prog-8.com/assets/packs/dist/images/no-in-progress-lessons-5ea0fc13ca0cfaf3e019..png",
    imageSize: 90,
    altImage: "Alan l. Hart"
}

export default function Profile(){
    return(
        <>
            <h1 style={{color:"lightcoral"}}>Hello, {user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt="Alan l. Hart"
            />
        </>
    );
}