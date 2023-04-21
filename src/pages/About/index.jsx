import '../../styles/Collapse.css'
import Collapse from '../../components/Collapse'
import datas from '../../datas/about.json'
import Slogan from '../../components/Slogan'
import sloganBackground from '../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png'

function About() {
  return (
    <main id="about">
      <Slogan sloganText="" sloganBackground={sloganBackground} />
      <div className="collapse_area">
        {datas.map((data, index) => (
          <Collapse
            title={data.title}
            description={data.description}
            key={index}
          />
        ))}
      </div>
    </main>
  )
}

export default About
