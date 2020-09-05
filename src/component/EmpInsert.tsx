import React, { useState, useEffect } from 'react';
import { addList, updList } from '../stores/employees/actions';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../stores';
import { createSelector } from 'reselect'

const EmpInsert: React.FC = () => {
    const [id, setId] = useState(-1);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [occupation, setOccupation] = useState("");
    const [location, setLocation] = useState("");
    const dispatch = useDispatch();
    const info = useSelector((state:ApplicationState) => state.list.info);
    
    useEffect(() => {
      setId(info.id);
      setName(''+info.name);
      setAge(''+info.age);
      setOccupation(''+info.occupation);
      setLocation(''+info.location);
    }, [info]);

    const strInfo =  name+';'+age+';'+occupation+';'+location;
    
    return (
      <div className="row">
        <div className="cell">
          <input 
            type='text' 
            value={name} 
            onChange={(e) => {
              setName(e.target.value);
              }}/>
        </div>
        <div className="cell">
          <input
            type="text"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        <div className="cell">
          <input
            type="text"
            value={occupation}
            onChange={(e) => {
              setOccupation(e.target.value);
            }}
          />
        </div>
        <div className="cell">
          <input
            type="text"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </div>
          <div className="cell">
            <input type="button" value="Insert/Update" 
            onClick={() => {
              (id===-1)?
              dispatch(addList(strInfo)):dispatch(updList(strInfo,id)) ;
              setName('');
              setAge('');
              setOccupation('');
              setLocation('');
              }}/>
          </div>
      </div>
    );
}

export default EmpInsert;