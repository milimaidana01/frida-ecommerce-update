import React from "react";
import "../styles/InfoSection.css"
import { buyInfo, paymentInfo, shippingInfo } from "../maps/TittlesAndTexts";
import Filter1Icon from '@mui/icons-material/Filter1';
import Filter2Icon from '@mui/icons-material/Filter2';
import Filter3Icon from '@mui/icons-material/Filter3';
import Filter4Icon from '@mui/icons-material/Filter4';
import Filter5Icon from '@mui/icons-material/Filter5';

const InfoSection = () => {

  return (
    <>
    <div className="info-to-buy-section" id="info-to-buy-section">
      {buyInfo.map((info, index) => {
        return (<>
                  <div className="title">{info.buyTittle}</div>
                    <div className="text">
                      <Filter1Icon className="icons"/>
                      {info.buyFirstText}
                    </div>
                    <div className="text">
                      <Filter2Icon className="icons"/>
                      {info.buySecondText}
                      </div>
                    <div className="text">
                      <Filter3Icon className="icons"/>
                      {info.buyThirdText}
                    </div>
                    <div className="text">
                      <Filter4Icon className="icons"/>
                      {info.buyFourthText}
                    </div>
                    <div className="text">
                      <Filter5Icon className="icons"/>
                      {info.buyFifthText}
                    </div>
                </>
            );
        })}
      {paymentInfo.map((info, index) => {
        return (<>
                  <div className="title">{info.paymentTittle}</div>
                    <div className="text">{info.paymentText}</div>
                </>
            );
        })}
      {shippingInfo.map((info, index) => {
        return (<>
                  <div className="title">{info.shipmentTittle}</div>
                    <div className="text">{info.shipmentFirstText}</div>
                    <div className="text">{info.shipmentSecondText}</div>
                </>
            );
        })}
    </div>
    </>
  );
};

export default InfoSection;
