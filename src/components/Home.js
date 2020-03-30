import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getPost} from "../actions/actionCreators";
import CharacterCard from "./characterCard";

function Home(props) {
    useEffect(()=> {
        props.getPost();
    }, []);

    return (
        <div>
        <h1>hi</h1> 
        {props.journals.map((chars, id) => {
        return <CharacterCard key={id} chars={chars} />;
      })}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        journals: state.reducer.journals
    };
};
export default connect(mapStateToProps, { getPost })(Home);