import React from 'react'
import {motion} from "framer-motion";
import { useDispatch } from 'react-redux';
import { followersAction_Move1 } from '../../../../redux/actions';
import { followersAction_Move2 } from '../../../../redux/actions';
import { followersAction_Move3 } from '../../../../redux/actions';
import { followersAction_Move4 } from '../../../../redux/actions';
import { followersAction_Move5 } from '../../../../redux/actions';
import { followersAction_Move6 } from '../../../../redux/actions';
export default function FMove1() {
  const dispatch = useDispatch();
  return (
    <motion.div className="slider__container embla__container is-draggable"
    drag="x"
    dragConstraints={{
      left:-90,
      right:0


    }}>

    <div
      className="slider__slides embla__slides"
      style={{ transform: "translate3d(0%, 0px, 0px)" }}
    >
      <div
        className="slider__slide embla__slide is-current-slide is-selected"
        onClick={e => {
          dispatch(followersAction_Move1({
            id: 1,
            actualPrice: 3.63,
            discount:2.97
          }))
        }}
        style={{ left: "0%" }}
     
      >
        <div className="plan is-active">
          <div className="plan__inner">
            <div className="plan__bar">
              <span style={{ width: "18%" }} />
              <i>
                Save {/* */}18{/* */}%
              </i>
            </div>
            <div className="plan__title">
              <strong>100</strong> {/* */}Followers
            </div>
            <div className="plan__price text-sm">
              <span>${/* */}3.63</span>{" "}
              <strong className="text-orange">${/* */}2.97</strong>
            </div>
            <a
              className="plan__link"
              href="https://app.twicsy.com/order/start/100-followers"
            />
          </div>
        </div>
      </div>
      <div
        className="slider__slide embla__slide is-next-slide is-selected"
        style={{ left: "0%" }}
        onClick={e => {
          dispatch(followersAction_Move2({
            id: 2,
            actualPrice: 9.07,
            discount:5.49
          }))
        }}
        
      >
        <div className="plan">
          <div className="plan__inner">
            <div className="plan__bar">
              <span style={{ width: "40%" }} />
              <i>
                Save {/* */}40{/* */}%
              </i>
            </div>
            <div className="plan__title">
              <strong>250</strong> {/* */}Followers
            </div>
            <div className="plan__price text-sm">
              <span>${/* */}9.07</span>{" "}
              <strong className="text-orange">${/* */}5.49</strong>
            </div>
            <a
              className="plan__link"
              href="https://app.twicsy.com/order/start/250-followers"
            />
          </div>
        </div>
      </div>
      <div
        className="slider__slide embla__slide is-selected"
        style={{ left: "0%" }}
        onClick={e => {
          dispatch(followersAction_Move3({
            id: 3,
            actualPrice: 18.15,
            discount:7.99
          }))
        }}



             >
        <div className="plan">
          <div className="plan__inner">
            <div className="plan__bar">
              <span style={{ width: "56%" }} />
              <i>
                Save {/* */}56{/* */}%
              </i>
            </div>
            <div className="plan__title">
              <strong>500</strong> {/* */}Followers
            </div>
            <div className="plan__price text-sm">
              <span>${/* */}18.15</span>{" "}
              <strong className="text-orange">${/* */}7.99</strong>
            </div>
            <a
              className="plan__link"
              href="https://app.twicsy.com/order/start/500-followers"
            />
          </div>
        </div>
      </div>
      <div
        className="slider__slide embla__slide is-selected"
        style={{ left: "0%" }}
        onClick={e => {
          dispatch(followersAction_Move4({
            id: 4,
            actualPrice: 36.30,
            discount:13.09
          }))
        }}
       
      >
        <div className="plan">
          <div className="plan__inner">
            <div className="plan__bar">
              <span style={{ width: "64%" }} />
              <i>
                Save {/* */}64{/* */}%
              </i>
            </div>
            <div className="plan__title">
              <strong>1000</strong> {/* */}Followers
            </div>
            <div className="plan__price text-sm">
              <span>${/* */}36.30</span>{" "}
              <strong className="text-orange">${/* */}13.09</strong>
            </div>
            <a
              className="plan__link"
              href="https://app.twicsy.com/order/start/1000-followers"
            />
          </div>
        </div>
      </div>
      <div
        className="slider__slide embla__slide is-selected"
        style={{ left: "0%" }}
        onClick={e => {
          dispatch(followersAction_Move5({
            id: 5,
            actualPrice: 90.75,
            discount:28.99
          }))
        }}
       
      >
        <div className="plan">
          <div className="plan__inner">
            <div className="plan__bar">
              <span style={{ width: "68%" }} />
              <i>
                Save {/* */}68{/* */}%
              </i>
            </div>
            <div className="plan__title">
              <strong>2500</strong> {/* */}Followers
            </div>
            <div className="plan__price text-sm">
              <span>${/* */}90.75</span>{" "}
              <strong className="text-orange">${/* */}28.99</strong>
            </div>
            <a
              className="plan__link"
              href="https://app.twicsy.com/order/start/2500-followers"
            />
          </div>
        </div>
      </div>
      <div className="slider__slide embla__slide"
       onClick={e => {
        dispatch(followersAction_Move6({
          id: 6,
          actualPrice: 181.50,
          discount:49.99
        }))
      }}
     >
        <div className="plan">
          <div className="plan__inner">
            <div className="plan__bar">
              <span style={{ width: "72%" }} />
              <i>
                Save {/* */}72{/* */}%
              </i>
            </div>
            <div className="plan__title">
              <strong>5000</strong> {/* */}Followers
            </div>
            <div className="plan__price text-sm">
              <span>${/* */}181.50</span>{" "}
              <strong className="text-orange">${/* */}49.99</strong>
            </div>
            <a
              className="plan__link"
              href="https://app.twicsy.com/order/start/5000-followers"
            />
          </div>
        </div>
      </div>
    </div>
  </motion.div>
  )
}
