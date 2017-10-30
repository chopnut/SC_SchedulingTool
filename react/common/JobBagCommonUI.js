import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react'

export function showJobType(jobType,onChangeFunc,includeLabel=false){
    let once        = <input type="radio" name="job_type" id="job_type" tabIndex="0" value="once" onChange={onChangeFunc} checked/>;
    let recurring   = <input type="radio" name="job_type" id="job_type" tabIndex="0" value="recurring" onChange={onChangeFunc} checked/>;
    if(jobType=="once"){
        recurring   = <input type="radio" name="job_type" id="job_type" tabIndex="0" value="recurring" onChange={onChangeFunc} checked={false}/>;
    }else{
        once        = <input type="radio" name="job_type" id="job_type" tabIndex="0" value="once" onChange={onChangeFunc} checked={false}/>;
    }
    return(
        <div className="inline two fields job_type">
            {includeLabel?<label> Job Type: </label>:""}
            <span className="field">
                <span className="ui radio checkbox">
                    {once}
                    <label> Once &nbsp;</label>
                </span>
            </span>
            <span className="field">
                <span className="ui radio checkbox">
                    {recurring}
                    <label> Recurring </label>
                </span>
            </span>
        </div>
    );
}

export function showDropDownDepartments(options,selections,onchangeFunction){
    return(
        <Dropdown placeholder='Pick departments'
                  fluid
                  floating
                  multiple
                  selection
                  options   = {options}
                  value     = {selections}
                  onChange  = {onchangeFunction}
        />
    );
}


