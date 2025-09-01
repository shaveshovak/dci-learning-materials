import Header from "../../components/header/Header"
import NavList from "../../components/nav-list/NavList"
import { WriterBackgroundImg, StarIcon } from "../../assets/Images"

export const Home = () => {
    const homeLinks = [
        {
            item: 'Home',
            url: '/'
        },
        {
            item: 'Featured',
            url: '/featured'
        }
    ]
    return (
        <section>
            <Header />
            <NavList linkArr={homeLinks}/>
            <WriterBackgroundImg />
            <StarIcon 
                color={'red'} 
                width={30}
                height={30}
            />
            <StarIcon 
                color={'red'} 
                width={60}
                height={60}
            />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iste debitis vitae nobis, sint vel, cupiditate et fugit hic ratione fuga iusto sapiente libero ullam voluptas similique perspiciatis itaque. Exercitationem!
            </p>
        </section>
        
    )
}