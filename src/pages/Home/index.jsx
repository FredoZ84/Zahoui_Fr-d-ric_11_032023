import Slogan from '../../components/Slogan'
import sloganBackground from '../../assets/IMG.png'
import Thumbs from '../../components/Thumbs'

function Home() {

    const sloganText = "Chez vous, partout et ailleurs"
    
    return (
        <main>
            <Slogan sloganBackground={sloganBackground} sloganText={sloganText} />
            <Thumbs />
        </main>
    )
    
}

export default Home