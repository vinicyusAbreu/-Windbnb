import { useContext } from "react";
import { Container, HeaderInfo, H1, Theamount, ContainerCard, Card, NoDisponible } from "./styles";
import { AiFillStar } from 'react-icons/ai';
import { WindbnbContext } from "../../context/windbnb";
import Load from "../Load";
const Locals = () => {
    const { stays, setStays, country, loading } = useContext(WindbnbContext);
    return (
        <Container>
            <HeaderInfo>
                <H1>Stays in {country}</H1>
                <Theamount>{stays.length > 12 ? ("12+") : stays.length} stays</Theamount>
            </HeaderInfo>

            <ContainerCard>
                {loading && <Load />}
                {stays.length > 0 && stays.map((stay, index) => (

                    <Card key={index}>
                        <img src={stay.photo} alt={stay.title} />
                        <div className="infoCard">
                            {
                                stay.superHost && (<span className="superHost">Super host</span>)
                            }

                            <p className="info">{stay.type} {stay.beds && (
                                `. ${stay.beds} beds`
                            )}</p>
                            <span className="star">
                                <AiFillStar size={15} color="#EB5757" />
                                {stay.rating}
                            </span>
                        </div>
                        <h2>{stay.title}</h2>
                    </Card>

                ))}
                {stays.length === 0 && !loading && (
                    <NoDisponible>
                        no stay found
                    </NoDisponible>

                )}
            </ContainerCard>

        </Container>
    )
};

export default Locals;