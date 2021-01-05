import {connect} from 'react-redux';

const Sample = ({posts}) =>{
    // console.log(posts); // []
    return (
        <div className="sample">
            <p>This is connected Sample.js component</p>
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        posts: state.postReducer.posts
    }
}

export default connect(mapStateToProps,null)(Sample);