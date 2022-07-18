import { useContext, useState } from "react";
import {
    Overlay, ModalElement, ModalContainer,
    Form, ContainerInput, Input,
    Button, ItensLocation, ItemLocation,
    ContainerItens, ItensGuests, ButtonControl,
    TitleSearch
} from "./styles";
import { BiSearchAlt2 } from 'react-icons/bi';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { WindbnbContext } from "../../context/windbnb";
const Modal = () => {

    const { modal, toggleModal,
        country, setCountry,
        contries, setContries,
        filterStays
    } = useContext(WindbnbContext);

    const [options, setOptions] = useState("");
    const [countAdult, setCountAdult] = useState(0);
    const [countChildren, setCountChildren] = useState(0);
    const [sumGuests, setSumGuests] = useState(0);



    const changeOptions = (value) => {
        let valueOptions = value;
        setOptions(valueOptions);
    }

    const Search = (e) => {
        e.preventDefault();
        addCountries();
        filterStays(country, sumGuests);
        toggleModal();
    }
    const addCountry = (index) => {
        setCountry(contries[index]);
    }

    const addCountries = () => {
        if (country.trim() !== "") {
            let newCountries = contries
            newCountries.unshift(country)
            newCountries.pop()
            setContries(newCountries)
        }
    }

    const addGuests = (value) => {
        if (value === "Adults") {
            setCountAdult(countAdult + 1);

        } else {
            setCountChildren(countChildren + 1);

        }
        setSumGuests(sumGuests + 1);
    }
    const removeGuests = (value) => {
        if (value === "Adults") {
            if (countAdult > 0) {
                setCountAdult(countAdult - 1);

            }

        } else {
            if (countChildren > 0) {
                setCountChildren(countChildren - 1);

            }
        }
        setSumGuests(sumGuests - 1);
    }
    return (
        <>
            <ModalElement>
                <ModalContainer>
                    <TitleSearch >
                        <p>Edit your search</p>
                        <IoMdClose size={16} color={"#333333"}
                            onClick={toggleModal} />

                    </TitleSearch>
                    <Form>

                        <ContainerInput>
                            <label>location</label>
                            <Input type="text" placeholder="Add location"
                                onFocus={() => {
                                    changeOptions("location");
                                }}
                                onChange={(e) => {
                                    let value = e.target.value;
                                    if (value.trim() !== "") {
                                        setCountry(e.target.value);
                                    } else {
                                        setCountry("");

                                    }
                                }}
                                value={country}
                            />
                        </ContainerInput>

                        <ContainerInput>
                            <label>guests</label>
                            <Input type="text" placeholder="Add guests" readOnly
                                onFocus={() => {
                                    changeOptions("guests");
                                }}
                            />
                        </ContainerInput>

                        <ContainerInput>
                            <Button onClick={Search}>
                                <BiSearchAlt2 color=' #F2F2F2' size={22} />
                                Search
                            </Button>
                        </ContainerInput>

                    </Form>

                    <ContainerItens>
                        {
                            options === "location" && (
                                <ItensLocation>

                                    {
                                        contries.map((element, index) => {
                                            return (
                                                <ItemLocation key={index}
                                                    onClick={() => {
                                                        addCountry(index);
                                                    }}>
                                                    <FaMapMarkerAlt color=' #4F4F4F' size={19} />
                                                    {element}
                                                </ItemLocation>
                                            )
                                        })
                                    }



                                </ItensLocation>
                            )
                        }


                        {
                            options === "guests" && (
                                <ItensGuests>

                                    <div className="containerAdult">
                                        <h3>Adults</h3>
                                        <p>Ages 13 or above</p>

                                        <div className="controls">
                                            <ButtonControl color={"#828282"}
                                                onClick={() => {
                                                    removeGuests("Adults");
                                                }}
                                            >-</ButtonControl>
                                            <span className="valueControl">{countAdult}</span>
                                            <ButtonControl
                                                onClick={() => {
                                                    addGuests("Adults");
                                                }}
                                            >+</ButtonControl>
                                        </div>

                                    </div>

                                    <div className="containerChildren">
                                        <h3>Children</h3>
                                        <p>Ages 2-12</p>

                                        <div className="controls">
                                            <ButtonControl color={"#828282"}
                                                onClick={
                                                    () => {
                                                        removeGuests("Children");
                                                    }
                                                }
                                            >-</ButtonControl>

                                            <span className="valueControl">{countChildren}</span>

                                            <ButtonControl
                                                onClick={() => {
                                                    addGuests('Children');
                                                }}
                                            >+</ButtonControl>
                                        </div>

                                    </div>

                                </ItensGuests>
                            )
                        }


                    </ContainerItens>

                </ModalContainer>
            </ModalElement>
            <Overlay onClick={toggleModal} />
        </>
    )
};

export default Modal;