import React from 'react';
import { Button } from './simple/Button';

export const Header = (props: any) => {
  return (
    <>
      <div className="position-fixed w-12 border-bottom-1 mb-6 h-64px md-h-inherit z-10 bg-color-white">
        <div className="mx-auto max-w-xl px-6 lg-px-5 md-px-4">
          <div className="d-flex flex-direction-row py-3 align-items-center justify-content-center">
            <div className="d-flex align-items-center justify-content-center">
              <a href="/" className="d-flex text-decoration-none color-green-500">
                <img src="img/cssville.svg" alt="logo" className="h-32px w-32px py-3" />
                <div className="d-flex align-items-center justify-content-center md-d-none pl-3">
                  <span className="fw-900 fs-x-large font-family-code">cssville</span>
                </div>
              </a>
            </div>
            <div className="md-d-none flex-grow-1"></div>
            <div className="d-flex flex-direction-row md-flex-direction-column md-mx-auto align-items-center justify-content-center">
              {
                [
                  ['Demo', '#demo'],
                  ['Prefixes', '#prefixes'],
                  ['Classes', '#classes'],
                ].map(([text, href]) => (
                  <a className="d-flex px-4 py-3 text-decoration-none bg-color-grey-100-hover br-4 color-blue-grey-900" href={href}>
                    <span className="fs-medium fw-bold">{text}</span>
                  </a>
                ))
              }
            </div>
            <Button bold tag={"a"} href="https://github.com/cssville/cssville" target="_blank" rel="noopener"
              icon={<img src="img/mark-github.svg" alt="mark-github" className="h-100 w-100" />} >
              Open source
            </Button>
          </div>
        </div>
      </div>
      <div className="w-12 h-64px position-relative"></div>
      <div className="w-12 h-64px d-none md-d-flex position-relative"></div>
    </>
  );
}
