import React from 'react';
import { ReactComponent as XIcon } from '../../assets/icons/x.svg';
const Modal = ({ setOpenModal, title, content }) => {
  return (
    <>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-40"
          onClick={() => setOpenModal(false)}
        ></div>
        <div className="flex items-center min-h-screen">
          <div className="relative w-full max-w-4xl mx-auto bg-white rounded-md shadow-lg">
            <div
              className="absolute bg-white rounded-full top-0 right-0 sm:-top-2 sm:-right-2 cursor-pointer hover:bg-primary hover:text-white"
              onClick={() => setOpenModal(false)}
            >
              <XIcon className="w-8 h-8 text-lg" />
            </div>
            <div className="sm:flex">
              <div className="text-center w-full sm:text-left">
                <div className="py-2 pl-5 bg-[#f1f1f1] w-full">
                  <h4 className="text-2xl font-medium text-gray-800">
                    {title}
                  </h4>
                </div>

                <div className="p-5">{content}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
