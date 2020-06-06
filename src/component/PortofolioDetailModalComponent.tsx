import React from "react";
import { RootState } from "../redux/state";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Row, Container, Table, Col } from "react-bootstrap";
import { changeModalShowStatus } from "../redux/action/UIActionList";

export function PortofolioDetailModalComponent() {
  var uiState = (state: RootState) => state.ui;
  var reduxData = useSelector(uiState);
  var dispatch = useDispatch();
  var closeModal = () =>
    dispatch(changeModalShowStatus(false, reduxData.showedPortofolioData));
  return (
    <div>
      <Modal
        show={reduxData.isDetailPortofolioModalOpen}
        onHide={closeModal}
        id="profilemodal"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="justify-content-center">
              {reduxData.showedPortofolioData.name}
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table>
            <Container style={{ padding: 25 }}>
              <Row className="justify-content-center">
                <img
                  width={256}
                  height={256}
                  alt="portofolio icon"
                  src={reduxData.showedPortofolioData.image}
                ></img>
              </Row>
              <Row style={{ textAlign: "justify", textJustify: "inter-word" }}>
                <h4>Penjelasan</h4>
              </Row>
              <Row
                className="justify-content-center"
                style={{ textAlign: "justify", textJustify: "inter-word" }}
              >
                {reduxData.showedPortofolioData.explanation}
              </Row>
              <Row>
                <h4>Tools</h4>
              </Row>
              <Row>{reduxData.showedPortofolioData.tools}</Row>
              <Row>
                  <a href={reduxData.showedPortofolioData.github ?? ""} target="_blank">
                  <img src="https://cdn.brandicons.org/icons/github.svg" width={32} height={32}/>
                  </a>
              </Row>
              <Row></Row>
            </Container>
          </Table>
        </Modal.Body>
      </Modal>
    </div>
  );
}
