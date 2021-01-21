import './style.scss';
import { connect } from 'react-redux'
import { buyCake } from '../../redux'

const Home = (props) => {
    return(
        <div>
            Cake: { props.numOfCake }
            <br></br>
            <button onClick={ props.buyCake }>Buy</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCake: state.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);