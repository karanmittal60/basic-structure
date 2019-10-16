import React, { useEffect, useState } from "react";
import { Spin, DatePicker, Menu, Dropdown, Button } from "antd";
import { connect } from "react-redux";
import * as bs from "reactstrap";
import { Link } from "react-router-dom";
import { Row, Col, Modal, ModalBody } from "reactstrap";

import { getPartnersList } from "../../redux/actions/Partner";
import { BOOKING_STATUS } from "../../constants/BookingStatusConst";
import { setLoaderState } from "../../redux/actions/Loader";

import eye from "../../../src/assets/images/eye.png";
import edit from "../../../src/assets/images/edit.png";
import add from "../../../src/assets/images/add.png";
import red from "../../../src/assets/images/red.png";
import green from "../../../src/assets/images/green.png";
import yellow from "../../../src/assets/images/yellow.png";
import blue from "../../../src/assets/images/blue.png";
import sync from "../../../src/assets/images/group-7.png";

const { RangePicker } = DatePicker;

function UserListing(props) {
    const STATUS = {
        UNVERIFIED: "En proceso", //In Process,Pending //En proceso
        ACTIVE: "Aceptada", //Accepted             //Aceptada
        INACTIVE: "De baja", //blocked,deactivate  //De baja
        REJECTED: "Rechazada", //Rechazada
        DELETED: 0,
        IN_PROGRESS: "En proceso"
    };

    const { partnerListReducer } = props.reducer;
    const [page, setPage] = useState(1);
    const [modalState, setModalState] = useState(false);
    const [dpiFrontImage, setDpiFrontImage] = useState();
    const [dpiBackImage, setDpiBackImage] = useState();
    const [loaderState, setLoaderState] = useState(false);
    const [status, setStatus] = useState(2);

    const handleStatusClick = e => {
        setStatus(e.key);
    };

    const menu = (
        <Menu className="partnerStatusDrop" onClick={handleStatusClick}>
            <Menu.Item key={2}>
                <span className={"partnerTable-ACTIVE"} style={{ position: "relative" }}>
                  Aceptada
                </span>
            </Menu.Item>
            <Menu.Item key={4}>
                <span className={"partnerTable-REJECTED"} style={{ position: "relative" }} >
                  Rechazada
                </span>
            </Menu.Item>
            <Menu.Item key={3}>
                <span className={"partnerTable-INACTIVE"} style={{ position: "relative" }} >
                  De baja
                </span>
                    </Menu.Item>
                    <Menu.Item key={1}>
                <span className={"partnerTable-IN_PROGRESS"} style={{ position: "relative" }} >
                  En proceso
                </span>
            </Menu.Item>
        </Menu>
    );

    useEffect(() => {
        props.setLoaderState(true);
        props.getPartnersList({
            status: status,
            searchKeyword: "",
            limit: 5,
            paged: page,
            refreshList: true
        });
    }, [status]);

    useEffect(() => {
        const trackScrolling = () => {
            const wrappedElement = document.getElementById("mainContainer");
            if (isBottom(wrappedElement)) {
                setLoaderState(true);
                props
                    .getPartnersList({
                        status: status,
                        searchKeyword: "",
                        limit: 5,
                        paged: 1,
                        refreshList: false
                    })
                    .then(res => {
                        if (res === "success") {
                            setLoaderState(false);
                        }
                    });
            }
        };
        document.addEventListener("scroll", trackScrolling);
    }, []);

    useEffect(() => {
        if (dpiFrontImage && dpiBackImage) setModalState(true);
    }, [dpiBackImage, dpiFrontImage]);

    useEffect(() => {
        const trackScrolling = () => {
            const wrappedElement = document.getElementById("mainContainer");
            if (isBottom(wrappedElement)) {
                setLoaderState(true);
                props
                    .getPartnersList({
                        status: status,
                        searchKeyword: "",
                        limit: 5,
                        paged: 1,
                        refreshList: false
                    })
                    .then(res => {
                        if (res === "success") {
                            setLoaderState(false);
                        }
                    });
            }
        };
        return () => {
            document.removeEventListener("scroll", trackScrolling);
        };
    }, []);

    const isBottom = el => {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    };

    return (
        <div>
            <Modal className="model-main" isOpen={modalState}>
                <ModalBody>
                    <Row>
                        <Col md="12" sm="12" xs="12">
                            <div className="img-licence col-12 col-sm-12 col-md-12">
                                <img
                                    alt=""
                                    className="img-fluid col-6 col-sm-6 col-md-6"
                                    src={dpiFrontImage}
                                    style={{ maxHeight: "100%" }}
                                />
                                <img
                                    alt=""
                                    className="img-fluid col-6 col-sm-6 col-md-6"
                                    src={dpiBackImage}
                                    style={{ maxHeight: "100%" }}
                                />
                            </div>
                        </Col>
                        <div className="licence-btn">
                            <button onClick={() => setModalState(false)}>LISTO</button>
                        </div>
                    </Row>
                </ModalBody>
            </Modal>
            <div className="btn-mainwrap">
                <bs.Row>
                    <bs.Col md="4" sm="4" xs="12" className="partnerlistDatePicker">
                        <bs.InputGroup>
                            <bs.Label style={{ width: "50%" }}>Fecha inicial</bs.Label>
                            <bs.Label style={{ width: "50%" }}>Fecha final</bs.Label>
                            <RangePicker size="large" />
                        </bs.InputGroup>
                    </bs.Col>

                    {/* <bs.Col md="3" sm="3" xs="12">
            <bs.InputGroup>
              <bs.Label>Bloque de horas </bs.Label>
              <bs.Input type="text" placeholder="Todos"></bs.Input>
            </bs.InputGroup>
          </bs.Col> */}

                    <bs.Col md="2" sm="2" xs="12">
                        <bs.InputGroup>
                            <bs.Label>Zona</bs.Label>
                            <Dropdown overlay={menu} placement="bottomCenter" size="large">
                                <Button size="large">
                                    Rechazadas <img alt="" src={sync} />
                                </Button>
                            </Dropdown>
                        </bs.InputGroup>
                    </bs.Col>
                    <div className="points-wrapper">
                        <bs.Col md="12" sm="12" xs="12">
                            <table className="table point">
                                <tr>
                                    <td>
                                        <img alt="" src={green} />
                                    </td>
                                    <td>Aceptada</td>
                                    <td>100</td>
                                </tr>
                                <tr>
                                    <td>
                                        <img alt="" src={red} />
                                    </td>
                                    <td>Rechazada</td>
                                    <td>20</td>
                                </tr>

                                <tr>
                                    <td>
                                        <img alt="" src={blue} />
                                    </td>
                                    <td>De baja</td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>
                                        <img alt="" src={yellow} />
                                    </td>
                                    <td>En proceso</td>
                                    <td>50</td>
                                </tr>
                            </table>
                        </bs.Col>
                    </div>
                </bs.Row>
            </div>
            <div className="hr1"></div>
            <div className="table-list wrap">
                <bs.Table responsive bordered className="partner-list-table">
                    <thead className="tlble-wraper ">
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>DPI Frente</th>
                    <th>TelÃ©fono</th>
                    <th>Paso prueba de peinado</th>
                    <th>Antecedentes en orden</th>
                    <th>Zona asignada</th>
                    <th>Estado</th>
                    </thead>
                    {partnerListReducer.rows &&
                    partnerListReducer.rows.map((val, index) => {
                        const {
                            phone,
                            name,
                            dpi_front_img,
                            dpi_number,
                            dpi_back_img,
                            zone_id,
                            zone_name,
                            status,
                            uid
                        } = val;
                        return (
                            <tr className="tlble-wraper" key={index}>
                                <td>
                                    <strong>{name.split(" ")[0]}</strong>
                                    <div className="table-btn">
                                        <Link
                                            to={{
                                                pathname: `/dashboard/userInfo`,
                                                state: { fromPartnerList: true, partnerId: uid }
                                            }}
                                        >
                                            <button>Ver perfil </button>
                                        </Link>
                                    </div>
                                </td>
                                <td>
                                    <strong>{name.split(" ")[1]} </strong>
                                </td>
                                <td>
                                    {dpi_number}
                                    <img
                                        alt=""
                                        className="img-fluid table-icon"
                                        src={eye}
                                        onClick={() => {
                                            setDpiFrontImage(dpi_front_img);
                                            setDpiBackImage(dpi_back_img);
                                        }}
                                    />
                                </td>
                                <td>{phone}</td>
                                <td>
                                    <div className="partnerRadioWrap">
                                        <input
                                            type="radio"
                                            className="partnerlistradio"
                                            name={"paso" + index}
                                            id={"pasorad1" + index}
                                        />
                                        <label for={"pasorad1" + index}>SI</label>

                                        <input
                                            type="radio"
                                            className="partnerlistradio"
                                            name={"paso" + index}
                                            id={"pasorad2" + index}
                                        />
                                        <label for={"pasorad2" + index}>NO</label>
                                    </div>
                                    <img alt="" className="img-fluid table-icon" src={eye} />
                                </td>
                                <td>
                                    <div className="partnerRadioWrap">
                                        <input
                                            type="radio"
                                            className="partnerlistradio"
                                            name={"antecedentes" + index}
                                            id={"antecedentesrad1" + index}
                                        />
                                        <label for={"antecedentesrad1" + index}>SI</label>
                                        <input
                                            type="radio"
                                            className="partnerlistradio"
                                            name={"antecedentes" + index}
                                            id={"antecedentesrad2" + index}
                                        />
                                        <label for={"antecedentesrad2" + index}>NO</label>
                                    </div>
                                    <img alt="" className="img-fluid table-icon" src={add} />
                                </td>
                                <td>
                                    {zone_name}
                                    <div className="addeye">
                                        <img alt="" className="img-fluid table-icon" src={edit} />
                                    </div>
                                </td>
                                <td>
                    <span className={"partnerTable-" + BOOKING_STATUS[status]}>
                      {STATUS[BOOKING_STATUS[status]]}
                    </span>
                                    <img alt="" className="img-fluid table-icon" src={edit} />
                                </td>
                            </tr>
                        );
                    })}
                </bs.Table>
            </div>
            <div>
                {loaderState && <Spin style={{ width: "100%", margin: "auto" }} />}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        ...state
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getPartnersList: data => {
            return dispatch(getPartnersList(data));
        },
        setLoaderState: status => dispatch(setLoaderState(status))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserListing);