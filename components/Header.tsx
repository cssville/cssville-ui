import React from 'react';
import { Button } from './ui/simple/Button';

export const Header = (props: any) => {
  return (
    <>
      <div className="pos-fixed wid-full bor-bot-1 mar-bot-7 hei-11 md-hei-inherit z-ind-10 bac-col-white">
        <div className="mar-x-auto max-wid-xl pad-x-7 lg-pad-x-6 md-pad-x-5">
          <div className="dis-flex fle-dir-row pad-y-4 ali-ite-center jus-con-center">
            <div className="dis-flex ali-ite-center jus-con-center">
              <a href="/" className="dis-flex tex-dec-none col-green-500">
                <img src="img/cssville.svg" alt="logo" className="hei-8 wid-8 pad-y-4" />
                <div className="dis-flex ali-ite-center jus-con-center md-dis-none pad-lef-4">
                  <span className="fon-wei-900 fon-siz-x-large fon-fam-code">cssville</span>
                </div>
              </a>
            </div>
            <div className="md-dis-none fle-gro-1"></div>
            <div className="dis-flex fle-dir-row md-fle-dir-column md-mar-x-auto ali-ite-center jus-con-center pad-rig-4 md-pad-rig-0">
              {
                [
                  ['Home', '/'],
                  ['Buttons', '/button'],
                  ['Chips', '/chip'],
                  ['Typography', '/typography'],
                ].map(([text, href]) => (
                  <a key={href} className="dis-flex pad-x-5 pad-y-4 tex-dec-none bac-col-grey-100-hover bor-rad-5 col-blue-grey-900" href={href}>
                    <span className="fon-siz-medium fon-wei-bold">{text}</span>
                  </a>
                ))
              }
            </div>
            <Button bold tag={"a"} href="https://github.com/cssville/cssville" target="_blank" rel="noopener"
              icon={<img src="img/mark-github.svg" alt="mark-github" className="hei-100 wid-full" />} >
              Open source
            </Button>
          </div>
        </div>
      </div>
      <div className="wid-full hei-11 pos-relative"></div>
      <div className="wid-full hei-11 dis-none md-dis-flex pos-relative"></div>
    </>
  );
}
