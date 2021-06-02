import React, { Component, useState } from 'react';
export default function Home() {

  
    return (
        <React.Fragment>
            <div className={`row background` }>
                <input></input>
                <input></input>
                <button className="active">Entrar </button>
                 
                <div className="col-1  d-md-none d-none d-sm-block">
                    <div className="puccinoIG"/>
                </div>

                <div className="d-md-none d-sm-block col-sm-12">
                    <div className="puccinoLogo"/>
                </div>

                <div className="col-md-6 col-xl-12">
                    <div className="puccinoText">
                    </div>
                </div>

  
                <div className="col-xl-5 d-none d-md-block">
                    <div className="puccinoLogo"/>
                </div>

                <div className="  d-sm-block col-md-12">
                    <div className="puccinoIG"/>
                </div>

            </div>
        </React.Fragment>
    );
}