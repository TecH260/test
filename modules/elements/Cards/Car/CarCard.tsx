import { useSanitize } from 'app/hooks';
import { ICarModel } from 'app/models';
import { CarCardBonuses } from 'modules/elements';
import { CarCardDetails } from 'modules/elements';
import { CarCardHeader } from 'modules/elements';
import { CarCardInfo } from 'modules/elements';
import { CarCardVerify } from 'modules/elements';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { CarCardSwiper } from 'modules/elements';
import { sanitize } from 'libs/functions';

interface ICarInfo {
  car: ICarModel;
}

export const CarInfo: React.FC<ICarInfo> = ({ car }) => {
  return (
    <>
      {car && (
        <>
          <CarCardHeader
            id={car.id}
            mark={car.mark}
            model={car.model}
            year={car.year}
            viewed={car.viewed}
          />
          <div className='car__body'>
            <Row className='car__row'>
              <Col md={7} xs={12} className='car__col order-1 order-md-2'>
                <CarCardSwiper cid={car.cid} images={car.img!} />
                <CarCardBonuses />
              </Col>

              <Col md={5} xs={12} className='car__col order-2 order-md-1'>
                <CarCardInfo
                  price={car.price}
                  company_name={car.company_name}
                />
                <CarCardDetails
                  fuel_type={car.fuel_type}
                  horse_power={car.horse_power}
                />
                <CarCardVerify />

                <div className='car__details'>
                  <div className='cars-item__label'>Описание автомобиля</div>
                  <div
                    className='car__details-about'
                    dangerouslySetInnerHTML={sanitize(
                      car.description ? car.description : '',
                    )}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </>
      )}
    </>
  );
};
