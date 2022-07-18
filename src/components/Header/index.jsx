
import { useContext } from 'react';
import logo from '../../assets/logo.svg';
import { BiSearchAlt2 } from 'react-icons/bi';
import { HeaderElement, Ul, Li } from './styles';
import { WindbnbContext } from '../../context/windbnb';
import Modal from '../Modal';
const Header = () => {
    const { modal, toggleModal, country } = useContext(WindbnbContext);
    return (
        <HeaderElement>
            <img src={logo} alt="logo" />
            <nav>
                <Ul onClick={toggleModal}>
                    <Li color={"#333333"}>
                        {country ? country : "Add location"}
                    </Li>
                    <Li color={"#BDBDBD"}>Add guests</Li>
                    <Li>
                        <BiSearchAlt2 color='#EB5757' size={25} />
                    </Li>
                </Ul>
            </nav>
            {
                modal ? <Modal /> : null
            }
        </HeaderElement>
    )
};

export default Header;