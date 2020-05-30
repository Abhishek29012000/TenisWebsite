import React from 'react';
import Wrapper from './Wrapper'
import Modal from 'react-modal'
import '../styles/main.css';
import WriteResult from '../Components/WriteResult'
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: "450px",
        height: "60vh",
        border: "10px solid black",
        opacity: "0.67",
        borderRadius: "20px",
        fontFamily: "Comic Sans MS, Comic Sans, cursive"
    }
};

function Info() {
    var subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function afterOpenModal() {
        subtitle.style.color = 'black';
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <Wrapper>
            <div className="WynikiRespo">
                <div className="TitleResults">
                    <br></br>
                    <h1><b>TWÓJ PANEL WYNIKÓW</b></h1>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-6">
                        <div className="RankingResults">
                            <h2>    Ranking</h2>
                            <table className="table3" >
                                <tbody>
                                    <tr>
                                        <th>Pozycja </th>
                                        <th>Imie </th>
                                        <th>Nazwisko </th>
                                        <th> </th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Janusz</td>
                                        <td>Nosacz</td>
                                        <td><form className="s">
                                            <button onClick={openModal} className="btn" type="button" id="myBtn">Szczegóły</button>
                                        </form>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Tadeusz</td>
                                        <td>Kiszka</td>
                                        <td>  <form className="s"> <button onClick={openModal} className="btn" type="button" id="myBtn">Szczegóły</button> </form></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Pjoter</td>
                                        <td>Ojpjoter</td>
                                        <td> To ty </td>
                                    </tr>

                                    <tr>
                                        <td>4</td>
                                        <td>Pjoter</td>
                                        <td>Ojpjoter</td>
                                        <td> </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="LeagueResults">
                            <h2>Liga</h2>
                            <table className="table3" >
                                <tbody>
                                    <tr>
                                        <th>W dniu </th>
                                        <th>Przeciwko </th>
                                        <th> </th>
                                        <th> </th>
                                    </tr>
                                    <tr>
                                        <td>12.04.2020</td>
                                        <td>Janusz Nosacz</td>
                                        <td></td>
                                        <td><form className="form-inline"> <button onClick={openModal} className="btn" type="button" id="myBtn">Szczegóły</button> </form></td>
                                    </tr>
                                    <tr>
                                        <td>17.04.2020</td>
                                        <td>Tadeusz Kiszka</td>
                                        <td> </td>
                                        <td>  <form className="form-inline"> <button onClick={openModal} className="btn" type="button" id="myBtn">Szczegóły</button> </form></td>
                                    </tr>
                                    <tr>
                                        <td>20.04.2020</td>
                                        <td>Pjoter Ojpjoter</td>
                                        <td></td>
                                        <td>  <form className="form-inline"> <button onClick={openModal} className="btn" type="button" id="myBtn">Szczegóły</button> </form></td>
                                    </tr>

                                    <tr>
                                        <td>20.04.2020</td>
                                        <td>Pjoter Ojpjoter</td>
                                        <td></td>
                                        <td>  <form className="form-inline"> <button onClick={openModal} className="btn" type="button" id="myBtn">Szczegóły</button> </form></td>
                                    </tr>

                                    <tr>
                                        <td>20.04.2020</td>
                                        <td>Pjoter Ojpjoter</td>
                                        <td></td>
                                        <td>  <form className="form-inline"> <button onClick={openModal} className="btn" type="button" id="myBtn">Szczegóły</button> </form></td>
                                    </tr>

                                    <tr>
                                        <td>20.04.2020</td>
                                        <td>Pjoter Ojpjoter</td>
                                        <td></td>
                                        <td>  <form className="form-inline"> <button onClick={openModal} className="btn" type="button" id="myBtn">Szczegóły</button> </form></td>
                                    </tr>

                                    <tr>
                                        <td>20.04.2020</td>
                                        <td>Pjoter Ojpjoter</td>
                                        <td></td>
                                        <td>  <form className="form-inline"> <button onClick={openModal} className="btn" type="button" id="myBtn">Szczegóły</button> </form></td>
                                    </tr>

                                    <tr>
                                        <td>20.04.2020</td>
                                        <td>Pjoter Ojpjoter</td>
                                        <td></td>
                                        <td>  <form className="form-inline"> <button onClick={openModal} className="btn" type="button" id="myBtn">Szczegóły</button> </form></td>
                                    </tr>

                                    <tr>
                                        <td>01.05.2020</td>
                                        <td>Pjoter Wookurla</td>
                                        <td></td>
                                        <td>  <form className="form-inline"> <button onClick={openModal} className="btn" type="button" id="myBtn">Szczegóły</button> </form></td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
                <div>
                    <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <h2 ref={_subtitle => (subtitle = _subtitle)}>Zapisz wynik spotkania</h2>
                        <WriteResult />


                    </Modal>
                </div >
            </div>
        </Wrapper >
    )
}
export default Info;